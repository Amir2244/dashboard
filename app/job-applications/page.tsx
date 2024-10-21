'use client';
import React, {useState} from 'react';

const JobApplicationsManagement = () => {
    const [applications, setApplications] = useState([
        {id: 1, applicant: 'John Doe', jobTitle: 'Software Engineer'},
        {id: 2, applicant: 'Jane Smith', jobTitle: 'Data Analyst'},
    ]);

    const handleDeleteApplication = (id) => {
        setApplications(applications.filter(app => app.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">Job Applications</h1>

            <div className="space-y-4">
                {applications.map((application) => (
                    <div key={application.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-700">{application.applicant}</h2>
                        <p className="text-gray-700">Position: {application.jobTitle}</p>

                        <div className="flex justify-start mt-4 space-x-3">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                                View
                            </button>
                            <button
                                onClick={() => handleDeleteApplication(application.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplicationsManagement;
