// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, budget, timeline } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // Configurar el transportador de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verificar la conexión
    await transporter.verify();

    // Configurar el contenido del email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Tu email donde recibirás los mensajes
      replyTo: email, // Para que puedas responder directamente
      subject: `🚀 Nuevo proyecto: ${subject || 'Consulta general'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #22c55e; margin-bottom: 20px; text-align: center;">
              📧 Nuevo mensaje desde tu portfolio
            </h2>
            
            <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #333;">Información del cliente:</h3>
              <p style="margin: 5px 0;"><strong>👤 Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 5px 0;"><strong>🎯 Tipo de proyecto:</strong> ${subject || 'No especificado'}</p>
              ${budget ? `<p style="margin: 5px 0;"><strong>💰 Presupuesto:</strong> ${budget}</p>` : ''}
              ${timeline ? `<p style="margin: 5px 0;"><strong>⏰ Timeline:</strong> ${timeline}</p>` : ''}
            </div>

            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e;">
              <h3 style="margin-top: 0; color: #333;">💬 Mensaje:</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #888; font-size: 14px;">
                Mensaje enviado desde tu portfolio web<br>
                <strong>Fecha:</strong> ${new Date().toLocaleString('es-PE', { 
                  timeZone: 'America/Lima',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        message: 'Email enviado correctamente',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error detallado al enviar email:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// Opcional: Manejar métodos no permitidos
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  );
}