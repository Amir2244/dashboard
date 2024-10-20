import React from 'react'

type Invoice = {
    id: string
    amount: number
    date: string
}

type InvoiceListProps = {
    invoices: Invoice[]
    onExportPDF: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string) => void
    onSend: (id: string) => void
}

export const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, ...actions }) => {
    return (
        <ul className="space-y-2">
            {invoices.map((invoice) => (
                <li key={invoice.id} className="border p-2 rounded">
                    <span>Invoice #{invoice.id} - ${invoice.amount} - {invoice.date}</span>
                    <div className="space-x-2 mt-2">
                        {Object.entries(actions).map(([actionName, action]) => (
                            <button
                                key={actionName}
                                onClick={() => action(invoice.id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                {actionName.replace('on', '')}
                            </button>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}
