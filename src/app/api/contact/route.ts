import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, _gotcha } = body;

    // 1. Spam Honeypot Check: if bot filled hidden gotcha field, silently drop
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    // 2. Field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CLIENT_RECEIVING_EMAIL || "info@southsideresources.com";

    // 3. Provider Option A: Web3Forms (If key is configured)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `[SSIR Inquiry] Advisory Request from ${name}`,
          from_name: "South Side International Resources Contact Portal",
          name,
          email,
          company: company || "Not Specified",
          message,
        }),
      });

      if (!response.ok) {
        console.error("Web3Forms error response:", await response.text());
        return NextResponse.json(
          { success: false, error: "Unable to dispatch message via form provider." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // 4. Provider Option B: Brevo (Sendinblue) API (300 free emails/day directly to recipient)
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      const senderEmail = process.env.BREVO_SENDER_EMAIL || email;
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoKey,
        },
        body: JSON.stringify({
          sender: { name: "SSIR Advisory Inquiries", email: senderEmail },
          to: [{ email: recipientEmail, name: "SSIR Directorate" }],
          replyTo: { email, name },
          subject: `[New Advisory Inquiry] ${name} - ${company || "General"}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0B1F33; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; padding: 24px; border-radius: 4px;">
              <h2 style="color: #0B1F33; border-bottom: 2px solid #005691; padding-bottom: 8px; margin-top: 0;">New Formal Advisory Inquiry</h2>
              <p>A new prospective engagement has been submitted through the official SSIR website portal:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${name}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; font-weight: bold;">Organization:</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${company || "N/A"}</td></tr>
              </table>
              <div style="background-color: #F4F6F9; padding: 16px; border-left: 3px solid #005691; margin-top: 16px;">
                <strong style="display: block; margin-bottom: 8px;">Terms of Reference / Scope:</strong>
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 11px; color: #718096; margin-top: 24px;">South Side International Resources &bull; 24/7 Advisory Communications</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        console.error("Brevo API error:", await response.text());
        return NextResponse.json(
          { success: false, error: "Email delivery service unavailable." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // 5. Provider Option C: Resend API
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const sender = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: sender,
          to: recipientEmail,
          reply_to: email,
          subject: `[New SSIR Inquiry] ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nOrganization: ${company}\n\nScope:\n${message}`,
        }),
      });

      if (!response.ok) {
        console.error("Resend API error:", await response.text());
        return NextResponse.json(
          { success: false, error: "Dispatch provider error." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // 6. Default Fallback (Development & Pre-Configuration)
    console.log("----------------------------------------");
    console.log("SSIR INQUIRY RECEIVED (DEV / PRE-CONFIG):");
    console.log(`From: ${name} <${email}>`);
    console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log(`Intended Recipient: ${recipientEmail}`);
    console.log("Configure BREVO_API_KEY, RESEND_API_KEY, or WEB3FORMS_ACCESS_KEY in .env.local to activate outbound relay.");
    console.log("----------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Inquiry received and queued for review.",
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while transmitting your inquiry." },
      { status: 500 }
    );
  }
}
