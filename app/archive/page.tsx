import Link from 'next/link'

export default function Archive() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Archive</h1>
            <ul className="space-y-2">
                <li><Link href="/archive/invoices" className="text-blue-500 hover:underline">Archived Invoices</Link>
                </li>
                <li><Link href="/archive/tasks" className="text-blue-500 hover:underline">Archived Tasks</Link></li>
                <li><Link href="/archive/conversations" className="text-blue-500 hover:underline">Archived
                    Conversations</Link></li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}