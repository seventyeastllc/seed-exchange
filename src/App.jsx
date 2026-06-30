import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import AnnouncementBanner from './components/AnnouncementBanner'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HowWeWork from './pages/HowWeWork'
import PartnerWithUs from './pages/PartnerWithUs'
import Community from './pages/Community'
import Lattice from './pages/Lattice'
import Roundtables from './pages/Roundtables'
import Contact from './pages/Contact'
import MaintenancePopup from './components/MaintenancePopup'
import { MAINTENANCE_MODE } from './maintenance.js'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AnnouncementBanner />

      {MAINTENANCE_MODE && <MaintenancePopup />}

      <Routes>
        {MAINTENANCE_MODE ? (
          <>
            {/* Maintenance: only Home and Contact are live */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Everything else bounces home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/lattice" element={<Lattice />} />
            <Route path="/roundtables" element={<Roundtables />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
