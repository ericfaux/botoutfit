import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    // For now, just log it (in production, this would save to database)
    console.log('Waitlist signup:', email)

    // Simulate success response
    return NextResponse.json({
      success: true,
      message: 'Successfully joined waitlist!'
    })

  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}
