import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi';
import './RegulatorySection.css';

export default function RegulatorySection() {
  return (
    <section id="regulatorio" className="section regulatory">
      <div className="container">
        <div className="regulatory__layout">
          <motion.div
            className="regulatory__left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="regulatory__logo-area">
              <LogoWatermarkReg />
            </div>
          </motion.div>

          <motion.div
            className="regulatory__right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="regulatory__icon-badge">
              <HiDocumentText size={28} />
            </div>
            <h2 className="regulatory__title">Regulatório</h2>
            <div className="regulatory__content">
              <p>
                Além do registro diário na registradora, a Subadquirente também precisa enviar 
                relatórios regulatórios periódicos — mensais e semestrais — informando todas as 
                transações e liquidações realizadas para seus estabelecimentos.
              </p>
              <p>
                A MovingPay realiza a geração automática desses arquivos, somente após a autorização 
                de vocês, deixando-os prontos para que sejam transmitidos ao Fisco conforme as 
                exigências legais.
              </p>
            </div>

            <div className="regulatory__highlights">
              <div className="regulatory__highlight">
                <div className="regulatory__highlight-icon">📊</div>
                <div>
                  <strong>Relatórios Periódicos</strong>
                  <span>Mensais e semestrais</span>
                </div>
              </div>
              <div className="regulatory__highlight">
                <div className="regulatory__highlight-icon">🔒</div>
                <div>
                  <strong>Conformidade Legal</strong>
                  <span>Transmissão ao Fisco</span>
                </div>
              </div>
              <div className="regulatory__highlight">
                <div className="regulatory__highlight-icon">⚡</div>
                <div>
                  <strong>Geração Automática</strong>
                  <span>Após sua autorização</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="regulatory__curve" />
    </section>
  );
}

function LogoWatermarkReg() {
  return (
    <div className="regulatory__watermark">
      <svg viewBox="0 0 320 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 160 C30 160, 55 25, 90 25 C120 25, 130 130, 160 130 C190 130, 200 25, 235 25 C265 25, 290 160, 305 160"
          stroke="url(#reg2-logo-grad)" strokeWidth="16" strokeLinecap="round" fill="none" />
        <text x="10" y="195" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="42" fill="#1A2B5C">
          Onboarding
        </text>
        <defs>
          <linearGradient id="reg2-logo-grad" x1="10" y1="0" x2="275" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="40%" stopColor="#3DB8A0" />
            <stop offset="100%" stopColor="#22B8CF" />
          </linearGradient>
        </defs>
      </svg>
      <p className="regulatory__watermark-text">Solução para seu dia a dia, é aqui!</p>
    </div>
  );
}
