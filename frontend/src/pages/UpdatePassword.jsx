import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UpdatePassword() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  // Redirect to login if user not logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  // Check new password strength
  useEffect(() => {
    let strength = 0;
    if (form.newPassword.length >= 8) strength++;
    if (/[A-Z]/.test(form.newPassword)) strength++;
    if (/[a-z]/.test(form.newPassword)) strength++;
    if (/[0-9]/.test(form.newPassword)) strength++;
    if (/[@$!%*?&]/.test(form.newPassword)) strength++;
    setPasswordStrength(strength);
  }, [form.newPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    // Clear previous messages
    setError("");

    // Check if old password is entered
    if (!form.oldPassword.trim()) {
      setError("Old password is required");
      return false;
    }

    // Check if new password is strong enough
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(form.newPassword)) {
      setError(
        "New password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      );
      return false;
    }

    // Check if passwords match
    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match");
      return false;
    }

    // Check if new password is different from old password
    if (form.oldPassword === form.newPassword) {
      setError("New password must be different from old password");
      return false;
    }

    return true;
  };

  const getPasswordStrengthColor = (strength) => {
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const res = await fetch("http://localhost:5050/api/auth/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || user?.token}`
        },
        body: JSON.stringify({
          oldPassword: form.oldPassword,
          newPassword: form.newPassword
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Password updated successfully!");

        // Reset form
        setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });

        // Redirect after delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setError(data.message || "Password update failed. Please check your old password.");
      }
    } catch (err) {
      console.error("Update password error:", err);
      setError("Network error! Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Update Password
            </h1>
            <p className="text-gray-600">
              Secure your account with a new password
            </p>
          </div>

          {/* Password Update Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Status Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <i className="fas fa-exclamation-circle text-red-500 mt-0.5"></i>
                  <span className="text-sm text-red-700">{error}</span>
                </div>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                  <span className="text-sm text-green-700">{success}</span>
                </div>
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">
              {/* Old Password */}
              <div>
                <label htmlFor="oldPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password *
                </label>
                <div className="relative">
                  <input
                    id="oldPassword"
                    name="oldPassword"
                    type={showOldPassword ? "text" : "password"}
                    value={form.oldPassword}
                    onChange={handleChange}
                    placeholder="Enter your current password"
                    required
                    disabled={loading}
                    autoComplete="current-password"
                    className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    aria-label={showOldPassword ? "Hide password" : "Show password"}
                    disabled={loading}
                  >
                    <i className={`fas ${showOldPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password *
                </label>
                <div className="relative">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={form.newPassword}
                    onChange={handleChange}
                    placeholder="Create a strong new password"
                    required
                    disabled={loading}
                    autoComplete="new-password"
                    className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-key text-gray-400"></i>
                  </div>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    aria-label={showNewPassword ? "Hide password" : "Show password"}
                    disabled={loading}
                  >
                    <i className={`fas ${showNewPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {form.newPassword && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Password strength:</span>
                      <span className="font-medium">
                        {passwordStrength <= 2 ? "Weak" : passwordStrength <= 3 ? "Good" : "Strong"}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getPasswordStrengthColor(passwordStrength)} transition-all duration-300`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm New Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password *
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your new password"
                    required
                    disabled={loading}
                    autoComplete="new-password"
                    className={`w-full px-4 py-3 pl-12 pr-12 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed ${form.confirmPassword && form.newPassword !== form.confirmPassword
                      ? 'border-red-300'
                      : 'border-gray-300'
                      }`}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    disabled={loading}
                  >
                    <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                  {form.confirmPassword && form.newPassword === form.confirmPassword && (
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                      <i className="fas fa-check text-green-500"></i>
                    </div>
                  )}
                </div>
                {form.confirmPassword && form.newPassword === form.confirmPassword && (
                  <p className="text-xs text-green-600 mt-1">Passwords match ✓</p>
                )}
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
                    Updating Password...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sync-alt"></i>
                    Update Password
                  </>
                )}
              </button>

              {/* Cancel Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary font-medium transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Dashboard
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}