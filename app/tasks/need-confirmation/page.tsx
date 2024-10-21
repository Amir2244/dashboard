'use client';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const ConfirmationTasksPage = () => {
    const [confirmationTasks, setConfirmationTasks] = useState([
        { id: 1, title: 'Review project files', status: 'pending confirmation', category: 'Work', price: 150 },
        { id: 2, title: 'Approve design changes', status: 'pending confirmation', category: 'Design', price: 200 },
        { id: 3, title: 'Verify documentation', status: 'pending confirmation', category: 'Documentation', price: 50 },
    ]);

    const handleConfirmFinish = (id) => {

    };

    const handleRejectFinishRequest = (id) => {

    };

    const handleJoinChat = (id) => {

    };

    const handleEdit = (id) => {

    };

    const handleDelete = (id) => {

    };

    const handleAddTask = () => {
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Need for Confirmation Tasks</h1>
                <a
                    href="/tasks/create"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <Plus size={20} className="mr-2" />
                    Create Task
                </a>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <ul>
                        {confirmationTasks.map((task) => (
                            <li key={task.id} className="border-b py-2">
                                <h3 className="font-medium text-gray-400">{task.title}</h3>
                                <p className="text-gray-500">Status: {task.status}</p>
                                <p className="text-gray-500">Category: {task.category}</p>
                                <p className="text-gray-500">Price: {task.price}</p>
                                <div className="mt-2">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleConfirmFinish(task.id)}
                                    >
                                        Confirm Finish
                                    </button>

                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleRejectFinishRequest(task.id)}
                                    >
                                        Reject Finish Request
                                    </button>

                                    <button
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleJoinChat(task.id)}
                                    >
                                        Join Chat
                                    </button>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleEdit(task.id)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationTasksPage;
