import React, {useState, useEffect} from 'react';

const AdModal = ({isOpen, onClose, onAddOrUpdateAd, adToEdit}) => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('Active');

    useEffect(() => {
        if (adToEdit) {
            setTitle(adToEdit.title);
            setDuration(adToEdit.duration);
            setStatus(adToEdit.status);
        } else {
            setTitle('');
            setDuration('');
            setStatus('Active');
        }
    }, [adToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAd = {id: adToEdit?.id || Date.now(), title, duration, status};
        onAddOrUpdateAd(newAd);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-400">{adToEdit ? 'Edit Ad' : 'Create New Ad'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="title">Ad Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="status">Status</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-400"
                            required
                        >
                            <option value="Active">Active</option>
                            <option value="Paused">Paused</option>
                        </select>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                            {adToEdit ? 'Save Changes' : 'Create Ad'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdModal;
