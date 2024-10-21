import {NextResponse} from 'next/server'

export async function GET() {

    const emails = [
        {id: '1', subject: 'New Task Opportunity', sender: 'tasks@example.com', date: '2024-10-27'},
        {id: '2', subject: 'Task Completion Confirmation', sender: 'support@example.com', date: '2024-10-28'},
    ]
    return NextResponse.json(emails)
}

export async function POST(request: Request) {
    const body = await request.json()

    console.log('Processing new email:', body)
    return NextResponse.json({message: 'Email processed'}, {status: 201})
}