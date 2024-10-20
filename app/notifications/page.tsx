import Link from 'next/link'

export default function Notifications() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Notifications</h1>
            <ul className="space-y-2">
                <li>
                    <button className="text-blue-500 hover:underline">View Notification Details</button>
                </li>
                <li><Link href="/notifications/create" className="text-blue-500 hover:underline">Create Custom
                    Notification</Link></li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}