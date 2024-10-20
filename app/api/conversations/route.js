import { NextResponse } from 'next/server'

export async function GET() {

    const conversations = [
        { id: '1', participants: ['user1', 'user2'], lastMessage: 'Hello there!', date: '2024-10-23' },
        { id: '2', participants: ['user3', 'user4'], lastMessage: 'How are you?', date: '2024-10-24' },
    ]
    return NextResponse.json(conversations)
}
export async function POST(request: Request) {
    const body = await request.json()
    console.log('Creating new conversation:', body)
    return NextResponse.json({ message: 'Conversation created' }, { status: 201 })
}