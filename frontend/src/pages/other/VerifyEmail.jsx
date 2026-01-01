import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function VerifyEmail() {
    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [countdown, setCountdown] = useState(0);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // INITIAL EMAIL / NAVIGATION
    useEffect(() => {
        // Run once on mount
        const init = () => {
            const token = localStorage.getItem("token");
            const userStr = localStorage.getItem("user");

            if (token && userStr) {
                try {
                    const user = JSON.parse(userStr);
                    if (user.isVerified) {
                        navigate("/dashboard", { replace: true });
                        return;
                    }
                    if (!email) setEmail(user.email || "");
                } catch (err) {
                    console.error("Error parsing user:", err);
                }
            }

            if (location.state?.email && !email) {
                setEmail(location.state.email);
            } else if (!email) {
                const pending = localStorage.getItem("pendingVerificationEmail");
                if (pending) setEmail(pending);
                else navigate("/register");
            }
        };

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // run once on mount

    // RESEND COUNTDOWN TIMER
    useEffect(() => {
        if (countdown <= 0) return;
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown]);

    // AUTO-FOCUS FIRST INPUT
    useEffect(() => {
        document.getElementById("code-0")?.focus();
    }, []);

    // HANDLE OTP INPUT
    const handleCodeChange = (index, value) => {
        const digit = value.replace(/\D/g, "");
        if (digit.length > 1) return;

        const newCode = [...verificationCode];
        newCode[index] = digit;
        setVerificationCode(newCode);

        setError("");
        setSuccess("");

        // Move focus
        if (digit && index < 5) document.getElementById(`code-${index + 1}`)?.focus();
        if (index === 5 && newCode.every((c) => c !== "")) handleSubmit();
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            document.getElementById(`code-${index - 1}`)?.focus();
        }
        if (e.key === "ArrowLeft" && index > 0) document.getElementById(`code-${index - 1}`)?.focus();
        if (e.key === "ArrowRight" && index < 5) document.getElementById(`code-${index + 1}`)?.focus();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("");
        if (digits.length === 6) {
            setVerificationCode(digits);
            document.getElementById("code-5")?.focus();
        }
    };

    // VALIDATE OTP
    const validateCode = () => {
        const code = verificationCode.join("");
        if (code.length !== 6) {
            setError("Please enter all 6 digits");
            return false;
        }
        if (!/^\d{6}$/.test(code)) {
            setError("Code must be numeric");
            return false;
        }
        if (!email) {
            setError("Email is required");
            return false;
        }
        return true;
    };

    // SUBMIT OTP
    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!validateCode()) return;

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL || "http://localhost:5050"}/api/auth/verify-email`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.toLowerCase(), code: verificationCode.join("") }),
                }
            );
            const data = await res.json();

            if (res.ok && data.success) {
                setSuccess("Email verified successfully! Redirecting...");
                const userStr = localStorage.getItem("user");
                if (userStr) {
                    const user = JSON.parse(userStr);
                    user.isVerified = true;
                    localStorage.setItem("user", JSON.stringify(user));
                }
                localStorage.removeItem("pendingVerificationEmail");
                setTimeout(() => navigate("/dashboard", { replace: true }), 2000);
            } else {
                setError(data.message || "Verification failed.");
                if (data.message?.includes("Invalid")) {
                    setVerificationCode(["", "", "", "", "", ""]);
                    document.getElementById("code-0")?.focus();
                }
            }
        } catch (err) {
            console.error(err);
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // RESEND CODE
    const handleResendCode = async () => {
        if (!email || countdown > 0) return;

        setResendLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL || "http://localhost:5050"}/api/auth/resend-verification`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.toLowerCase() }),
                }
            );
            const data = await res.json();

            if (data.success) {
                setSuccess("A new code has been sent to your email.");
                setCountdown(30);
                setVerificationCode(["", "", "", "", "", ""]);
                document.getElementById("code-0")?.focus();
            } else {
                setError(data.message || "Failed to resend code.");
            }
        } catch (err) {
            console.error(err);
            setError("Network error. Please try again.");
        } finally {
            setResendLoading(false);
        }
    };

    const handleChangeEmail = () => {
        if (email) localStorage.setItem("pendingVerificationEmail", email);
        navigate("/register");
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto animate-fade-in">
                    {/* HEADER */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-primary mb-3">Verify Your Email</h1>
                        <p className="text-gray-600 mb-2">We've sent a 6-digit verification code to</p>
                        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg mb-4">
                            <i className="fas fa-envelope text-gray-500"></i>
                            <span className="font-medium text-gray-900">{email || "your email"}</span>
                            <button
                                onClick={handleChangeEmail}
                                className="text-sm text-primary hover:text-secondary ml-2"
                                type="button"
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                        </div>
                        <p className="text-gray-600 text-sm">Enter the code below to verify your email</p>
                    </div>

                    {/* FORM */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {error && (
                            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                                <i className="fas fa-exclamation-circle text-red-500 mt-0.5"></i>
                                <span className="text-sm text-red-700">{error}</span>
                            </div>
                        )}
                        {success && (
                            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                                <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                                <span className="text-sm text-green-700">{success}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
                                    6-Digit Verification Code
                                </label>
                                <div className="flex justify-center gap-2 mb-6">
                                    {verificationCode.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`code-${index}`}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleCodeChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            onPaste={index === 0 ? handlePaste : undefined}
                                            onFocus={(e) => e.target.select()}
                                            disabled={loading}
                                            className="w-14 h-14 text-center text-2xl font-bold border-2 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed border-gray-300"
                                            autoComplete="one-time-code"
                                        />
                                    ))}
                                </div>

                                <p className="text-center text-sm text-gray-500 mb-2">
                                    Enter the 6-digit code sent to your email
                                </p>

                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={handleResendCode}
                                        disabled={resendLoading || countdown > 0}
                                        className="text-sm text-primary hover:text-secondary font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {resendLoading
                                            ? "Sending..."
                                            : countdown > 0
                                                ? `Resend code in ${countdown}s`
                                                : "Resend verification code"}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || verificationCode.some((d) => d === "")}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? "Verifying..." : "Verify Email"}
                            </button>
                            {/* Register Link */}
                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600">
                                    Already verified? {" "}
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
