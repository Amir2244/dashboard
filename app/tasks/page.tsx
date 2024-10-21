import React from 'react';
import Link from 'next/link';
import {Plus} from 'lucide-react';

const Tasks = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Tasks</h1>
                <Link
                    href="/tasks/create"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <Plus size={20} className="mr-2"/>
                    Create Task
                </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-500">Unsold Tasks</h2>
                    <Link href="/tasks/unsold" className="text-blue-500 hover:underline">
                        View Unsold Tasks
                    </Link>
                </div>
                <div className="p-6 border-t">
                    <h2 className="text-xl font-semibold mb-4 text-gray-500">Sold Tasks</h2>
                    <Link href="/tasks/sold" className="text-blue-500 hover:underline">
                        View Sold Tasks
                    </Link>
                </div>
                <div className="p-6 border-t">
                    <h2 className="text-xl font-semibold mb-4 text-gray-500"> Terminated Tasks</h2>
                    <Link href="/tasks/terminated" className="text-blue-500 hover:underline">
                        View Terminated Tasks
                    </Link>
                </div>
                <div className="p-6 border-t">
                    <h2 className="text-xl font-semibold mb-4 text-gray-500"> Need Confirmation Tasks</h2>
                    <Link href="/tasks/need-confirmation" className="text-blue-500 hover:underline">
                        View Need Confirmation Tasks
                    </Link>
                </div>
                <div className="p-6 border-t">
                    <h2 className="text-xl font-semibold mb-4 text-gray-500">Urgent Tasks</h2>
                    <Link href="/tasks/urgent" className="text-blue-500 hover:underline">
                        View Urgent Tasks
                    </Link>
                </div>
            </div>
            <div className="mt-6">
                <Link href="/tasks/pricing" className="text-blue-500 hover:underline mr-4">
                    Task Pricing
                </Link>
                <Link href="/tasks/notifications" className="text-blue-500 hover:underline">
                    Task Notifications
                </Link>
            </div>
        </div>
    );
};

export default Tasks;