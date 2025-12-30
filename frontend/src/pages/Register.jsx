import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        organization: "",
        phone: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [phoneError, setPhoneError] = useState("");
    const navigate = useNavigate();

    // Check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);

    // Check password strength
    useEffect(() => {
        let strength = 0;
        if (form.password.length >= 8) strength++;
        if (/[A-Z]/.test(form.password)) strength++;
        if (/[a-z]/.test(form.password)) strength++;
        if (/[0-9]/.test(form.password)) strength++;
        if (/[@$!%*?&]/.test(form.password)) strength++;
        setPasswordStrength(strength);
    }, [form.password]);

    // Simple phone number validation
    const validatePhone = (phone) => {
        if (!phone.trim()) return ""; // Empty is okay since it's optional

        // Remove all non-digit characters
        const cleanPhone = phone.replace(/\D/g, '');

        // 1. Check if it's exactly 10 digits
        if (cleanPhone.length !== 10) {
            return "Phone number must be exactly 10 digits";
        }

        // 2. Check if starts with 0
        if (cleanPhone.startsWith('0')) {
            return "Phone number should not start with 0";
        }

        // 3. Check if contains only numbers
        if (!/^\d+$/.test(cleanPhone)) {
            return "Phone number should contain only numbers";
        }

        return ""; // Valid phone number
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            // Allow only digits
            const digitsOnly = value.replace(/\D/g, '');

            // Update form with digits only
            setForm(prev => ({ ...prev, [name]: digitsOnly }));

            // Validate phone number
            if (digitsOnly) {
                const validationError = validatePhone(digitsOnly);
                setPhoneError(validationError);
            } else {
                setPhoneError(""); // Clear error if empty
            }
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }

        setError("");
    };

    const validateForm = () => {
        // Clear previous errors
        setError("");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const allowedDomains = ["gmail.com", "outlook.com", "yahoo.com"];

        // Name validation
        if (!form.name.trim()) {
            setError("Name is required");
            return false;
        }

        // Email format validation
        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address");
            return false;
        }

        // Domain check
        const emailDomain = form.email.split("@")[1];
        if (!emailDomain || !allowedDomains.includes(emailDomain)) {
            setError("Please use a valid email provider (gmail, outlook, yahoo)");
            return false;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        if (!passwordRegex.test(form.password)) {
            setError(
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
            );
            return false;
        }

        // Password match validation
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return false;
        }

        // Phone validation (only if provided)
        if (form.phone.trim()) {
            const phoneValidationError = validatePhone(form.phone);
            if (phoneValidationError) {
                setError(phoneValidationError);
                return false;
            }
        }

        // Terms agreement validation
        if (!agreed) {
            setError("You must agree to the terms and conditions");
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
            // Prepare data for API call
            const userData = {
                name: form.name.trim(),
                email: form.email.trim(),
                password: form.password,
                organization: form.organization.trim(),
                phone: form.phone.trim()
            };

            // API call to register user
            const response = await fetch(
                `${process.env.REACT_APP_API_URL || "http://localhost:5050"}/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData),
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                // Store token if returned
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                // Show success message
                setError("success:Registration successful! Redirecting to login...");

                // Redirect to login page after delay
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            setError("Network error! Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const getPasswordStrengthColor = (strength) => {
        if (strength <= 2) return "bg-red-500";
        if (strength <= 3) return "bg-yellow-500";
        return "bg-green-500";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

            <main className="container mx-auto px-4 py-8">
                {/* Main Container */}
                <div className="max-w-2xl mx-auto animate-fade-in">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-xl md:text-4xl font-bold text-primary mb-3">
                            Create Your Account
                        </h1>
                        <p className="text-gray-600 text-lg max-w-md mx-auto">
                            Join our ID Card Generator studio
                        </p>
                    </div>

                    {/* Registration Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        {/* Status Message */}
                        {error && (
                            <div className={`mb-6 p-4 rounded-lg ${error.startsWith("success:") ? "bg-green-50 border border-green-200" :
                                "bg-red-50 border border-red-200"
                                }`}>
                                <div className="flex items-start gap-3">
                                    <i className={`fas ${error.startsWith("success:") ? "fa-check-circle text-green-500" :
                                        "fa-exclamation-circle text-red-500"
                                        } mt-0.5`}></i>
                                    <span className={`text-sm ${error.startsWith("success:") ? "text-green-700" :
                                        "text-red-700"
                                        }`}>
                                        {error.replace("success:", "")}
                                    </span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            disabled={loading}
                                            autoComplete="off"
                                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-user text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            disabled={loading}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            autoCapitalize="none"
                                            spellCheck="false"
                                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-envelope text-gray-400"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Use gmail, outlook, or yahoo email
                                    </p>
                                </div>
                            </div>

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password *
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            placeholder="Create a strong password"
                                            required
                                            disabled={loading}
                                            autoComplete="new-password"
                                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-lock text-gray-400"></i>
                                        </div>
                                    </div>

                                    {/* Password Strength Indicator */}
                                    {form.password && (
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

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Confirm Password *
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm your password"
                                            required
                                            disabled={loading}
                                            autoComplete="new-password"
                                            className={`w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed 
                                                ${form.confirmPassword
                                                    ? form.password === form.confirmPassword
                                                        ? 'border-green-300'
                                                        : 'border-red-300'
                                                    : 'border-gray-300'
                                                }`}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-lock text-gray-400"></i>
                                        </div>
                                        {form.confirmPassword && form.password === form.confirmPassword && (
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                <i className="fas fa-check text-green-500"></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Organization and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Organization
                                        {/* <span className="text-gray-500 text-xs font-normal ml-1">(Optional)</span> */}
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="organization"
                                            name="organization"
                                            type="text"
                                            value={form.organization}
                                            onChange={handleChange}
                                            placeholder="Your company/school name"
                                            disabled={loading}
                                            autoComplete="off"
                                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-building text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            disabled={loading}
                                            autoComplete="off"
                                            maxLength={10}
                                            className={`w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed 
                                                ${phoneError ? 'border-red-300'
                                                    : form.phone && !phoneError
                                                        ? 'border-gray-300'
                                                        : 'border-gray-300'
                                                }`}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <i className="fas fa-phone text-gray-400"></i>
                                        </div>
                                        {form.phone && !phoneError && form.phone.length === 10 && (
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                <i className="fas fa-check text-green-500"></i>
                                            </div>
                                        )}
                                    </div>

                                    {/* Phone validation messages */}
                                    {phoneError && (
                                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                                            <i className="fas fa-exclamation-circle"></i>
                                            {phoneError}
                                        </p>
                                    )}

                                </div>
                            </div>

                            {/* Terms Agreement */}
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    disabled={loading}
                                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary/50 mt-1 flex-shrink-0"
                                />
                                <label htmlFor="agree" className="text-sm text-gray-700">
                                    I agree to the{" "}
                                    <Link to="/terms" className="text-primary hover:text-secondary font-medium">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link to="/privacy" className="text-primary hover:text-secondary font-medium">
                                        Privacy Policy
                                    </Link>
                                    . I understand that my data will be processed in accordance with these policies.
                                </label>
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
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-user-plus"></i>
                                        Create Account
                                    </>
                                )}
                            </button>

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                                <i className="fas fa-shield-alt text-primary"></i>
                                <span>Your information is secured with industry-standard encryption</span>
                            </div>

                            {/* Login Link */}
                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-primary hover:text-secondary font-semibold transition-colors duration-300"
                                    >
                                        Sign in here
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}