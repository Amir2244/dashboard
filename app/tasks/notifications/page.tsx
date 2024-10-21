'use client';
import Link from 'next/link';
import {useState} from 'react';

export default function TaskNotifications() {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'Design new homepage', status: 'Pending Approval'},
        {id: 2, title: 'Fix login issue', status: 'Pending Approval'},
        {id: 3, title: 'Launch marketing campaign', status: 'Pending Approval'},

    ]);


    const handleApprove = (id) => {
        console.log(`Approved task with ID: ${id}`);

    };

    const handleMessage = (id) => {
        console.log(`Message task with ID: ${id}`);

    };

    const handleReject = (id) => {
        console.log(`Rejected task with ID: ${id}`);

    };

    const handleEditAndPublish = (id) => {
        console.log(`Edit and Publish task with ID: ${id}`);

    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Task Notifications</h1>


            <div className="space-y-6">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-700">{task.title}</h2>
                        <p className="text-gray-500 mb-4">Status: {task.status}</p>


                        <div className="flex flex-wrap space-x-4">
                            <button
                                onClick={() => handleApprove(task.id)}
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => handleMessage(task.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Message
                            </button>
                            <button
                                onClick={() => handleReject(task.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleEditAndPublish(task.id)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Edit and Publish
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-8">
                <Link href="/tasks"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-bold transition-colors duration-200">
                    Back to Tasks
                </Link>
            </div>
        </div>
    );
}
