import { motion } from 'framer-motion';
import { HiCreditCard, HiArrowRight, HiOfficeBuilding, HiChartBar, HiCash, HiSwitchHorizontal, HiLibrary } from 'react-icons/hi';
import './SLCSection.css';

const slcSteps = [
  {
    icon: <HiCreditCard size={28} />,
    title: 'Transação Realizada',
    description: 'O portador realiza uma compra no estabelecimento comercial (EC) vinculado à Subadquirente.',
    color: '#2563EB',
  },
  {
    icon: <HiSwitchHorizontal size={28} />,
    title: 'Captura da Venda',
    description: 'Uma captura (ex: Phoebus) capta a venda realizada no ponto de venda e transmite os dados da transação.',
    color: '#4A90D9',
  },
  {
    icon: <HiChartBar size={28} />,
    title: 'Plataforma MovingPay',
    description: 'A venda chega à plataforma MovingPay, onde é processada, conciliada com a adquirente via Extrato EDI e disponibilizada para gestão.',
    color: '#3DB8A0',
  },
  {
    icon: <HiOfficeBuilding size={28} />,
    title: 'Montagem do Lote',
    description: 'A Subadquirente monta o lote de pagamentos com todas as transações a serem liquidadas.',
    color: '#22B8CF',
  },
  {
    icon: <HiArrowRight size={28} />,
    title: 'Transmissão para Nuclea',
    description: 'A MovingPay transmite o lote de pagamentos para a Nuclea (câmara de liquidação centralizada).',
    color: '#8BC34A',
  },
  {
    icon: <HiCash size={28} />,
    title: 'Banco Liquidante da Sub',
    description: 'A Nuclea recebe o lote e dispara o pagamento para o Banco Liquidante da Subadquirente.',
    color: '#4CAF50',
  },
  {
    icon: <HiLibrary size={28} />,
    title: 'Banco Domicílio',
    description: 'O Banco Liquidante processa e dispara os valores para o Banco Domicílio dos estabelecimentos comerciais.',
    color: '#2E7D32',
  },
];

const slcBenefits = [
  {
    emoji: '🔒',
    title: 'Segurança Regulatória',
    text: 'Conformidade com as normas do Banco Central para arranjos de pagamento',
  },
  {
    emoji: '⚡',
    title: 'Agilidade na Liquidação',
    text: 'Recebimento centralizado elimina complexidade operacional',
  },
  {
    emoji: '📊',
    title: 'Conciliação Integrada',
    text: 'MovingPay reconcilia automaticamente os valores do S.L.C. com as transações',
  },
  {
    emoji: '🏦',
    title: 'Domicílio Bancário',
    text: 'Controle total sobre o domicílio bancário da Subadquirente',
  },
];

export default function SLCSection() {
  return (
    <section id="slc" className="section slc">
      <div className="container">
        <motion.div
          className="slc__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="slc__badge">S.L.C.</div>
          <h2 className="section-title">Sistema de Liquidação <span className="gradient-text">Centralizada</span></h2>
          <p className="section-subtitle">
            Entenda como funciona o fluxo de liquidação centralizada para a Subadquirente e como a MovingPay 
            facilita todo o processo
          </p>
        </motion.div>

        {/* What is SLC */}
        <motion.div
          className="slc__intro glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="slc__intro-icon">
            <HiCash size={36} />
          </div>
          <div className="slc__intro-content">
            <h3>O que é o S.L.C.?</h3>
            <p>
              O Sistema de Liquidação Centralizada (S.L.C.) é o mecanismo pelo qual as transações 
              realizadas nos arranjos de pagamento são liquidadas de forma centralizada. Para a Subadquirente, 
              isso significa que os valores das vendas dos seus estabelecimentos são processados e liquidados 
              através de uma câmara centralizada (Nuclea), garantindo segurança, rastreabilidade e conformidade 
              regulatória conforme as normas do Banco Central.
            </p>
          </div>
        </motion.div>

        {/* Flow Steps — Visual Pipeline */}
        <div className="slc__flow">
          <h3 className="slc__flow-title">Fluxo Operacional da Sub no S.L.C.</h3>
          
          <div className="slc__pipeline">
            {/* Connection line SVG */}
            <svg className="slc__pipeline-line" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pipeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="20%" stopColor="#4A90D9" />
                  <stop offset="35%" stopColor="#3DB8A0" />
                  <stop offset="50%" stopColor="#22B8CF" />
                  <stop offset="65%" stopColor="#8BC34A" />
                  <stop offset="80%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#2E7D32" />
                </linearGradient>
              </defs>
              <path
                d="M0 30 L1200 30"
                stroke="url(#pipeline-grad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>

            {slcSteps.map((step, index) => (
              <motion.div
                key={index}
                className="slc__pipeline-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Dot on the pipeline */}
                <div className="slc__pipeline-dot" style={{ background: step.color }}>
                  <div className="slc__pipeline-dot-ring" style={{ borderColor: `${step.color}40` }} />
                </div>

                {/* Step number */}
                <div className="slc__pipeline-num" style={{ color: step.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  className="slc__pipeline-icon"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                    color: step.color,
                    border: `2px solid ${step.color}30`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="slc__pipeline-title">{step.title}</h4>
                <p className="slc__pipeline-desc">{step.description}</p>

                {/* Arrow connector */}
                {index < slcSteps.length - 1 && (
                  <div className="slc__pipeline-arrow" style={{ color: step.color }}>
                    <HiArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="slc__benefits">
          <h3 className="slc__benefits-title">Benefícios para a Subadquirente</h3>
          <div className="slc__benefits-grid">
            {slcBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="slc__benefit"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="slc__benefit-emoji">{benefit.emoji}</div>
                <div>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MovingPay Role */}
        <motion.div
          className="slc__movingpay"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="slc__movingpay-inner">
            <h3>O papel da MovingPay no S.L.C.</h3>
            <p>
              A MovingPay atua como facilitadora de todo o processo de liquidação centralizada 
              para a sua operação. Nossa plataforma recebe as transações capturadas, realiza a 
              conciliação com a adquirente via Extrato Eletrônico (EDI), permite à Subadquirente 
              a montagem e gestão dos lotes de pagamento, e realiza a transmissão direta para a 
              Nuclea. Além disso, conciliamos automaticamente os valores recebidos, geramos 
              relatórios detalhados de liquidação e controlamos toda a agenda financeira até o 
              repasse final ao Banco Domicílio dos seus estabelecimentos comerciais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
