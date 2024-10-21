'use client';
import React, {useState} from 'react';
import UserCard from '@/components/UserCard';
const UsersManagement = () => {
    const [users] = useState([
        { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
        { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
        { id: 4, name: 'David Wilson', email: 'david@example.com' },
        { id: 5, name: 'Eva Green', email: 'eva@example.com' },

    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Users Management</h1>


            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                />
            </div>

            <div className="space-y-6">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No users found.</p>
                )}
            </div>
        </div>
    );
};

export default UsersManagement;