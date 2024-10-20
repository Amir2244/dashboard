import Link from 'next/link'
import { Home, Users, FileText, Bell, Tv, MessageCircle, Archive, Mail, Briefcase, List } from 'lucide-react'

const navItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Tasks', href: '/tasks', icon: List },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Invoices', href: '/invoices', icon: FileText },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Ads', href: '/ads', icon: Tv },
    { name: 'Conversations', href: '/conversations', icon: MessageCircle },
    { name: 'Archive', href: '/archive', icon: Archive },
    { name: 'Emails', href: '/emails', icon: Mail },
    { name: 'Job Applications', href: '/job-applications', icon: Briefcase },
    { name: 'Individual Tasks', href: '/individual-tasks', icon: List },
]

export default function Sidebar() {
    return (
        <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <span className="text-2xl font-semibold">TMS Dashboard</span>
            </div>
            <nav className="flex-grow">
                <ul className="space-y-2 py-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}