import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'solucao', label: 'Solução' },
  { id: 'fases', label: 'Fases' },
  { id: 'treinamentos', label: 'Treinamentos' },
  { id: 'capturas', label: 'Capturas' },
  { id: 'registradora', label: 'Registradora' },
  { id: 'regulatorio', label: 'Regulatório' },
  { id: 'slc', label: 'S.L.C.' },
  { id: 'credenciais', label: 'Credenciais' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <ProgressBar />

      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="navbar__inner">
          <div className="navbar__logo" onClick={() => scrollTo('hero')}>
            <LogoSVG />
            <span className="navbar__brand">MovingPay</span>
          </div>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div className="navbar__indicator" layoutId="indicator" />
                )}
              </button>
            ))}
          </div>

          <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = (window.scrollY / totalHeight) * 100;
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

function LogoSVG() {
  return (
    <svg width="40" height="26" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 58 C12 58, 22 8, 36 8 C50 8, 55 50, 70 50 C85 50, 90 8, 104 8 C118 8, 128 58, 135 58"
        stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="40%" stopColor="#3DB8A0" />
          <stop offset="100%" stopColor="#22B8CF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
