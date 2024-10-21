'use client';
import React, {useState} from 'react';
import {Plus} from 'lucide-react';

const UnsoldTasksPage = () => {
    const [unsolvedTasks, setUnsoldTasks] = useState([
        {id: 1, title: 'Buy supplies', status: 'unsold', category: 'Purchases', price: 100},
        {id: 2, title: 'Delete old files', status: 'unsold', category: 'Purchases', price: 50},
        {id: 3, title: 'Update pricing', status: 'unsold', category: 'Purchases', price: 75},
    ]);

    const handlePurchase = (id) => {

    };

    const handleDelete = (id) => {

    };

    const handleTalkToPublisher = (id) => {

    };

    const handleAddTask = () => {

    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Unsold Tasks</h1>
                <a
                    href="/tasks/create"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <Plus size={20} className="mr-2"/>
                    Create Task
                </a>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <ul>
                        {unsolvedTasks.map((task) => (
                            <li key={task.id} className="border-b py-2">
                                <h3 className="font-medium text-gray-400">{task.title}</h3>
                                <p className="text-gray-500">Status: {task.status}</p>
                                <p className="text-gray-500">Category: {task.category}</p>
                                <p className="text-gray-500">Price: {task.price}</p>
                                <div className="mt-2">

                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mr-2 "
                                        onClick={() => handlePurchase(task.id)}
                                    >
                                        Purchase
                                    </button>


                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        className="bg-yellow-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-gray-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                                        onClick={() => handleTalkToPublisher(task.id)}
                                    >
                                        Talk to Publisher
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

export default UnsoldTasksPage;