import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Determine email provider and create appropriate transporter
    const emailProvider = process.env.EMAIL_PROVIDER || "GMAIL";
    const senderEmail = process.env.EMAIL_USER;

    let transporter;
    
    if (emailProvider.toUpperCase() === "GMAIL") {
      // Gmail configuration
      transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else if (emailProvider.toUpperCase() === "ZOHO") {
      // Zoho configuration
      transporter = nodemailer.createTransport({
        host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
        port: Number(process.env.ZOHO_SMTP_PORT) || 465,
        secure: true, // Use TLS
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Invalid email provider configuration" },
        { status: 500 },
      );
    }

    // Fallback variables
    const companyName = process.env.COMPANY_NAME || "Chillcloud India LLP";
    const adminEmail = process.env.ADMIN_EMAIL || senderEmail;

    console.log("Using Email Provider:", emailProvider);
    console.log("Sender Email:", senderEmail);
    console.log("Admin Email:", adminEmail);

    // Email to admin (yourself)
    const adminMailOptions = {
      from: `"${companyName}" <${senderEmail}>`,
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%); color: #000; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #D4AF37; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #D4AF37; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🔔 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <p>You have received a new inquiry through your website contact form:</p>
                
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message.replaceAll("\n", "<br>")}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from your website contact form.<br>
                  Please respond to the customer within 12-24 hours.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: `"${companyName}" <${senderEmail}>`,
      to: email,
      subject: "Thank You for Contacting Chillcloud",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%); color: #000; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D4AF37; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #D4AF37; color: #666; }
              .contact-info { background: white; padding: 15px; border-radius: 8px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 32px;">✨ Thank You!</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                
                <p>Thank you for reaching out to <strong>Chillcloud</strong>. We have successfully received your inquiry and our team will get back to you within <strong>12-24 hours</strong>.</p>
                
                <div class="highlight">
                  <h3 style="margin-top: 0; color: #D4AF37;">📝 Your Submitted Information:</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Message:</strong><br>${message.replaceAll("\n", "<br>")}</p>
                </div>
                
                <p>In the meantime, if you have any urgent questions, feel free to reach out to us directly:</p>
                
                <div class="contact-info">
                  <p style="margin: 5px 0;"><strong>📞 Phone:</strong> +91 80923-23805</p>
                  <p style="margin: 5px 0;"><strong>📧 Email:</strong> info@chillcloud.in</p>
                  <p style="margin: 5px 0;"><strong>📍 Address:</strong> G-106, Sector-63, Noida, UP - 201301</p>
                </div>
                
                <div class="footer">
                  <p style="font-size: 18px; margin-bottom: 10px;"><strong>Chillcloud India LLP</strong></p>
                  <p style="font-size: 14px; color: #999;">Premium Rolling Papers & Accessories</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json(
      {
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again later or contact us directly.",
      },
      { status: 500 },
    );
  }
}
