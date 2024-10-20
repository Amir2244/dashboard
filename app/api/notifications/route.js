import { NextResponse } from 'next/server'

export async function GET() {

    const notifications = [
        { id: '1', message: 'New task available', date: '2024-10-21' },
        { id: '2', message: 'Task completed', date: '2024-10-22' },
    ]
    return NextResponse.json(notifications)
}

export async function POST(request: Request) {
    const body = await request.json()
    // Create new notification in database
    console.log('Creating new notification:', body)
    return NextResponse.json({ message: 'Notification created' }, { status: 201 })
}