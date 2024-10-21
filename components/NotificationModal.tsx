import React from 'react';

const NotificationModal = ({onClose}) => {
    const handleApprove = () => {
        console.log('Approved new account creation');
        onClose();
    };

    const handleReject = () => {
        console.log('Rejected new account creation');
        onClose();
    };

    const handleMessage = () => {
        console.log('Messaging via email');
        onClose();
    };

    const handleCreateAccount = () => {
        console.log('Creating account');
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4 text-gray-400">New Account Notifications</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={handleApprove}>
                            Approve
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={handleReject}>
                            Reject
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={handleMessage}>
                            Message via Email
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={handleCreateAccount}>
                            Create Account
                        </button>
                    </li>
                </ul>
                <button className="mt-4 text-red-500" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;
