'use client';
import React, {useState} from 'react';
import AdModal from '@/components/AdModal';

const AdsManagement = () => {
    const [ads, setAds] = useState([
        {id: 1, title: 'Summer Sale', duration: '7 days', status: 'Active'},
        {id: 2, title: 'Winter Clearance', duration: '5 days', status: 'Paused'},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adToEdit, setAdToEdit] = useState(null);

    const handleAddOrUpdateAd = (newAd) => {
        if (adToEdit) {

            setAds((prevAds) => prevAds.map(ad => ad.id === adToEdit.id ? newAd : ad));
            setAdToEdit(null);
        } else {

            setAds([...ads, {...newAd, id: ads.length + 1}]);
        }
        setIsModalOpen(false);
    };

    const handleEditAd = (ad) => {
        setAdToEdit(ad);
        setIsModalOpen(true);
    };

    const handleDeleteAd = (adId) => {
        setAds(ads.filter(ad => ad.id !== adId));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Manage Ads</h1>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg "
                >
                    Create New Ad
                </button>
            </div>

            <div className="space-y-4">
                {ads.map((ad) => (
                    <div key={ad.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-700">{ad.title}</h2>
                        <p className="text-gray-700">Duration: {ad.duration}</p>
                        <p  className="text-gray-700">Status: {ad.status}</p>

                        <div className="flex justify-start mt-4 space-x-3">
                            <button
                                onClick={() => handleEditAd(ad)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteAd(ad.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                            >
                                Delete
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                            >
                                Pause
                            </button>
                            <button
                                className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
                            >
                                Change Duration
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <AdModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddOrUpdateAd={handleAddOrUpdateAd}
                adToEdit={adToEdit}
            />
        </div>
    );
};

export default AdsManagement;
