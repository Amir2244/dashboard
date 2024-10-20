import Link from 'next/link'

export default function TaskNotifications() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Task Notifications</h1>
            <ul className="space-y-2">
                <li><button className="text-blue-500 hover:underline">Approve</button></li>
                <li><button className="text-blue-500 hover:underline">Message</button></li>
                <li><button className="text-blue-500 hover:underline">Reject</button></li>
                <li><button className="text-blue-500 hover:underline">Edit and Publish</button></li>
                <li><button className="text-blue-500 hover:underline">Purchase</button></li>
            </ul>
            <Link href="/tasks" className="text-blue-500 hover:underline">Back to Tasks</Link>
        </div>
    )
}
