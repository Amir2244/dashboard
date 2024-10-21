import { NextResponse } from 'next/server'

export async function GET() {
    const ads = [
        { id: '1', title: 'Special Offer', duration: 7 },
        { id: '2', title: 'New Feature', duration: 14 },
    ]
    return NextResponse.json(ads)
}

export async function POST(request: Request) {
    const body = await request.json()
    console.log('Creating new ad:', body)
    return NextResponse.json({ message: 'Ad created' }, { status: 201 })
}
