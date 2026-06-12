export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;

    // 1. Get Brevo API Key from Cloudflare environment variables
    const brevoApiKey = env.BREVO_API_KEY;
    if (!brevoApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Brevo API Key is not configured on Cloudflare. Please set BREVO_API_KEY in your Pages dashboard.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const senderEmail = env.SENDER_EMAIL || "10ninjagod@gmail.com";

    // 2. Parse request JSON data
    const data = await request.json();
    const formType = data.formType || "dealer"; // default for backward compatibility
    
    let subject = "";
    let htmlEmail = "";

    if (formType === "customized_feed") {
      const { name, phone, animalType, animalCount, milkPerDay, currentFeed, requirement } = data;
      subject = `🐄 New Customized Feed Inquiry: ${name}`;
      htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f3f4f6; padding: 20px; color: #1f2937; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #047857 0%, #065f46 100%); padding: 32px 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .header p { color: #a7f3d0; margin: 8px 0 0 0; font-size: 14px; }
            .content { padding: 32px 24px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }
            .info-table td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
            .info-table td.label { width: 45%; font-weight: 600; color: #6b7280; font-size: 13px; }
            .info-table td.value { font-weight: 700; color: #111827; font-size: 14px; }
            .message-box { background-color: #f9fafb; border-left: 4px solid #10b981; padding: 16px; border-radius: 0 8px 8px 0; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Saraswati Agro Feeds</h1>
              <p>New Customized Feed Inquiry / नवीन कस्टमाईज्ड फीड चौकशी</p>
            </div>
            <div class="content">
              <table class="info-table">
                <tr><td class="label">Full Name</td><td class="value">${name || "-"}</td></tr>
                <tr><td class="label">Mobile Number</td><td class="value">${phone || "-"}</td></tr>
                <tr><td class="label">Animal Type</td><td class="value">${animalType || "-"}</td></tr>
                <tr><td class="label">Number of Animals</td><td class="value">${animalCount || "-"}</td></tr>
                <tr><td class="label">Milk Production (Liters/Day)</td><td class="value">${milkPerDay || "-"}</td></tr>
                <tr><td class="label">Current Feed</td><td class="value">${currentFeed || "-"}</td></tr>
              </table>
              <div class="message-box">${requirement ? requirement.replace(/\n/g, "<br>") : "No specific requirements provided."}</div>
            </div>
          </div>
        </body>
      </html>
      `;
    } else {
      // Default Dealer Form
      const { name, businessName, mobile, email, district, state, message } = data;
      subject = `🌱 New Dealer Inquiry: ${businessName || name} (${district || "Unknown"})`;
      htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f3f4f6; padding: 20px; color: #1f2937; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #047857 0%, #065f46 100%); padding: 32px 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .header p { color: #a7f3d0; margin: 8px 0 0 0; font-size: 14px; }
            .content { padding: 32px 24px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }
            .info-table td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
            .info-table td.label { width: 35%; font-weight: 600; color: #6b7280; font-size: 13px; }
            .info-table td.value { font-weight: 700; color: #111827; font-size: 14px; }
            .message-box { background-color: #f9fafb; border-left: 4px solid #10b981; padding: 16px; border-radius: 0 8px 8px 0; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Saraswati Agro Feeds</h1>
              <p>New Dealer Inquiry Submitted / नवीन वितरक चौकशी</p>
            </div>
            <div class="content">
              <table class="info-table">
                <tr><td class="label">Full Name</td><td class="value">${name || "-"}</td></tr>
                <tr><td class="label">Business Name</td><td class="value">${businessName || "-"}</td></tr>
                <tr><td class="label">Mobile Number</td><td class="value">${mobile || "-"}</td></tr>
                <tr><td class="label">Email Address</td><td class="value">${email || "Not Provided"}</td></tr>
                <tr><td class="label">District</td><td class="value">${district || "-"}</td></tr>
                <tr><td class="label">State</td><td class="value">${state || "-"}</td></tr>
              </table>
              <div class="message-box">${message ? message.replace(/\n/g, "<br>") : "No message provided."}</div>
            </div>
          </div>
        </body>
      </html>
      `;
    }

    // 4. Send email via Brevo API
    const targetEmail = env.NOTIFICATION_EMAIL || "mvshewale2003@gmail.com";
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Saraswati Agro Portal", email: senderEmail },
        to: [{ email: targetEmail }],
        subject: subject,
        htmlContent: htmlEmail,
        textContent: `New Inquiry Received: ${subject}. Please view the HTML version for full details.`,
      }),
    });

    const brevoResult: any = await brevoResponse.json().catch(() => ({}));

    if (!brevoResponse.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: brevoResult.message || "Failed to send email via Brevo",
        }),
        { status: brevoResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    // 5. Send Auto-Responder to Customer (if email provided)
    if (data.email) {
      const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f3f4f6; padding: 20px; color: #1f2937; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #047857 0%, #065f46 100%); padding: 32px 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .content { padding: 32px 24px; text-align: center; }
            .content p { font-size: 16px; line-height: 1.6; color: #4b5563; }
            .content h2 { color: #047857; margin-bottom: 8px; }
            .footer { background-color: #f9fafb; padding: 20px 24px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Saraswati Agro Feeds</h1>
            </div>
            <div class="content">
              <h2>Thank You for Your Inquiry!</h2>
              <p>Hello ${data.name || "there"},</p>
              <p>We have successfully received your inquiry. Our team is reviewing your details and will get back to you shortly to assist you further.</p>
              <p>नमस्कार, तुमची चौकशी आम्हाला प्राप्त झाली आहे. आमची टीम लवकरच तुमच्याशी संपर्क साधेल.</p>
              <br/>
              <p><strong>Warm Regards,</strong><br/>The Saraswati Agro Feeds Team</p>
            </div>
            <div class="footer">
              This is an automated message. Please do not reply to this email.
            </div>
          </div>
        </body>
      </html>
      `;

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Saraswati Agro", email: senderEmail },
          to: [{ email: data.email }],
          subject: "Thank You for Contacting Saraswati Agro Feeds!",
          htmlContent: customerEmailHtml,
          textContent: `Hello ${data.name || "there"},\n\nThank you for your inquiry. We have successfully received it and our team will contact you shortly to assist you further.\n\nनमस्कार, तुमची चौकशी आम्हाला प्राप्त झाली आहे. आमची टीम लवकरच तुमच्याशी संपर्क साधेल.\n\nWarm Regards,\nThe Saraswati Agro Feeds Team`,
        }),
      }).catch(err => console.error("Auto-responder failed:", err));
    }

    return new Response(JSON.stringify({ success: true, messageId: brevoResult.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error.message || "Server error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
