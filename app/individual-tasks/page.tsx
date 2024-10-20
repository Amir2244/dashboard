import Link from 'next/link'

export default function IndividualTasks() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Individual Tasks</h1>
            <ul className="space-y-2">
                <li>
                    <button className="text-blue-500 hover:underline">View Task</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Convert to Regular Task</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Delete Task</button>
                </li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}