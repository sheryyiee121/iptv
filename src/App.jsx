import { lazy, Suspense } from 'react'
import SeoHead from './components/SeoHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Trending = lazy(() => import('./components/Trending'))
const Features = lazy(() => import('./components/Features'))
const FireStick = lazy(() => import('./components/FireStick'))
const Pricing = lazy(() => import('./components/Pricing'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'))

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <SeoHead />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Trending />
        <Features />
        <FireStick />
        <Pricing />
        <Blog />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default App
