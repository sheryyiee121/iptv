"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRICING", href: "/pricing" },
  { label: "SETUP GUIDE", href: "/setup" },
  { label: "BLOG", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "CONTACT US", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Check initially
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          padding-top: 24px;
          pointer-events: none; /* Let clicks pass through wrapper */
        }

        .navbar {
          pointer-events: auto; /* Enable clicks on the navbar itself */
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          overflow: visible;
        }

        .navbar-inner {
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-text {
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 800;
          letter-spacing: 0px;
          color: #111;
          line-height: 1;
        }

        .logo-text span.firestick { color: #E50914; }
        .logo-text span.iptv { color: #111; }

        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          color: #555;
          text-decoration: none;
          padding: 4px 0;
          position: relative;
          transition: color 0.2s;
        }

        .nav-links li a:hover {
          color: #000;
        }

        .nav-links li a.active {
          color: #3b82f6;
        }

        .nav-links li a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #3b82f6;
          border-radius: 2px;
        }

        .order-btn {
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          background: #3b82f6;
          border: none;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .order-btn:hover {
          background: #2563eb;
          box-shadow: 0 0 16px rgba(59,130,246,0.45);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          border: 1px solid #1a1a1a;
          padding: 16px 24px 24px;
          gap: 16px;
          pointer-events: auto;
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          right: 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .mobile-menu a {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          color: #aaa;
          text-decoration: none;
          padding: 6px 0;
          display: block;
          transition: color 0.2s;
        }

        .mobile-menu a:hover,
        .mobile-menu a.active {
          color: #3b82f6;
        }

        .mobile-order-btn {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          background: #3b82f6;
          border: none;
          padding: 10px 22px;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          display: block;
          margin-top: 8px;
          transition: background 0.2s;
        }

        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .order-btn { display: none !important; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <div className="navbar-wrapper">
        <motion.nav
          className="navbar"
          initial={false}
          animate={{
            width: isMobile ? 'calc(100% - 32px)' : (isScrolled ? '900px' : '1100px'),
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: isScrolled ? 'blur(28px) saturate(200%)' : 'blur(16px)',
            marginTop: isScrolled ? '-12px' : '0px', /* smoothly pulls it up slightly when scrolled */
            boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.4)' : '0 10px 40px rgba(0,0,0,0.15)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
        >
          <motion.div
            className="navbar-inner"
            animate={{
              height: isScrolled ? '46px' : '62px'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            <a href="/" className="logo">
              <motion.div
                className="logo-text"
                animate={{ fontSize: isScrolled ? '16px' : '19px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <span className="firestick">Firestick</span>
                <span className="iptv">IPTV</span>
              </motion.div>
            </a>

            <motion.ul
              className="nav-links"
              animate={{ gap: isScrolled ? '20px' : '32px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={active === link.label ? "active" : ""} onClick={() => setActive(link.label)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>

            <motion.a
              href="/pricing"
              className="order-btn"
              animate={{
                paddingTop: isScrolled ? '6px' : '9px',
                paddingBottom: isScrolled ? '6px' : '9px',
                paddingLeft: isScrolled ? '20px' : '24px',
                paddingRight: isScrolled ? '20px' : '24px',
                fontSize: isScrolled ? '12px' : '13px'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              ORDER NOW
            </motion.a>

            <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}></span>
              <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
              <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}></span>
            </button>
          </motion.div>

          {menuOpen && (
            <div className="mobile-menu">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={active === link.label ? "active" : ""} onClick={() => { setActive(link.label); setMenuOpen(false); }}>
                  {link.label}
                </a>
              ))}
              <a href="/pricing" className="mobile-order-btn">ORDER NOW</a>
            </div>
          )}
        </motion.nav>
      </div>
    </>
  );
}
