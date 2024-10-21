import React from 'react';

const InvoiceCard = ({invoice}) => {
    const handleExportPDF = () => {
        console.log(`Exporting ${invoice.title} as PDF`);
    };

    const handleDelete = () => {
        console.log(`Deleting ${invoice.title}`);
    };

    const handleEdit = () => {
        console.log(`Editing ${invoice.title}`);
    };

    const handleSend = () => {
        console.log(`Sending ${invoice.title}`);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">{invoice.title}</h2>
            <p className="text-gray-500 mb-4">Amount: ${invoice.amount}</p>
            <p className="text-gray-500 mb-4">Date: {invoice.date}</p>

            <div className="flex flex-wrap space-x-4">
                <button onClick={handleExportPDF}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Export as PDF
                </button>
                <button onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Delete
                </button>
                <button onClick={handleEdit}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Edit
                </button>
                <button onClick={handleSend}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">
                    Send
                </button>
            </div>
        </div>
    );
};

export default InvoiceCard;
