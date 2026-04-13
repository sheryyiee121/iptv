import SeoHead from './components/SeoHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Features from './components/Features'
import FireStick from './components/FireStick'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <SeoHead />
      <Navbar />
      <Hero />
      <Trending />
      <Features />
      <FireStick />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
