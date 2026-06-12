export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;

    // 1. Get Resend API Key from Cloudflare environment variables
    const resendApiKey = env.RESEND_API_KEY;
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Resend API Key is not configured on Cloudflare. Please set RESEND_API_KEY in your Pages dashboard.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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

    // 4. Send email via Resend API
    const targetEmail = env.NOTIFICATION_EMAIL || "saraswatiagrofeeds2215@gmail.com";
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Saraswati Agro Portal <onboarding@resend.dev>",
        to: targetEmail,
        subject: subject,
        html: htmlEmail,
      }),
    });

    const resendResult: any = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: resendResult.message || "Failed to send email via Resend",
        }),
        { status: resendResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, id: resendResult.id }), {
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
