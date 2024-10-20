import Link from 'next/link'

export default function Conversations() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Conversations</h1>
            <ul className="space-y-2">
                <li>
                    <button className="text-blue-500 hover:underline">View Conversation</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Delete Conversation</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Pause Conversation</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Send Group Message</button>
                </li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}