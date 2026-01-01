export const Verification_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProID Studio - Email Verification</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f5f7; margin:0; padding:20px;">
  <div style="max-width:500px; margin:0 auto; background-color:#ffffff; border-radius:12px; padding:30px; box-shadow:0 5px 15px rgba(0,0,0,0.1); border:1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="text-align:center; padding-bottom:20px; border-bottom:1px solid #e2e8f0; margin-bottom:25px;">
      <h1 style="color:#04675b; font-size:24px; margin:0;">ProID Studio</h1>
    </div>

    <!-- Content -->
    <div style="font-size:16px; color:#475569; line-height:1.5; margin-bottom:20px;">
      <p>Hi {{USER_NAME}},</p>
      <p>Thank you for registering with ProID Studio! Please verify your email using the code below:</p>

      <!-- OTP -->
      <div style="text-align:center; margin:25px 0;">
        <div style="display:inline-block; font-size:28px; font-weight:700; background:linear-gradient(135deg, #04675b 0%, #09758a 100%); color:white; padding:15px 25px; border-radius:10px; letter-spacing:5px; box-shadow:0 5px 10px rgba(4,103,91,0.2);">
          {{VERIFICATION_CODE}}
        </div>
      </div>
    </div>

    <!-- Warning -->
    <div style="font-size:16px; color:#475569; line-height:1.5; margin-bottom:20px;">
      <p><b>OTP Expired in 10 minutes!</b></p>
    </div>


    <!-- Footer -->
    <div style="font-size:12px; color:#94a3b8; text-align:center; padding-top:20px; border-top:1px solid #e2e8f0; margin-top:25px;">
      <p>&copy; 2026 ProID Studio. All rights reserved.</p>
      <p>If you did not register, please ignore this email or contact support.</p>
    </div>
    
  </div>
</body>
</html>
`;

// Welcome Email Template
export const Welcome_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProID Studio - Welcome</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f5f7; margin:0; padding:20px;">
  <div style="max-width:500px; margin:0 auto; background-color:#ffffff; border-radius:12px; padding:30px; box-shadow:0 5px 15px rgba(0,0,0,0.1); border:1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="text-align:center; padding-bottom:20px; border-bottom:1px solid #e2e8f0; margin-bottom:25px;">
      <h1 style="color:#04675b; font-size:24px; margin:0;">Welcome to ProID Studio</h1>
    </div>

    <!-- Content -->
    <div style="font-size:16px; color:#475569; line-height:1.5; margin-bottom:20px;">
      <p>Hi {{USER_NAME}},</p>
      <p><b>Thank you for joining ProID Studio!</b></p>
      <p>Here are some quick tips to get started:</p>
      <ul style="margin-left:20px; color:#475569;">
        <li>Log in to your account and complete your profile.</li>
        <li>Explore the ID card templates and customize them to your needs.</li>
        <li>Generate and download high-quality ID cards instantly.</li>
      </ul>
      <p>If you have any questions, our support team is always ready to help.</p>
    </div>

    <!-- Footer -->
    <div style="font-size:12px; color:#94a3b8; text-align:center; padding-top:20px; border-top:1px solid #e2e8f0; margin-top:25px;">
      <p>&copy; 2026 ProID Studio. All rights reserved.</p>
      <p>If you have any questions, contact support at support@proidstudio.com</p>
    </div>
    
  </div>
</body>
</html>
`;
