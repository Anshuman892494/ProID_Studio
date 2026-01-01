import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authenticate } from "../middleware/auth.js";
import User from "../models/User.js";
import { SendVerificationCode } from "../middleware/Email.js";

const router = Router();

// Password validation helper
const validatePassword = (password) => {
  return password.length >= 6;
};

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, organization, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // For verification Code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // For verification Code Expiration Time
    const verificationCodeExpiresAt = new Date(
      Date.now() + 10 * 60 * 1000 // 10 minutes
    );


    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      organization: organization || "",
      phone: phone || "",
      role: "user",
      verificationCode,
      verificationCodeExpiresAt,
      isVerified: false,
      createdAt: new Date()
    });

    await user.save();

    await SendVerificationCode(user.email, user.name, verificationCode);

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        organization: user.organization,
        role: user.role
      }
    });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
});

/* ================= VERIFY EMAIL ================= */
router.post("/verify-email", async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({
        success: false,
        message: "Email and verification code required"
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified"
      });
    }

    // OTP expired check
    if (!user.verificationCodeExpiresAt || user.verificationCodeExpiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Verification code expired. Please request a new one."
      });
    }

    // OTP match check
    if (user.verificationCode !== code) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code"
      });
    }

    // SUCCESS
    user.isVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpiresAt = null;
    await user.save();

    res.json({
      success: true,
      message: "Email verified successfully"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Verification failed"
    });
  }
});

/* ================= RESEND OTP ============ */
router.post("/resend-verification", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified"
      });
    }

    const newCode = Math.floor(100000 + Math.random() * 900000).toString();

    user.verificationCode = newCode;
    user.verificationCodeExpiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await SendVerificationCode(user.email, user.name, newCode);

    res.json({
      success: true,
      message: "New verification code sent"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to resend verification code"
    });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Email not verified. Please verify your email first."
      });
    }

    const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        organization: user.organization,
        role: user.role
      }
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
});

/* ================= UPDATE PASSWORD ================= */
router.put("/update-password", authenticate, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid old password" });
    }

    if (!validatePassword(newPassword)) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ success: true, message: "Password updated successfully" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Password update failed" });
  }
});

/* ================= PROFILE ================= */
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });

  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch profile" });
  }
});

export default router;
