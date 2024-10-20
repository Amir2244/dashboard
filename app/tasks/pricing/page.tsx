import Link from 'next/link'

export default function TaskPricing() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Task Pricing</h1>
            <ul className="space-y-2">
                <li>Task Type: Price at Sale</li>
                <li>Task Type: Price at Purchase</li>
            </ul>
            <Link href="/tasks" className="text-blue-500 hover:underline">Back to Tasks</Link>
        </div>
    )
}