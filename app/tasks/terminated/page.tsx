'use client';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TerminatedTasksPage = () => {
    const [terminatedTasks, setTerminatedTasks] = useState([
        { id: 1, title: 'Finalize contract', status: 'terminated', category: 'Contracts', price: 250 },
        { id: 2, title: 'Close project', status: 'terminated', category: 'Projects', price: 300 },
        { id: 3, title: 'Submit report', status: 'terminated', category: 'Reports', price: 100 },
    ]);

    const handleJoinChat = (id) => {
    };

    const handleUndoTermination = (id) => {
    };

    const handleDelete = (id) => {

    };

    const handleAddTask = () => {

    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Terminated Tasks</h1>
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
                        {terminatedTasks.map((task) => (
                            <li key={task.id} className="border-b py-2">
                                <h3 className="font-medium text-gray-400">{task.title}</h3>
                                <p className="text-gray-500">Status: {task.status}</p>
                                <p className="text-gray-500">Category: {task.category}</p>
                                <p className="text-gray-500">Price: {task.price}</p>
                                <div className="mt-2">
                                    <button
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleJoinChat(task.id)}
                                    >
                                        Join Chat
                                    </button>

                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleUndoTermination(task.id)}
                                    >
                                        Undo Termination
                                    </button>

                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
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

export default TerminatedTasksPage;
