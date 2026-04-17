import { motion } from 'framer-motion';
import { HiDesktopComputer, HiOfficeBuilding, HiShoppingCart } from 'react-icons/hi';
import './SolutionSection.css';

const portals = [
  {
    icon: <HiDesktopComputer size={36} />,
    title: 'Portal Console',
    subtitle: 'Backoffice Subadquirente',
    description: 'No Portal Console por meio da integração Movingpay x Captura x Extrato Eletrônico conseguimos realizar a captura e conciliações das transações, bem como trazer demais informações constantes no Extrato Eletrônico que sejam necessárias para o dia a dia da subadquirente.',
    color: '#2563EB',
  },
  {
    icon: <HiOfficeBuilding size={36} />,
    title: 'Portal do Distribuidor',
    subtitle: 'Gestão de ECs',
    description: 'No portal do distribuidor, ele terá acesso a uma gestão completa dos estabelecimentos comerciais que estão diretamente abaixo dele. Será possível cadastrar novos estabelecimentos, definir taxas específicas e monitorar em tempo real o desempenho e status dos estabelecimentos controlados.',
    color: '#3DB8A0',
  },
  {
    icon: <HiShoppingCart size={36} />,
    title: 'Portal do EC',
    subtitle: 'Estabelecimento Comercial',
    description: 'O Portal do EC é fornecido ao Estabelecimento Comercial da Subadquirente uma visão de todo seu transacional e agenda, podendo o Estabelecimento Comercial realizar a sua gestão de vendas e solicitação de antecipações, bem como emitir relatórios, tudo integrado diretamente com o Portal Console.',
    color: '#22B8CF',
  },
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="section solution">
      <div className="container">
        <motion.div
          className="solution__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre a solução <span className="gradient-text">MovingPay</span></h2>
          <p className="section-subtitle">
            A MovingPay é uma solução que visa facilitar o dia a dia operacional de uma Subadquirente por intermédio do oferecimento dos seus portais
          </p>
        </motion.div>

        <div className="solution__grid">
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              className="solution__card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className="solution__card-icon"
                style={{ 
                  background: `linear-gradient(135deg, ${portal.color}15, ${portal.color}08)`,
                  color: portal.color,
                }}
              >
                {portal.icon}
              </div>
              <div className="solution__card-badge" style={{ color: portal.color }}>
                {portal.subtitle}
              </div>
              <h3 className="solution__card-title">{portal.title}</h3>
              <p className="solution__card-desc">{portal.description}</p>
              <div className="solution__card-line" style={{ background: portal.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
