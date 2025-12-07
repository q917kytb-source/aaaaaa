import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Envoyer l'email
    try {
      await resend.emails.send({
        from: 'C&V Digital <onboarding@resend.dev>', // Changez avec votre domaine vérifié
        to: process.env.CONTACT_EMAIL || 'quentinclaes@icloud.com',
        subject: `Nouveau message de contact - ${name}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Date: ${new Date().toLocaleString('fr-FR')}</small></p>
        `,
        replyTo: email,
      })
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError)
      // On continue quand même pour ne pas bloquer l'utilisateur
      // Les données sont loggées dans la console
    }

    // Log pour le développement
    console.log('=== NOUVEAU MESSAGE DE CONTACT ===')
    console.log('Nom:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Date:', new Date().toISOString())
    console.log('===================================')
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    return NextResponse.json(
      { error: 'Une erreur s\'est produite lors de l\'envoi' },
      { status: 500 }
    )
  }
}
