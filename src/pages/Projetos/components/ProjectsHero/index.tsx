import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './ProjectsHero.module.css';

import img1 from '../../../../assets/illustrationBast01.svg';
import img2 from '../../../../assets/illustrationBast02.svg';
import img3 from '../../../../assets/illustrationBast03.svg';
import img4 from '../../../../assets/illustrationBast04.svg';

const projects = [
  {
    id: 1,
    title: 'Apartamento AMP',
    description: 'Exclusive modern estate featuring bespoke materials and open-plan structural design.',
    image: img1,
    className: styles.card1
  },
  {
    id: 2,
    title: 'Residência',
    description: 'Exclusive modern estate featuring bespoke materials and open-plan structural design.',
    image: img2,
    className: styles.card2
  },
  {
    id: 3,
    title: 'Obras Mara',
    description: 'Exclusive modern estate featuring bespoke materials and open-plan structural design.',
    image: img3,
    className: styles.card3
  },
  {
    id: 4,
    title: 'Residência',
    description: 'Exclusive modern estate featuring bespoke materials and open-plan structural design.',
    image: img4,
    className: styles.card4
  },
  {
    id: 5,
    title: 'Nova Sede',
    description: 'Exclusive modern estate featuring bespoke materials and open-plan structural design.',
    image: img1,
    className: styles.card5
  }
];

export function ProjectsHero() {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>NOVA DIMENSÃO ENGENHARIA</span>
            <h1 className={styles.title}>Nossos Projetos</h1>
          </ScrollReveal>
        </div>

        <div className={styles.bentoGrid}>
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={index * 100}
              className={`${styles.card} ${project.className}`}
            >
              <img src={project.image} alt={project.title} className={styles.cardImage} loading="lazy" />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400} className={styles.buttonWrapper}>
          <Button onClick={() => navigate('/contato')}>
            Acompanhar nossos projetos
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
