export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;

    // 1. Get Resend API Key from Cloudflare environment variables
    // Fallback to a development key if set, or check if it exists
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
    const { name, businessName, mobile, email, district, state, message } = data;

    // 3. Build a beautiful responsive HTML email template
    const htmlEmail = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Dealer Inquiry</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #f3f4f6;
            margin: 0;
            padding: 20px;
            color: #1f2937;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
          }
          .header {
            background: linear-gradient(135deg, #047857 0%, #065f46 100%);
            padding: 32px 24px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          .header p {
            color: #a7f3d0;
            margin: 8px 0 0 0;
            font-size: 14px;
            font-weight: 500;
          }
          .content {
            padding: 32px 24px;
          }
          .section-title {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9ca3af;
            margin-bottom: 16px;
            border-bottom: 2px solid #f3f4f6;
            padding-bottom: 8px;
          }
          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 28px;
          }
          .info-table td {
            padding: 12px 0;
            border-bottom: 1px solid #f3f4f6;
            vertical-align: top;
          }
          .info-table td.label {
            width: 35%;
            font-size: 13px;
            font-weight: 600;
            color: #6b7280;
            padding-right: 12px;
          }
          .info-table td.value {
            font-size: 14px;
            font-weight: 700;
            color: #111827;
          }
          .message-box {
            background-color: #f9fafb;
            border-left: 4px solid #10b981;
            padding: 16px;
            border-radius: 0 8px 8px 0;
            font-size: 14px;
            line-height: 1.6;
            color: #4b5563;
            font-style: italic;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 24px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #9ca3af;
          }
          .footer a {
            color: #10b981;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Saraswati Agro Feeds</h1>
            <p>New Dealer Inquiry Submitted / नवीन वितरक चौकशी</p>
          </div>
          <div class="content">
            <div class="section-title">Inquiry Details / चौकशी माहिती</div>
            <table class="info-table">
              <tr>
                <td class="label">Full Name<br><span style="font-weight:normal; font-size:11px;">संपूर्ण नाव</span></td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Business Name<br><span style="font-weight:normal; font-size:11px;">व्यवसायाचे नाव</span></td>
                <td class="value">${businessName}</td>
              </tr>
              <tr>
                <td class="label">Mobile Number<br><span style="font-weight:normal; font-size:11px;">मोबाईल क्रमांक</span></td>
                <td class="value">${mobile}</td>
              </tr>
              <tr>
                <td class="label">Email Address<br><span style="font-weight:normal; font-size:11px;">ईमेल पत्ता</span></td>
                <td class="value">${email || "Not Provided"}</td>
              </tr>
              <tr>
                <td class="label">District<br><span style="font-weight:normal; font-size:11px;">जिल्हा</span></td>
                <td class="value">${district}</td>
              </tr>
              <tr>
                <td class="label">State<br><span style="font-weight:normal; font-size:11px;">राज्य</span></td>
                <td class="value">${state}</td>
              </tr>
            </table>

            <div class="section-title">Additional Message / अतिरिक्त संदेश</div>
            <div class="message-box">
              ${message ? message.replace(/\n/g, "<br>") : "No message provided / कोणताही संदेश नाही."}
            </div>
          </div>
          <div class="footer">
            This inquiry was sent from the official portal at 
            <a href="https://saraswatiagro.pages.dev" target="_blank">saraswatiagro.pages.dev</a>.
          </div>
        </div>
      </body>
    </html>
    `;

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
        subject: `🌱 New Dealer Inquiry: ${businessName} (${district})`,
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
