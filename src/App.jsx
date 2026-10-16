import { lazy, Suspense } from 'react'
import SeoHead from './components/SeoHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sliders from './components/Sliders'
import Trending from './components/Trending'
import Features from './components/Features'
import FireStick from './components/FireStick'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// Only off-homepage routes stay lazy. Homepage sections must ship with the first JS
// bundle: iOS Safari/Chrome (WebKit) can stall a React.lazy() chunk waterfall for
// minutes, which left navbar + hero visible and the rest blank.
const Blog = lazy(() => import('./components/Blog'))
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
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

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

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <SeoHead />
      <Navbar />
      <Hero />
      <Sliders />
      <Trending />
      <Features />
      <FireStick />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
