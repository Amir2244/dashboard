import React from 'react'

type User = {
    id: string
    name: string
    email: string
}

type UserListProps = {
    users: User[]
    onDeleteAccount: (id: string) => void
    onSuspendAccount: (id: string) => void
    onResetPassword: (id: string) => void
    onMessageUser: (id: string) => void
    onGrantFreePurchases: (id: string) => void
}

export const UserList: React.FC<UserListProps> = ({ users, ...actions }) => {
    return (
        <ul className="space-y-2">
            {users.map((user) => (
                <li key={user.id} className="border p-2 rounded">
                    <span>{user.name} ({user.email})</span>
                    <div className="space-x-2 mt-2">
                        {Object.entries(actions).map(([actionName, action]) => (
                            <button
                                key={actionName}
                                onClick={() => action(user.id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                {actionName.replace('on', '').replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}