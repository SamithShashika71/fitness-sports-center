import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (message.length < 20) {
      return NextResponse.json(
        { error: 'Message must be at least 20 characters.' },
        { status: 400 }
      )
    }

    // Log submission (replace with real email service later)
    console.log('New contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // -----------------------------------------------
    // TO ADD REAL EMAIL — use one of these:
    //
    // Option 1: Resend (recommended)
    // npm install resend
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New inquiry: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`
    // })
    //
    // Option 2: Formspree (no code needed)
    // Change form action to https://formspree.io/f/YOUR_ID
    // -----------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will contact you within 24 hours.',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}