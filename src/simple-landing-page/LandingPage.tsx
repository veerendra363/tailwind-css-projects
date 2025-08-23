
export default function LandingPage() {
  return (
    <div className="bg-blue-300 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to my landing</h1>
        <p className="text-gray-600 mb-8 text-lg md:text-xl">Learn Tailwind CSS step by step with projects.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Get Started</button>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p>This is a description for feature 1.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p>This is a description for feature 2.</p>
              <button className="mt-4 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p>This is a description for feature 3.</p>
              <button className="mt-4 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
