'use client';
import React, {useState} from 'react';
import Link from "next/link";
import NotificationModal from "@/components/NotificationModal";


const UsersTab = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Users</h1>

            <div className="flex justify-between mb-4">
                <Link href="/users/management"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Access Users Management
                </Link>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    onClick={() => setShowNotifications(true)} // Show notifications modal
                >
                    New Account Notifications
                </button>
            </div>

            {showNotifications && (
                <NotificationModal onClose={() => setShowNotifications(false)}/>
            )}
        </div>
    );
};

export default UsersTab;