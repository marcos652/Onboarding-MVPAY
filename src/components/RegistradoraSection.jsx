import { motion } from 'framer-motion';
import { HiShieldCheck } from 'react-icons/hi';
import './RegistradoraSection.css';

export default function RegistradoraSection() {
  return (
    <section id="registradora" className="section registradora">
      <div className="container">
        <div className="registradora__layout">
          <motion.div
            className="registradora__left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="registradora__logo-area">
              <LogoWatermark />
            </div>
          </motion.div>

          <motion.div
            className="registradora__right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="registradora__icon-badge">
              <HiShieldCheck size={28} />
            </div>
            <h2 className="registradora__title">Registradora</h2>
            <div className="registradora__content">
              <p>
                Como Subadquirente, você é obrigado a registrar diariamente todo o volume 
                transacionado líquido dos seus estabelecimentos comerciais em uma entidade registradora.
              </p>
              <p>
                Essas registradoras são responsáveis por garantir a rastreabilidade, segurança 
                e conformidade regulatória das transações.
              </p>
              <p>
                Além do registro diário, existem outras obrigações com a registradora, como 
                atualizações de credenciamento, conciliações e manutenção dos dados enviados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative curve */}
      <div className="registradora__curve" />
    </section>
  );
}

function LogoWatermark() {
  return (
    <div className="registradora__watermark">
      <svg viewBox="0 0 320 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 160 C30 160, 55 25, 90 25 C120 25, 130 130, 160 130 C190 130, 200 25, 235 25 C265 25, 290 160, 305 160"
          stroke="url(#reg-logo-grad)" strokeWidth="16" strokeLinecap="round" fill="none" />
        <text x="10" y="195" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="42" fill="#1A2B5C">
          Onboarding
        </text>
        <defs>
          <linearGradient id="reg-logo-grad" x1="10" y1="0" x2="275" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="40%" stopColor="#3DB8A0" />
            <stop offset="100%" stopColor="#22B8CF" />
          </linearGradient>
        </defs>
      </svg>
      <p className="registradora__watermark-text">Solução para seu dia a dia, é aqui!</p>
    </div>
  );
}
