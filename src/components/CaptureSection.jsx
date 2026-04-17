import { motion } from 'framer-motion';
import { HiSwitchHorizontal, HiDatabase } from 'react-icons/hi';
import './CaptureSection.css';

export default function CaptureSection() {
  return (
    <section id="capturas" className="section capture">
      <div className="container">
        <motion.div
          className="capture__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Capturas | <span className="gradient-text">Adquirente</span></h2>
          <p className="section-subtitle">
            Na jornada entre captura e adquirência, nosso objetivo é garantir que cada etapa do seu processo seja integrada, segura e fluida
          </p>
        </motion.div>

        <div className="capture__layout">
          <motion.div
            className="capture__card capture__card--left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="capture__card-icon capture__card-icon--green">
              <HiSwitchHorizontal size={36} />
            </div>
            <h3 className="capture__card-title">Captura</h3>
            <p className="capture__card-text">
              A ponta de captura funciona como base para receber as transações da Subadquirente, 
              integrando-se ao sistema próprio ou de terceiros. Também permite o envio de estabelecimentos 
              e terminais para a captura (atualmente válido para Phoebus e Aditum; terminais apenas para Phoebus).
            </p>
            <p className="capture__card-text">
              Quando a Subadquirente utiliza captura própria, a MovingPay apenas precisa de um endpoint 
              para buscar as transações dos estabelecimentos já credenciados na plataforma.
            </p>
          </motion.div>

          {/* Center connector */}
          <motion.div
            className="capture__connector"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="capture__connector-ring">
              <div className="capture__connector-inner">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M12 24H36M36 24L28 16M36 24L28 32" stroke="url(#conn-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="conn-grad" x1="12" y1="24" x2="36" y2="24">
                      <stop stopColor="#8BC34A"/>
                      <stop offset="1" stopColor="#22B8CF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="capture__card capture__card--right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >            
            <div className="capture__card-icon capture__card-icon--blue">
              <HiDatabase size={36} />
            </div>
            <h3 className="capture__card-title">Adquirente</h3>
            <p className="capture__card-text">
              A ponta da adquirente servirá para realização das conciliações das transações capturadas. 
              A sua adquirente deve fornecer para a Movingpay, seja por meio de integração de API ou SFTP, 
              arquivos que servem para realização da conciliação de transações (custos, recebimentos, 
              cancelamentos, chargebacks).
            </p>
            <p className="capture__card-text">
              Algumas adquirentes fornecem o Extrato Eletrônico (EDI) e outras fornecem reports de transações, 
              liquidação, ajustes, cada uma tem um layout próprio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
