// src/app/api/mail/contact/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();
  const { nom, prenom,phone, email, message } = data;

  // Création du transporteur avec Ethereal
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.ETHEREAL_USER,
      pass: process.env.ETHEREAL_PASS,           
    },
  });

  const mailBody = `
                    📩 Nouveau message reçu depuis le site internet

                    👤 Informations du contact :
                    - Nom : ${nom}
                    - Prénom : ${prenom}
                    - Téléphone : ${phone}
                    - Email : ${email}

                    📝 Message :
                    ${message}

                    ---
                    Ce message a été envoyé automatiquement depuis le formulaire de contact du site.
                    `;
  
  try {
    const info = await transporter.sendMail({
      from: `"${prenom} ${nom}" <${email}>`,
      to: process.env.ETHEREAL_EMAIL,
      subject: 'Nouveau message via le formulaire de contact',
      text: mailBody,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Erreur envoi mail :', error);
    return NextResponse.json({ success: false, error: 'Erreur envoi email' }, { status: 500 });
  }
}
