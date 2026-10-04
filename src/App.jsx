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
const FAQ = lazy(() => import('./components/FAQ'))

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

function PageLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <SeoHead />
      <Navbar />
      <Suspense fallback={<SectionFallback />}>
        {children}
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === '/blog') {
    return (
      <PageLayout>
        <div className="pt-24 min-h-[70vh]">
          <Blog />
        </div>
      </PageLayout>
    )
  }

  if (path === '/pricing') {
    return (
      <PageLayout>
        <div className="pt-16 min-h-[70vh]">
          <Pricing />
        </div>
      </PageLayout>
    )
  }

  if (path === '/setup') {
    return (
      <PageLayout>
        <div className="pt-16 min-h-[70vh]">
          <Setup />
        </div>
      </PageLayout>
    )
  }

  if (path === '/faq') {
    return (
      <PageLayout>
        <div className="pt-16 min-h-[70vh]">
          <FAQ />
        </div>
      </PageLayout>
    )
  }

  if (path === '/contact') {
    return (
      <PageLayout>
        <div className="pt-16 min-h-[70vh]">
          <Contact />
        </div>
      </PageLayout>
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
