import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function Tasks() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Tasks</h1>
                <Link
                    href="/tasks/create"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <Plus size={20} className="mr-2" />
                    Create Task
                </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Unsold Tasks</h2>
                    {/* Add TaskList component here */}
                </div>
                <div className="p-6 border-t">
                    <h2 className="text-xl font-semibold mb-4">Sold Tasks</h2>
                    {/* Add TaskList component here */}
                </div>
                {/* Add more task sections */}
            </div>
            <div className="mt-6">
                <Link href="/tasks/pricing" className="text-blue-500 hover:underline mr-4">Task Pricing</Link>
                <Link href="/tasks/notifications" className="text-blue-500 hover:underline">Task Notifications</Link>
            </div>
        </div>
    )
}

// Update other page components (users, invoices, etc.) similarly to match this style