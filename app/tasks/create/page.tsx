import Link from 'next/link'

export default function CreateTask() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Create New Task</h1>
            {/* Add form for creating a new task */}
            <Link href="/tasks" className="text-blue-500 hover:underline">Back to Tasks</Link>
        </div>
    )
}