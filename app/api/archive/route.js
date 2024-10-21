import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')


    const archivedItems = [
        { id: '1', type: type, title: 'Archived Item 1', date: '2024-10-25' },
        { id: '2', type: type, title: 'Archived Item 2', date: '2024-10-26' },
    ]
    return NextResponse.json(archivedItems)
}

export async function POST(request: Request) {
    const body = await request.json()

    console.log('Archiving item:', body)
    return NextResponse.json({ message: 'Item archived' }, { status: 201 })
}