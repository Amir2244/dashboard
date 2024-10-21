import React from 'react';
import Link from 'next/link';

const ArchiveManagement = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Archive</h1>
            <ul className="space-y-4">
                <li>
                    <Link href="/archive/invoices"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block">
                        Invoices
                    </Link>
                </li>
                <li>
                    <Link href="/archive/tasks"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block">
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link href="/archive/conversations"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block">
                        Conversations
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ArchiveManagement;
