import DashboardCard from '@/components/DashboardCard'
import {Users, FileText, List, MessageCircle} from 'lucide-react'

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <DashboardCard title="Total Users" value={1234} icon={<Users size={24}/>} color="text-blue-600"/>
                <DashboardCard title="Active Tasks" value={42} icon={<List size={24}/>} color="text-green-600"/>
                <DashboardCard title="Pending Invoices" value={7} icon={<FileText size={24}/>} color="text-yellow-600"/>
                <DashboardCard title="New Messages" value={18} icon={<MessageCircle size={24}/>}
                               color="text-purple-600"/>
            </div>
            {/* Add more dashboard content here */}
        </div>
    )
}