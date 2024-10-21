'use client';
import React, {useState} from 'react';

const IndividualTasksManagement = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Task 1', status: 'Individual'},
        {id: 2, title: 'Task 2', status: 'Individual'},
    ]);

    const handleArchiveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleConvertTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, status: 'Normal'} : task
        ));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Individual Tasks</h1>

            <div className="space-y-4">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-700">{task.title}</h2>
                        <p className="text-gray-700">Status: {task.status}</p>

                        <div className="flex justify-start mt-4 space-x-3">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                                View
                            </button>
                            <button
                                onClick={() => handleConvertTask(task.id)}
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                            >
                                Convert to Normal Task
                            </button>
                            <button
                                onClick={() => handleArchiveTask(task.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                            >
                                Archive
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndividualTasksManagement;
