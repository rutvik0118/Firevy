import nodemailer from 'nodemailer';
import config from '../config/env.js';

let transporter = null;

const getTransporter = async () => {
  if (transporter) return transporter;

  if (config.smtp.user && config.smtp.pass && config.smtp.user !== 'your_smtp_user') {
    transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.port === 465,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass
      }
    });
  } else {
    // Ethereal test mail fallback
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      console.log(`[Mailer] Created Ethereal test account: ${testAccount.user}`);
    } catch (err) {
      console.warn(`[Mailer Warning] Could not create Ethereal test mail account: ${err.message}`);
      transporter = null;
    }
  }

  return transporter;
};

export const sendContactNotification = async (inquiryData) => {
  try {
    const mailer = await getTransporter();
    if (!mailer) {
      console.log('[Mailer Fallback Log] Contact Inquiry received:', inquiryData);
      return { success: true, mocked: true };
    }

    const mailOptions = {
      from: `"${config.smtp.fromName}" <${config.smtp.fromEmail}>`,
      to: config.smtp.fromEmail,
      subject: `[New Lead] Inquiry from ${inquiryData.name} - ${inquiryData.company || 'Direct'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${inquiryData.name}</p>
          <p><strong>Email:</strong> ${inquiryData.email}</p>
          <p><strong>Phone:</strong> ${inquiryData.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${inquiryData.company || 'N/A'}</p>
          <p><strong>Service Requested:</strong> ${inquiryData.service || 'General Inquiry'}</p>
          <p><strong>Estimated Budget:</strong> ${inquiryData.budget || 'Not specified'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f8fafc; padding: 12px; border-radius: 6px; font-style: italic;">${inquiryData.message}</p>
        </div>
      `
    };

    const info = await mailer.sendMail(mailOptions);
    console.log('[Mailer Success] Message sent:', info.messageId);
    if (nodemailer.getTestMessageUrl(info)) {
      console.log('[Mailer Ethereal Preview URL]:', nodemailer.getTestMessageUrl(info));
    }
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Mailer Error] Failed to send email:', error.message);
    return { success: false, error: error.message };
  }
};
