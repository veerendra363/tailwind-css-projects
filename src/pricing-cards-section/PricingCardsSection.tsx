
export default function PricingCardsSection() {
  return (
    <div className="bg-blue-300 min-h-screen py-20 px-4">
        <h2 className="text-3xl mb-12 text-center md:text-5xl ">Upgrade your plan</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-6">

            {/* Free Plan Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4"> Free Plan</h3>
                <p className="text-3xl font-bold mb-4">$0/mo</p>
                <ul className="mb-6 text-gray-600 space-y-2 text-left">
                    <li className="text-green-600">✅ Basic Feature 1</li>
                    <li className="text-green-600">✅ Basic Feature 2</li>
                    <li className="text-red-600">❌ Advancd Feature 1</li>
                    <li className="text-red-600">❌ Advancd Feature 2</li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition">
                    Choose Plan
                </button>
            </div>

            {/* Basic Plan Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4"> Basic Plan</h3>
                <p className="text-3xl font-bold mb-4">$9/mo</p>
                <ul className="mb-6 text-gray-600 space-y-2 text-left">
                    <li className="text-green-600">✅ Basic Feature 1</li>
                    <li className="text-green-600">✅ Basic Feature 2</li>
                    <li className="text-green-600">✅ Advancd Feature 1</li>
                    <li className="text-red-600">❌ Advancd Feature 2</li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition">
                    Choose Plan
                </button>
            </div>

            {/* Pro Plan Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4"> Pro Plan</h3>
                <p className="text-3xl font-bold mb-4">$19/mo</p>
                <ul className="mb-6 text-gray-600 space-y-2 text-left">
                    <li className="text-green-600">✅ Basic Feature 1</li>
                    <li className="text-green-600">✅ Basic Feature 2</li>
                    <li className="text-green-600">✅ Advancd Feature 1</li>
                    <li className="text-green-600">✅ Advancd Feature 2</li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition">
                    Choose Plan
                </button>
            </div>

            {/* Enterprise Plan Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4"> Enterprise Plan</h3>
                <p className="text-3xl font-bold mb-4">$19/mo</p>
                <ul className="mb-6 text-gray-600 space-y-2 text-left">
                    <li className="text-green-600">✅ Basic Feature 1</li>
                    <li className="text-green-600">✅ Basic Feature 2</li>
                    <li className="text-green-600">✅ Advancd Feature 1</li>
                    <li className="text-green-600">✅ Advancd Feature 2</li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition">
                    Choose Plan
                </button>
            </div>
        </div>
    </div>
  )
}
