import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/", { replace: true });
    }

    // Check for saved credentials
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setForm(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    if (!form.email.trim() || !form.password.trim()) {
      setError("Email and password are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Save email if remember me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", form.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      const res = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Show success message
        setError("success:Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      } else {
        setError(data.error || data.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Check if error message is success/info type
  const getMessageType = (message) => {
    if (message.startsWith("success:")) return "success";
    if (message.startsWith("info:")) return "info";
    return "error";
  };

  const getMessageText = (message) => {
    if (message.startsWith("success:")) return message.replace("success:", "");
    if (message.startsWith("info:")) return message.replace("info:", "");
    return message;
  };

  const messageType = error ? getMessageType(error) : "";
  const messageText = error ? getMessageText(error) : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <main className="container mx-auto py-8">
        {/* Main Content Container */}
        <div className="max-w-md mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-xl md:text-4xl font-bold text-primary mb-3">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-lg">
              Sign in to access your ID Card Studio
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Status Message */}
            {error && (
              <div className={`mb-6 p-4 rounded-lg ${messageType === "success" ? "bg-green-50 border border-green-200" :
                messageType === "info" ? "bg-blue-50 border border-blue-200" :
                  "bg-red-50 border border-red-200"
                }`}>
                <div className="flex items-start gap-3">
                  <i className={`fas ${messageType === "success" ? "fa-check-circle text-green-500" :
                    messageType === "info" ? "fa-info-circle text-blue-500" :
                      "fa-exclamation-circle text-red-500"
                    } mt-0.5`}></i>
                  <span className={`text-sm ${messageType === "success" ? "text-green-700" :
                    messageType === "info" ? "text-blue-700" :
                      "text-red-700"
                    }`}>
                    {messageText}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    disabled={loading}
                  >
                    <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary/50"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                {/* <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={loading}
                  className="text-sm text-primary hover:text-secondary font-medium transition-colors duration-300"
                >
                  Forgot password?
                </button> */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Signing in...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt"></i>
                    Sign In to Your Account
                  </>
                )}
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                <span className="flex items-center gap-1">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Secure login</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-bolt text-primary"></i>
                  <span>Fast access</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-headset text-primary"></i>
                  <span>24/7 support</span>
                </span>

              </div>

              {/* Register Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary hover:text-secondary font-semibold transition-colors duration-300"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>

              {/* Register Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <Link
                  to="/verify-email"
                  state={{ email: form.email }}
                  className="text-primary hover:text-secondary font-semibold transition-colors duration-300"
                >
                  Verify Email
                </Link>
              </div>

            </form>
          </div>
        </div>
      </main>

    </div>
  );
}