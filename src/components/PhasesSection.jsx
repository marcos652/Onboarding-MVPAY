import { motion } from 'framer-motion';
import { HiRefresh, HiGlobe, HiAcademicCap, HiCode } from 'react-icons/hi';
import './PhasesSection.css';

const phases = [
  {
    icon: <HiRefresh size={32} />,
    title: 'Kick-off',
    color: '#2563EB',
    items: [
      'Alinhar como o cliente atua, levantar necessidades específicas, ajustar expectativas',
      'Apresentar o time de implantação e o ponto focal',
      'Coletar usuários iniciais e definir os próximos passos',
      'Análise e Valoração de Necessidades Específicas (se houver)',
    ],
  },
  {
    icon: <HiGlobe size={32} />,
    title: 'Implantação',
    color: '#3DB8A0',
    items: [
      'Definir e formalizar todas as etapas da implantação com prazos claros para cada fase',
      'Preparação dos Ambientes (Produção e Homologação) + Cadastro de Usuários',
      'A MovingPay configura os ambientes de homologação e produção do cliente',
      'Vincula os usuários iniciais a cada ambiente para início dos testes',
    ],
  },
  {
    icon: <HiAcademicCap size={32} />,
    title: 'Treinamento',
    color: '#22B8CF',
    items: [
      'Reuniões de treinamento divididas em etapas principais',
      'Overview inicial para alinhamento geral do projeto',
    ],
  },
  {
    icon: <HiCode size={32} />,
    title: 'HML | PROD',
    color: '#8BC34A',
    items: [
      'Uso em Homologação: período inicial para testes, validação das funcionalidades e ajustes finais',
      'Virada para Produção: ativação oficial do sistema após a homologação',
      'Atendimento Pós-Implantação: suporte prioritário ao cliente durante o primeiro mês de uso em produção',
    ],
  },
];

export default function PhasesSection() {
  return (
    <section id="fases" className="section phases">
      <div className="container">
        <motion.div
          className="phases__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Fases da <span className="gradient-text">Implantação</span></h2>
          <p className="section-subtitle">
            Esta nova etapa marca o início de uma jornada de crescimento e eficiência
          </p>
        </motion.div>

        <div className="phases__grid">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="phases__card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="phases__card-top" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}CC)` }}>
                <div className="phases__card-icon">
                  {phase.icon}
                </div>
                <h3 className="phases__card-title">{phase.title}</h3>
                <div className="phases__card-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="phases__card-body">
                <ul className="phases__card-list">
                  {phase.items.map((item, i) => (
                    <li key={i} className="phases__card-item">
                      <span className="phases__card-bullet" style={{ background: phase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background */}
      <div className="phases__bg-pattern" />
    </section>
  );
}
