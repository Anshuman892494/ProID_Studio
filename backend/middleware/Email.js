import { Verification_Email_Template } from "../config/EmailTemplate.js";
import { transporter } from "./Emailconfig.js";

export const SendVerificationCode = async (email, userName, verificationCode) => {
    try {

        const htmlContent = Verification_Email_Template
            .replace("{{USER_NAME}}", userName)
            .replace("{{VERIFICATION_CODE}}", verificationCode);

        const response = await transporter.sendMail({
            from: '"ProID Studio" <"ProID Studio">',
            to: email,
            subject: "Your OTP Verification Code",
            html: htmlContent,
        });

        console.log("Email Verification Sent Successfully", response.messageId);
    } catch (error) {
        console.error("Email Error:", error);
    }
};
