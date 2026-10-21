import { Link } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Projects.module.css';

import iconCheck from '../../../../assets/iconCheck.svg';
import destaqueProjeto1 from '../../../../assets/destaque_projeto1.webp';
import destaqueProjeto2 from '../../../../assets/destaque_projeto2.webp';

const benefits = [
  'Compromisso com prazos e eficiência',
  'Soluções seguras e alinhadas às normas técnicas',
  'Projetos executados com qualidade e precisão'
];

export function Projects() {
  return (
    <section className={styles.projectsSection}>
      <Container>
        <div className={styles.gridContainer}>
          {/* Coluna Esquerda: Textos */}
          <ScrollReveal direction="up" className={styles.leftColumn}>
            <span className={styles.subtitle}>Entregas</span>
            <h2 className={styles.title}>Nossos projetos</h2>
            <p className={styles.description}>
              Conheça alguns dos projetos desenvolvidos pela Nova Dimensão Engenharia, com foco em qualidade, eficiência e atenção aos detalhes em cada etapa da execução.
            </p>

            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <img src={iconCheck} alt="" aria-hidden="true" className={styles.checkIcon} loading="lazy" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/projetos" className={styles.button}>
              Explore Nossos Projetos
            </Link>
          </ScrollReveal>

          {/* Coluna Direita: Imagens */}
          <div className={styles.rightColumn}>
            <ScrollReveal direction="up" delay={200}>
              <div className={styles.imageGrid}>
                <div className={styles.largeImageWrapper}>
                  <img src={destaqueProjeto1} alt="Residência RPJ - Fachada contemporânea e integração de volumes" className={styles.projectImage} loading="lazy" />
                </div>
                <div className={styles.smallImagesWrapper}>
                  <div className={styles.smallImageWrapper}>
                    <img src={destaqueProjeto2} alt="Residência CMG - Detalhamento contemporâneo de reforma de alto padrão" className={styles.projectImage} loading="lazy" />
                  </div>
                  <div className={styles.statsCard}>
                    <span className={styles.statsNumber}>+30</span>
                    <span className={styles.statsText}>Obras Entregues</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
