'use client';
import React, {useState} from 'react';
import ConversationModal from '@/components/ConversationModal';

const ConversationManagement = () => {
    const [conversations, setConversations] = useState([

        {id: 1, title: 'Support Chat', status: 'Active'},
        {id: 2, title: 'Customer Feedback', status: 'Paused'},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleDeleteConversation = (conversationId) => {
        setConversations(conversations.filter(conv => conv.id !== conversationId));
    };

    const handlePauseConversation = (conversationId) => {
        setConversations(conversations.map(conv =>
            conv.id === conversationId ? {...conv, status: 'Paused'} : conv
        ));
    };

    const handleSendGroupMessage = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Manage Conversations</h1>

            <div className="space-y-4">
                {conversations.map((conversation) => (
                    <div key={conversation.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-700">{conversation.title}</h2>
                        <p className="text-gray-700">Status: {conversation.status}</p>

                        <div className="flex justify-start mt-4 space-x-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                            >
                                View
                            </button>
                            <button
                                onClick={() => handleDeleteConversation(conversation.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handlePauseConversation(conversation.id)}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                            >
                                Pause
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button
                    onClick={handleSendGroupMessage}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                    Send Group Message
                </button>
            </div>

            <ConversationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ConversationManagement;
