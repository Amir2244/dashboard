import Link from 'next/link'

export default function Ads() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Advertisements</h1>
            <ul className="space-y-2">
                <li><Link href="/ads/create" className="text-blue-500 hover:underline">Create Advertisement</Link></li>
                <li>
                    <button className="text-blue-500 hover:underline">Delete Advertisement</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Edit Advertisement</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Pause Advertisement Display</button>
                </li>
                <li>
                    <button className="text-blue-500 hover:underline">Change Advertisement Display Duration</button>
                </li>
            </ul>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    )
}