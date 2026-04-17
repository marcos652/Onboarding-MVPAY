import { motion } from 'framer-motion';
import { HiSearch, HiThumbUp } from 'react-icons/hi';
import './FinalSection.css';

export default function FinalSection() {
  return (
    <section id="final" className="section final">
      <div className="container">
        <div className="final__layout">
          <motion.div
            className="final__left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="final__logo-area">
              <svg viewBox="0 0 320 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 160 C30 160, 55 25, 90 25 C120 25, 130 130, 160 130 C190 130, 200 25, 235 25 C265 25, 290 160, 305 160"
                  stroke="url(#final-logo-grad)" strokeWidth="16" strokeLinecap="round" fill="none" />
                <text x="10" y="195" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="36" fill="#1A2B5C">
                  Considerações
                </text>
                <text x="10" y="235" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="36" fill="#1A2B5C">
                  finais
                </text>
                <defs>
                  <linearGradient id="final-logo-grad" x1="10" y1="0" x2="275" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#8BC34A" />
                    <stop offset="40%" stopColor="#3DB8A0" />
                    <stop offset="100%" stopColor="#22B8CF" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="final__left-text">Agora é com você! Queremos ouvir um pouco mais de você...</p>
            </div>
          </motion.div>

          <motion.div
            className="final__right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="final__cards">
              <div className="final__card">
                <div className="final__card-icon final__card-icon--blue">
                  <HiSearch size={36} />
                </div>
                <h3 className="final__card-title">Observações</h3>
                <div className="final__card-number">01</div>
                <p className="final__card-text">
                  Nossa equipe está sempre aberta para novas sugestões
                </p>
              </div>

              <div className="final__card-divider">
                <svg viewBox="0 0 40 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0 L20 80 L35 100 L20 120 L20 200" stroke="#E4E8EE" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              <div className="final__card">
                <div className="final__card-icon final__card-icon--green">
                  <HiThumbUp size={36} />
                </div>
                <h3 className="final__card-title final__card-title--green">Como estão suas expectativas?</h3>
                <div className="final__card-number">02</div>
                <p className="final__card-text">
                  Estamos ansiosos para ouvir você! Mas... e aí, como está suas expectativas conosco?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
