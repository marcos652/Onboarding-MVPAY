import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      {/* Animated background shapes */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__curve" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="hero__logo-wrapper">
            <HeroLogo />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Onboarding 2026
          </div>
          <h2 className="hero__tagline">Solução para seu dia a dia, é aqui!</h2>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1 className="hero__title">
            Bem <span className="hero__title-accent">Vindo</span>
          </h1>
          <p className="hero__description">
            Estamos felizes em tê-lo como cliente e comprometidos em oferecer uma experiência 
            excelente durante todo o onboarding e após a instalação. Este documento apresenta 
            de forma clara o que você pode esperar durante o processo e nos ajuda a garantir 
            uma implantação organizada e eficiente.
          </p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className="hero__btn"
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer o processo
              <HiChevronDown size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiChevronDown size={28} />
      </motion.div>
    </section>
  );
}

function HeroLogo() {
  return (
    <svg className="hero__logo-svg" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 160 C30 160, 55 25, 90 25 C120 25, 130 130, 160 130 C190 130, 200 25, 235 25 C265 25, 290 160, 305 160"
        stroke="url(#hero-logo-grad)" strokeWidth="18" strokeLinecap="round" fill="none" />
      <text x="10" y="190" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="44" fill="white">
        Onboarding
      </text>
      <defs>
        <linearGradient id="hero-logo-grad" x1="10" y1="0" x2="275" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="40%" stopColor="#3DB8A0" />
          <stop offset="100%" stopColor="#22B8CF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
