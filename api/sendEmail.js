import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Configurar o transportador de e-mail
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    try {
      // Configurar os detalhes do e-mail
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Contato do Formulário',
        html: `
          <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phoneNumber}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        `,
      });

      // Enviar uma resposta de sucesso
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}
