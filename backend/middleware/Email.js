import { Verification_Email_Template } from "../config/EmailTemplate.js";
import { transporter } from "./Emailconfig.js";

export const SendVerificationCode = async (email, userName, verificationCode) => {
    try {

        const htmlContent = Verification_Email_Template
            .replace("{{USER_NAME}}", userName)
            .replace("{{VERIFICATION_CODE}}", verificationCode);

        console.log(`🔑 Verification Code for ${email}: ${verificationCode}`);

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const senderEmail = process.env.EMAIL_USER;
            const response = await transporter.sendMail({
                from: `"ProID Studio" <${senderEmail}>`,
                to: email,
                subject: "Your OTP Verification Code",
                html: htmlContent,
            });

            console.log("Email Verification Sent Successfully", response.messageId);
        } else {
            console.log("ℹ️ EMAIL_USER/EMAIL_PASS not configured in .env; skipping actual SMTP send. (Use code above)");
        }
    } catch (error) {
        console.error("Email Error:", error.message);
    }
};
