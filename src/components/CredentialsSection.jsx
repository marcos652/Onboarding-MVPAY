import { motion } from 'framer-motion';
import { HiStar, HiChartPie, HiClipboardList } from 'react-icons/hi';
import './CredentialsSection.css';

const credentials = [
  {
    number: '01',
    title: 'Captura',
    icon: <HiStar size={40} />,
    description: 'Credenciais de acesso ao sistema de captura para integração das transações',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #8BC34A, #4CAF50)',
  },
  {
    number: '02',
    title: 'Adquirente',
    icon: <HiChartPie size={40} />,
    description: 'Credenciais de acesso ao ambiente de conciliações das adquirentes',
    color: '#4A90D9',
    gradient: 'linear-gradient(135deg, #4A90D9, #2563EB)',
  },
  {
    number: '03',
    title: 'Registradora',
    icon: <HiClipboardList size={40} />,
    description: 'Credenciais de acesso para registro regulatório junto à entidade registradora',
    color: '#22B8CF',
    gradient: 'linear-gradient(135deg, #22B8CF, #06B6D4)',
  },
];

export default function CredentialsSection() {
  return (
    <section id="credenciais" className="section credentials">
      <div className="container">
        <motion.div
          className="credentials__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Compartilhe suas <span className="gradient-text">Credenciais</span></h2>
          <p className="section-subtitle">
            Para dar início à implantação, precisamos das credenciais de acesso aos serviços abaixo
          </p>
        </motion.div>

        <div className="credentials__grid">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              className="credentials__card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="credentials__card-number">{cred.number}</div>
              <div className="credentials__card-icon" style={{ color: cred.color }}>
                {cred.icon}
              </div>
              <h3 className="credentials__card-title">{cred.title}</h3>
              <p className="credentials__card-desc">{cred.description}</p>
              <div className="credentials__card-shine" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
