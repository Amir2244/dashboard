import { NextResponse } from 'next/server'

export async function GET() {
    // Fetch job applications from database
    const applications = [
        { id: '1', applicant: 'John Doe', position: 'Task Manager', date: '2024-10-29' },
        { id: '2', applicant: 'Jane Smith', position: 'Customer Support', date: '2024-10-30' },
    ]
    return NextResponse.json(applications)
}

export async function POST(request: Request) {
    const body = await request.json()
    // Process a new job application
    console.log('Processing new job application:', body)
    return NextResponse.json({ message: 'Job application received' }, { status: 201 })
}
