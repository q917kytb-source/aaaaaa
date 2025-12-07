import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, projectType, preferredDate, message } = body

    // Validation
    if (!fullName || !email || !phone || !projectType || !preferredDate || !message) {
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
        subject: `Nouvelle demande de rendez-vous - ${fullName}`,
        html: `
          <h2>Nouvelle demande de rendez-vous</h2>
          <p><strong>Nom:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Type de projet:</strong> ${projectType}</p>
          <p><strong>Date préférée:</strong> ${preferredDate}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Date de la demande: ${new Date().toLocaleString('fr-FR')}</small></p>
        `,
        replyTo: email,
      })
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError)
      // On continue quand même pour ne pas bloquer l'utilisateur
      // Les données sont loggées dans la console
    }

    // Log pour le développement
    console.log('=== NOUVELLE DEMANDE DE RENDEZ-VOUS ===')
    console.log('Nom:', fullName)
    console.log('Email:', email)
    console.log('Téléphone:', phone)
    console.log('Type de projet:', projectType)
    console.log('Date préférée:', preferredDate)
    console.log('Message:', message)
    console.log('Date de la demande:', new Date().toISOString())
    console.log('=======================================')
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Demande de rendez-vous envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.'
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
