import React from 'react';
import {
    handleDeleteAccount,
    handleSuspend,
    handleResetPassword,
    handleMessage,
    handleGrantFreePurchase,
    handleUserInvoices
} from './UserActions';

const UserCard = ({user}) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">{user.name}</h2>
            <p className="text-gray-500 mb-4">{user.email}</p>

            <div className="flex flex-wrap space-x-4">
                <button onClick={() => handleDeleteAccount(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Delete Account
                </button>
                <button onClick={() => handleSuspend(user.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Temporarily Suspend
                </button>
                <button onClick={() => handleResetPassword(user.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Reset Password
                </button>
                <button onClick={() => handleMessage(user.id)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Message
                </button>
                <button onClick={() => handleGrantFreePurchase(user.id)}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Grant Free Purchase
                </button>
                <button onClick={() => handleUserInvoices(user.id)}
                        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    User Invoices
                </button>
            </div>
        </div>
    );
};

export default UserCard;