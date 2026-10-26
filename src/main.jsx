import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.07,
        duration: 1.5,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.2,
        wheelMultiplier: 0.85,
        respectReducedMotion: false,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
)
