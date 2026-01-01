import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"]
    },
    organization: {
      type: String,
      default: "",
      trim: true
    },
    phone: {
      type: String,
      default: "",
      trim: true
    },
    role: {
      type: String,
      default: "user"
    },
    verificationCode: {
      type: String
    },
    verificationCodeExpiresAt: {
      type: Date
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

userSchema.index({ createdAt: -1 });

const User = mongoose.model("User", userSchema);

export default User;
