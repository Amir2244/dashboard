import React, {useState} from 'react';

const NotificationModal = ({isOpen, onClose, onAddNotification}) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNotification = {
            title,
            details,
            date: new Date().toISOString().split('T')[0],
        };
        onAddNotification(newNotification);
        setTitle('');
        setDetails('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Create New Notification</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 te" htmlFor="title">Notification Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="details">Notification Details</label>
                        <textarea
                            id="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                            Send Notification
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NotificationModal;
