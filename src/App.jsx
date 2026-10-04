import { lazy, Suspense } from 'react'
import SeoHead from './components/SeoHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sliders from './components/Sliders'

const Trending = lazy(() => import('./components/Trending'))
const Features = lazy(() => import('./components/Features'))
const FireStick = lazy(() => import('./components/FireStick'))
const Pricing = lazy(() => import('./components/Pricing'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'))
const Setup = lazy(() => import('./components/Setup'))

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

function App() {
  const path = window.location.pathname;

  // Blog Page Route
  if (path === '/blog') {
    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <SeoHead />
        <Navbar />
        <Suspense fallback={<SectionFallback />}>
          <div className="pt-24 min-h-[70vh]">
            <Blog />
          </div>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      </div>
    )
  }

  // Pricing Page Route
  if (path === '/pricing') {
    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <SeoHead />
        <Navbar />
        <Suspense fallback={<SectionFallback />}>
          <div className="pt-16 min-h-[70vh]">
            <Pricing />
          </div>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      </div>
    )
  }

  // Setup Page Route
  if (path === '/setup') {
    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <SeoHead />
        <Navbar />
        <Suspense fallback={<SectionFallback />}>
          <div className="pt-16 min-h-[70vh]">
            <Setup />
          </div>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      </div>
    )
  }

  // Home Page Route
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <SeoHead />
      <Navbar />
      <Hero />
      <Sliders />
      <Suspense fallback={<SectionFallback />}>
        <Trending />
        <Features />
        <FireStick />
        <Pricing />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default App
