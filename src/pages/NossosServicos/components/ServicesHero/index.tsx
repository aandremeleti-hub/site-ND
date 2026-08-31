import styles from './ServicesHero.module.css';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';

// Import Icons
import iconPlanejamento from '../../../../assets/iconPlanejamento.svg';
import iconData from '../../../../assets/iconData.svg';
import iconDinheiro from '../../../../assets/iconDinheiro.svg';
import iconMateriaisQualidade from '../../../../assets/iconMateriaisQualidade.svg';
import iconEquipe from '../../../../assets/iconEquipe.svg';
import iconObraSegura from '../../../../assets/iconObraSegura.svg';

const cards = [
  {
    id: 1,
    icon: iconPlanejamento,
    title: 'Planejamento Preciso',
    description: 'Planejamos e revisamos cada projeto com atenção aos detalhes, garantindo maior precisão e redução de erros na execução.',
    requiresBlueFilter: true,
  },
  {
    id: 2,
    icon: iconData,
    title: 'Cumprimento de Prazos',
    description: 'Trabalhamos com gestão eficiente e cronogramas estruturados, assegurando cumprimento dos prazos da obra.',
  },
  {
    id: 3,
    icon: iconDinheiro,
    title: 'Controle de Custos',
    description: 'Atuamos com planejamento detalhado e experiência técnica para evitar custos inesperados e desperdícios.',
  },
  {
    id: 4,
    icon: iconMateriaisQualidade,
    title: 'Materiais de Qualidade',
    description: 'Selecionamos os melhores materiais com base em conhecimento técnico atualizado, garantindo qualidade.',
  },
  {
    id: 5,
    icon: iconEquipe,
    title: 'Equipe Experiente',
    description: 'Contamos com uma equipe fixa e experiente, assegurando consistência, eficiência e qualidade.',
  },
  {
    id: 6,
    icon: iconObraSegura,
    title: 'Segurança na Obra',
    description: 'Aplicamos práticas de segurança e organização no canteiro, garantindo um ambiente de trabalho seguro e eficiente.',
  },
];

function formatTitle(title: string) {
  const words = title.split(' ');
  const firstWord = words[0];
  const rest = words.slice(1).join(' ');
  return (
    <>
      {firstWord}
      {rest && <br />}
      {rest}
    </>
  );
}

export function ServicesHero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>NOVA DIMENSÃO ENGENHARIA</span>
            <h1 className={styles.title}>Porque contratar a gente</h1>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <ScrollReveal
              key={card.id}
              direction="up"
              delay={index * 100}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className={`${styles.icon} ${card.requiresBlueFilter ? styles.iconBlue : ''}`} 
                    loading="lazy" 
                  />
                  <h3 className={styles.cardTitle}>{formatTitle(card.title)}</h3>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
