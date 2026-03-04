import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const LOGO_URL = 'https://codegito.lat/codegitologo.jpg';

const emailTexts = {
  en: {
    subject: 'Thanks for reaching out! — CodeGito',
    greeting: (name: string) => `Hey ${name}!`,
    subtitle: 'Thanks for reaching out through my portfolio.',
    body: "I've received your message and will get back to you as soon as possible.",
    yourMessage: 'Your message:',
    phone: 'Phone:',
    meanwhile: 'In the meantime, feel free to check out my work at',
  },
  es: {
    subject: '¡Gracias por escribirme! — CodeGito',
    greeting: (name: string) => `¡Hola ${name}!`,
    subtitle: 'Gracias por contactarme a través de mi portafolio.',
    body: 'He recibido tu mensaje y te responderé lo antes posible.',
    yourMessage: 'Tu mensaje:',
    phone: 'Teléfono:',
    meanwhile: 'Mientras tanto, puedes ver mi trabajo en',
  },
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, lang, phone } = body;
    const locale = lang === 'es' ? 'es' : 'en';

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'Name is required (min 2 chars)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(JSON.stringify({ error: 'Message is required (min 10 chars)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedPhone = typeof phone === 'string' && phone.trim().length > 0 ? phone.trim() : null;

    // Send notification email to me (always English)
    const { error: notifyError } = await resend.emails.send({
      from: 'CodeGito Portfolio <contact@codegito.lat>',
      to: 'luiggipdeveloper@gmail.com',
      subject: `New Contact from ${trimmedName} — codegito.lat`,
      replyTo: trimmedEmail,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; background: #0f0f13; color: #e6edfa; padding: 32px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="${LOGO_URL}" alt="CodeGito" width="48" height="48" style="border-radius: 8px;" />
          </div>
          <h2 style="color: #ff8533; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8b8fa3; width: 80px;">Name:</td>
              <td style="padding: 8px 0; color: #e6edfa;">${trimmedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b8fa3;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${trimmedEmail}" style="color: #3399ff;">${trimmedEmail}</a></td>
            </tr>
            ${trimmedPhone ? `<tr>
              <td style="padding: 8px 0; color: #8b8fa3;">Phone:</td>
              <td style="padding: 8px 0; color: #e6edfa;">${trimmedPhone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #8b8fa3;">Lang:</td>
              <td style="padding: 8px 0; color: #e6edfa;">${locale.toUpperCase()}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #1e1e22; border-radius: 8px; border-left: 3px solid #ff6b00;">
            <p style="color: #8b8fa3; margin: 0 0 8px;">Message:</p>
            <p style="color: #e6edfa; margin: 0; white-space: pre-wrap;">${trimmedMessage}</p>
          </div>
          <p style="margin-top: 24px; color: #6e7681; font-size: 12px;">Sent from codegito.lat portfolio contact form</p>
        </div>
      `,
    });

    if (notifyError) {
      console.error('Resend notify error:', notifyError);
      return new Response(JSON.stringify({ error: 'Failed to send message. Try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send bilingual confirmation email to the user
    const t = emailTexts[locale];

    await resend.emails.send({
      from: 'Luiggi Paredes <contact@codegito.lat>',
      to: trimmedEmail,
      subject: t.subject,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f13; color: #e6edfa; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0066ff22, #ff6b0022); padding: 32px 32px 24px; text-align: center;">
            <img src="${LOGO_URL}" alt="CodeGito" width="60" height="60" style="border-radius: 12px; margin-bottom: 16px;" />
            <h1 style="margin: 0 0 4px; color: #e6edfa; font-size: 22px;">${t.greeting(trimmedName)}</h1>
            <p style="margin: 0; color: #8b8fa3; font-size: 14px;">${t.subtitle}</p>
          </div>
          <div style="padding: 24px 32px 32px;">
            <p style="color: #c0c4d0; font-size: 14px; line-height: 1.6; margin: 0 0 16px;">
              ${t.body}
            </p>
            <div style="padding: 16px; background: #1e1e22; border-radius: 8px; border-left: 3px solid #3399ff; margin-bottom: 20px;">
              <p style="color: #8b8fa3; margin: 0 0 6px; font-size: 12px; font-family: monospace;">${t.yourMessage}</p>
              <p style="color: #e6edfa; margin: 0; font-size: 13px; white-space: pre-wrap;">${trimmedMessage}</p>
              ${trimmedPhone ? `<p style="margin: 8px 0 0; color: #8b8fa3; font-size: 12px; font-family: monospace;">${t.phone} <span style="color: #7ee787;">${trimmedPhone}</span></p>` : ''}
            </div>
            <p style="color: #c0c4d0; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
              ${t.meanwhile}
              <a href="https://codegito.lat" style="color: #3399ff; text-decoration: none;">codegito.lat</a>
            </p>
            <div style="border-top: 1px solid #2d2d33; padding-top: 20px;">
              <p style="margin: 0 0 4px; color: #e6edfa; font-size: 14px; font-weight: 600;">Luiggi Paredes</p>
              <p style="margin: 0; color: #ff8533; font-size: 12px; font-family: monospace;">&lt;Backend.Architect /&gt;</p>
              <p style="margin: 8px 0 0; color: #8b8fa3; font-size: 12px;">
                <a href="https://linkedin.com/in/luiggipdeveloper" style="color: #3399ff; text-decoration: none;">LinkedIn</a>
                &nbsp;·&nbsp;
                <a href="https://github.com/DevLuiggi" style="color: #3399ff; text-decoration: none;">GitHub</a>
                &nbsp;·&nbsp;
                <a href="https://codegito.lat" style="color: #3399ff; text-decoration: none;">Portfolio</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: 'Message received!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
