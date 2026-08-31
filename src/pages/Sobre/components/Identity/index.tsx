import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Identity.module.css';

import iconMissao from '../../../../assets/iconMissao.svg';
import iconVisao from '../../../../assets/iconVisao.svg';
import iconValor from '../../../../assets/iconValor.svg';

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const identityItems = [
  {
    id: 1,
    icon: iconMissao,
    title: 'Missão',
    desc: 'Traduzir a arquitetura em obra executada, sustentando escopo, custo e prazo com precisão em cada etapa. Do briefing à entrega, garantindo qualidade, eficiência e excelência na execução.',
  },
  {
    id: 2,
    icon: iconVisao,
    title: 'Visão',
    desc: 'Chegar a 2031 como construtora e incorporadora de alto padrão em São Paulo, escolhida pelos clientes pelo que entrega e financiada por investidores pelo que já entregou.',
  },
  {
    id: 3,
    icon: iconValor,
    title: 'Valores',
    desc: 'Recusamos a obra que não podemos conduzir no nosso padrão. Coordenamos o projeto do arquiteto, sem assinar sua autoria. Um só interlocutor responde pela obra, do primeiro estudo à entrega.',
  },
];

export function Identity() {
  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal direction="up">
          <div className={styles.headerGroup}>
            <span className={styles.subtitle}>NOVA DIMENSÃO ENGENHARIA</span>
            <h2 className={styles.title}>Nossa identidade Institucional</h2>
          </div>
        </ScrollReveal>

        <div className={styles.cardsGrid}>
          {identityItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.contentGroup}>
                  <img src={item.icon} alt={item.title} className={styles.icon} loading="lazy" />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
