import { Bell, Search, User } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="ml-2 text-gray-500" />
                </div>
                <div className="flex items-center space-x-4">
                    <Bell className="text-gray-500 cursor-pointer" />
                    <User className="text-gray-500 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}