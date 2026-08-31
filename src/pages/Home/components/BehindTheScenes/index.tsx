import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './BehindTheScenes.module.css';

import illustrationBast01 from '../../../../assets/illustrationBast01.svg';
import illustrationBast02 from '../../../../assets/illustrationBast02.svg';
import illustrationBast03 from '../../../../assets/illustrationBast03.svg';
import illustrationBast04 from '../../../../assets/illustrationBast04.svg';

import iconCelular from '../../../../assets/iconCelular.svg';
import iconList from '../../../../assets/iconList.svg';
import iconCheckOutline from '../../../../assets/iconCheckOutline.svg';

const features = [
  {
    icon: iconCelular,
    title: 'RELATÓRIOS PERIÓDICOS',
    desc: 'Registros fotográficos e status do que foi executado, direto no seu celular. Você acompanha a obra sem precisar estar nela.'
  },
  {
    icon: iconList,
    title: 'CHECKLISTS TÉCNICOS',
    desc: 'Zero improviso. Cada fase passa por uma verificação técnica antes de prosseguir.'
  },
  {
    icon: iconCheckOutline,
    title: 'MEDIÇÃO',
    desc: 'Avanço físico e financeiro medidos por etapa, com prestação de contas apresentada a cada ciclo.'
  }
];

export function BehindTheScenes() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.gridContainer}>
          {/* Coluna de Imagens (Esquerda) */}
          <div className={styles.imagesColumn}>
            <ScrollReveal direction="up">
              <div className={styles.masonryCol}>
                <img src={illustrationBast01} alt="Estrutura de obra de alto padrão com detalhamento técnico" className={styles.imgTall} loading="lazy" />
                <img src={illustrationBast02} alt="Acompanhamento e nivelamento de piso na obra" className={styles.imgShort} loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className={styles.masonryCol}>
                <img src={illustrationBast03} alt="Profissional da engenharia inspecionando a qualidade" className={styles.imgShort} loading="lazy" />
                <img src={illustrationBast04} alt="Execução de armação e estrutura metálica" className={styles.imgTall} loading="lazy" />
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna de Texto (Direita) */}
          <div className={styles.textColumn}>
            <ScrollReveal direction="up" delay={100}>
              <span className={styles.subtitle}>Bastidores</span>
              <h2 className={styles.title}>Nossos Bastidores: A Engenharia em Detalhes</h2>
              <p className={styles.description}>
                O luxo de uma obra está no que fica oculto: o nivelamento perfeito, a impermeabilização impecável e o cronograma seguido à risca.
              </p>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <img src={feature.icon} alt="" aria-hidden="true" className={styles.featureIcon} loading="lazy" />
                    </div>
                    <div className={styles.featureText}>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDesc}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
