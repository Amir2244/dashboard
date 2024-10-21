import { NextResponse } from 'next/server'

export async function GET() {
    const individualTasks = [
        { id: '1', title: 'Custom Task 1', requester: 'user1', status: 'pending', date: '2024-10-31' },
        { id: '2', title: 'Custom Task 2', requester: 'user2', status: 'in progress', date: '2024-11-01' },
    ]
    return NextResponse.json(individualTasks)
}

export async function POST(request: Request) {
    const body = await request.json()
    console.log('Creating new individual task:', body)
    return NextResponse.json({ message: 'Individual task created' }, { status: 201 })
}