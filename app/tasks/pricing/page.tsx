import Link from 'next/link';

export default function TaskPricing() {
    const taskTypes = [
        {type: 'Design Task', salePrice: '$150', purchasePrice: '$120'},
        {type: 'Development Task', salePrice: '$200', purchasePrice: '$180'},
        {type: 'Marketing Task', salePrice: '$100', purchasePrice: '$80'},
        {type: 'Testing Task', salePrice: '$50', purchasePrice: '$40'},

    ];

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Task Pricing</h1>

            <div className="space-y-4">
                {taskTypes.map((task, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-700">{task.type}</h2>
                        <ul className="text-gray-600 mt-2 space-y-1">
                            <li className="flex justify-between">
                                <span>Price at Sale:</span>
                                <span>{task.salePrice}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Price at Purchase:</span>
                                <span>{task.purchasePrice}</span>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link href="/tasks" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                    Back to Tasks
                </Link>
            </div>
        </div>
    );
}
