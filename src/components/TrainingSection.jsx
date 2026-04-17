import { motion } from 'framer-motion';
import { HiCursorClick, HiChartBar, HiCurrencyDollar, HiUserGroup, HiEye } from 'react-icons/hi';
import './TrainingSection.css';

const trainings = [
  {
    number: 1,
    icon: <HiCursorClick size={32} />,
    title: 'Operacional',
    description: 'Treinamento 01 — Credenciamento - POS e Taxas',
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #2563EB, #4A90D9)',
  },
  {
    number: 2,
    icon: <HiChartBar size={32} />,
    title: 'Transacional',
    description: 'Treinamento 02 — Transações - Relatórios e Conciliações',
    color: '#3DB8A0',
    gradient: 'linear-gradient(135deg, #3DB8A0, #4ECDC4)',
  },
  {
    number: 3,
    icon: <HiCurrencyDollar size={32} />,
    title: 'Financeiro',
    description: 'Treinamento 03 — Contas a pagar - Lotes - CNAB e antecipações',
    color: '#22B8CF',
    gradient: 'linear-gradient(135deg, #22B8CF, #06B6D4)',
  },
  {
    number: 4,
    icon: <HiUserGroup size={32} />,
    title: 'Vendedor | Estabelecimento',
    description: 'Mostrar como funciona os dois portais da Subadquirente',
    color: '#8BC34A',
    gradient: 'linear-gradient(135deg, #8BC34A, #4CAF50)',
  },
  {
    number: 5,
    icon: <HiEye size={32} />,
    title: 'Monitorar',
    description: 'Acompanhamento das transações em tempo real',
    color: '#4A90D9',
    gradient: 'linear-gradient(135deg, #4A90D9, #7C3AED)',
  },
];

export default function TrainingSection() {
  return (
    <section id="treinamentos" className="section training">
      <div className="container">
        <motion.div
          className="training__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Seu treinamento <span className="gradient-text">começa aqui!</span></h2>
          <p className="section-subtitle">
            Cada etapa do treinamento é um passo rumo à excelência
          </p>
        </motion.div>

        <div className="training__arc">
          {/* Arc connection line */}
          <svg className="training__arc-line" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4CAF50" />
                <stop offset="40%" stopColor="#3DB8A0" />
                <stop offset="70%" stopColor="#22B8CF" />
                <stop offset="100%" stopColor="#4A90D9" />
              </linearGradient>
            </defs>
            <path
              d="M50 160 C100 160, 180 20, 300 20 C420 20, 440 140, 600 140 C760 140, 780 20, 900 20 C1020 20, 1100 160, 1150 160"
              stroke="url(#arc-gradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>

          {trainings.map((training, index) => (
            <motion.div
              key={index}
              className="training__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              style={{ '--item-offset': `${(index % 2 === 0 ? -1 : 1) * 20}px` }}
            >
              <div className="training__item-number">{training.number}</div>
              <div
                className="training__item-icon"
                style={{ background: training.gradient }}
              >
                {training.icon}
              </div>
              <h3 className="training__item-title">{training.title}</h3>
              <p className="training__item-desc">{training.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
