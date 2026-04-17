import { motion } from 'framer-motion';
import { HiCog, HiServer, HiAcademicCap, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import './RoadmapSection.css';

const steps = [
  {
    icon: <HiCog size={28} />,
    title: 'Kickoff',
    description: 'Coletar as informações para definir o escopo do projeto. Discussão e alinhamento dos requisitos',
    color: '#4A90D9',
  },
  {
    icon: <HiServer size={28} />,
    title: 'Implementação',
    description: 'Preparação ambiente de Produção e Homologação + cadastramento de usuários iniciais',
    color: '#3DB8A0',
  },
  {
    icon: <HiAcademicCap size={28} />,
    title: 'Treinamentos',
    description: 'Realizar os treinamentos das funcionalidades da plataforma',
    color: '#22B8CF',
  },
  {
    icon: <HiCheckCircle size={28} />,
    title: 'Uso em Homologação',
    description: 'Cliente irá realizar todos os testes em Homologação',
    color: '#4CAF50',
  },
  {
    icon: <HiLightningBolt size={28} />,
    title: 'Virada para Produção',
    description: 'Junto da equipe MovingPay vamos realizar o tombamento de homologação para produção',
    color: '#8BC34A',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section roadmap">
      <div className="container">
        <motion.div
          className="roadmap__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Jornada do <span className="gradient-text">Onboarding</span></h2>
          <p className="section-subtitle">
            Cada etapa foi pensada para garantir uma implantação segura, organizada e eficiente
          </p>
        </motion.div>

        <div className="roadmap__timeline">
          {/* Connection line */}
          <div className="roadmap__line" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="roadmap__step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="roadmap__step-number">{String(index + 1).padStart(2, '0')}</div>
              <div
                className="roadmap__step-icon"
                style={{ 
                  background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                  border: `2px solid ${step.color}30`,
                  color: step.color,
                }}
              >
                {step.icon}
              </div>
              <div className="roadmap__step-content">
                <h3 className="roadmap__step-title">{step.title}</h3>
                <p className="roadmap__step-desc">{step.description}</p>
              </div>
              <div className="roadmap__step-dot" style={{ background: step.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
