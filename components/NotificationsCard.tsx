import React from 'react';

const NotificationCard = ({notification}) => {
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{notification.title}</h2>
            <p className="text-gray-600 ">{notification.details}</p>
            <p className="text-gray-500 text-sm">Date: {notification.date}</p>
        </div>
    );
};

export default NotificationCard;
