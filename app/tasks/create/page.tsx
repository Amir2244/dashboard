'use client';
import React, {useState} from 'react';

const CreateTaskForm = () => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('pending');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!title) validationErrors.title = 'Title is required';
        if (!category) validationErrors.category = 'Category is required';
        if (!price || isNaN(price)) validationErrors.price = 'Valid price is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {

            console.log({title, status, category, price});
            setTitle('');
            setStatus('pending');
            setCategory('');
            setPrice('');
            setErrors({});
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create New Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                        Task Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-400 ${
                            errors.title ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-400 ${
                            errors.category ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-400 ${
                            errors.price ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        id="status"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTaskForm;
