import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    // Fetch a specific individual task from database
    const task = { id: params.id, title: 'Custom Task', requester: 'user1', status: 'pending', date: '2024-11-02' }
    return NextResponse.json(task)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json()
    // Update a specific individual task
    console.log(`Updating individual task ${params.id}:`, body)
    return NextResponse.json({ message: 'Individual task updated' }, { status: 200 })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    // Delete a specific individual task
    console.log(`Deleting individual task ${params.id}`)
    return NextResponse.json({ message: 'Individual task deleted' }, { status: 200 })
}