'use client';
import React, {useState} from 'react';
import InvoiceCard from "@/components/InvoiceCard";
import InvoiceModal from "@/components/InvoicesModal";

const InvoicesManagement = () => {
    const [invoices, setInvoices] = useState([
        {id: 1, title: 'Invoice #001', amount: 100, date: '2024-01-01'},
        {id: 2, title: 'Invoice #002', amount: 250, date: '2024-02-15'},
        {id: 3, title: 'Invoice #003', amount: 300, date: '2024-03-10'},

    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddInvoice = (newInvoice) => {
        setInvoices((prevInvoices) => [
            ...prevInvoices,
            {...newInvoice, id: prevInvoices.length + 1} // Generate a new id based on existing invoices
        ]);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Invoices Management</h1>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Create New Invoice
                </button>
            </div>

            <div className="space-y-6">
                {invoices.length > 0 ? (
                    invoices.map((invoice) => (
                        <InvoiceCard key={invoice.id} invoice={invoice}/>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No invoices found.</p>
                )}
            </div>

            <InvoiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddInvoice={handleAddInvoice}
            />
        </div>
    );
};

export default InvoicesManagement;