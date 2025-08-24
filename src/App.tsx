import { Link, Route, Routes } from 'react-router-dom'
import PricingCardsSection from './pricing-cards-section/PricingCardsSection'
import ProfileCard from './profile-card/ProfileCard'
import LandingPage from './simple-landing-page/LandingPage'
import Home from './Home'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-6 py-5 z-50'>
        <div className='flex items-center gap-2'>
          <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          alt="Tailwind logo"  className='w-6 h-6'/>
          <span className='text-xl font-bold'>Tailwind Proejcts</span>
        </div>
        <ul className='flex gap-6 text-gray-700 font-medium'>
          <li><Link to="/" className='hover:text-blue-500'>Home</Link></li>
          <li><Link to="#about" className='hover:text-blue-500'>About</Link></li>
          <li><Link to="#contact" className='hover:text-blue-500'>Contact</Link></li>
          <li><Link to="#project" className='hover:text-blue-500'>Projects</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <main className='flex-1 mt-10 px-6 py-10 bg-gray-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/pricing-card" element={<PricingCardsSection />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className='bg-white border-t text-center py-4 text-gray-600'>
        © 2025 Veerendra Tailwind Projects
      </footer>
    </div>
  )
}

export default App;
