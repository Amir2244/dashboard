import Link from 'next/link'

export default function JobApplications() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Job Applications</h1>
            <ul className="space-y-2">
                <li>
                    <button className="text-blue-500 hover:underline">View Application</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Delete Application</button>
                </li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}