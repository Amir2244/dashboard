'use client';
import React, {useState} from 'react';
import UserCard from '@/components/UserCard';

const UsersManagement = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'Alice Smith', email: 'alice@example.com'},
        {id: 2, name: 'Bob Johnson', email: 'bob@example.com'},
        {id: 3, name: 'Charlie Brown', email: 'charlie@example.com'},

    ]);

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Users Management</h1>

            <div className="space-y-6">
                {users.length > 0 ? (
                    users.map((user) => (
                        <UserCard key={user.id} user={user}/>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No users found.</p>
                )}
            </div>
        </div>
    );
};

export default UsersManagement;
