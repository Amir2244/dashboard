import { ReactNode } from 'react'

type DashboardCardProps = {
    title: string
    value: string | number
    icon: ReactNode
    color: string
}

export default function DashboardCard({ title, value, icon, color }: Readonly<DashboardCardProps>) {
    return (
        <div className={`bg-white rounded-lg shadow-md p-6 flex items-center ${color}`}>
            <div className="mr-4">{icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    )
}