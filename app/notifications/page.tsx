'use client';
import React, {useState} from 'react';
import NotificationCard from '@/components/NotificationsCard';
import NotificationModal from '@/components/NotificationsModal';

const NotificationsManagement = () => {
    const [notifications, setNotifications] = useState([
        {id: 1, title: 'Welcome Notification', details: 'Welcome to our platform!', date: '2024-01-01'},
        {id: 2, title: 'System Update', details: 'System will be updated on 2024-03-15.', date: '2024-03-01'},

    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddNotification = (newNotification) => {
        setNotifications((prevNotifications) => [
            ...prevNotifications,
            {...newNotification, id: prevNotifications.length + 1}
        ]);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Notifications Management</h1>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Create New Notification
                </button>
            </div>

            <div className="space-y-6">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <NotificationCard key={notification.id} notification={notification}/>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No notifications found.</p>
                )}
            </div>
            <NotificationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddNotification={handleAddNotification}
            />
        </div>
    );
};

export default NotificationsManagement;