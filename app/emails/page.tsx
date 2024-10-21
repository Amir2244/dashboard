'use client';
import React, {useState} from 'react';

const ReceivedEmailsManagement = () => {
    const [emails, setEmails] = useState([
        {id: 1, subject: 'New Offer', sender: 'company@domain.com'},
        {id: 2, subject: 'Follow-up', sender: 'support@domain.com'},
    ]);

    const handleDeleteEmail = (id) => {
        setEmails(emails.filter(email => email.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Received Emails</h1>

            <div className="space-y-4">
                {emails.map((email) => (
                    <div key={email.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-700">{email.subject}</h2>
                        <p className="text-gray-700">Sender: {email.sender}</p>

                        <div className="flex justify-start mt-4 space-x-3">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                                View
                            </button>
                            <button
                                onClick={() => handleDeleteEmail(email.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReceivedEmailsManagement;
