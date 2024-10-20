import Link from 'next/link'

export default function Emails() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Incoming Emails</h1>
            <ul className="space-y-2">
                <li>
                    <button className="text-blue-500 hover:underline">View Email</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Delete Email</button>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4">My Purchased Tasks</h2>
            {/* Add list of purchased tasks */}
            <h2 className="text-2xl font-semibold mt-4">My Offered Tasks</h2>
            {/* Add list of offered tasks */}
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}