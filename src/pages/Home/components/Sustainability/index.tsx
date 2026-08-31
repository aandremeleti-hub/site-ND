import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Sustainability.module.css';

import detailsNovaDimensao from '../../../../assets/detailsNovaDimensao.svg';
import illustrationSustentavel from '../../../../assets/illustrationSustentavel.svg';

export function Sustainability() {
  return (
    <section className={styles.section}>
      {/* Detalhes Dourados no Background */}
      <img src={detailsNovaDimensao} alt="" className={styles.detailLeft} aria-hidden="true" loading="lazy" />
      <img src={detailsNovaDimensao} alt="" className={styles.detailRight} aria-hidden="true" loading="lazy" />

      <Container>
        <div className={styles.gridContainer}>
          {/* COLUNA ESQUERDA: Imagem com Badge */}
          <div className={styles.leftColumn}>
            <ScrollReveal direction="up">
              <img 
                src={illustrationSustentavel} 
                alt="Construção Sustentável - Certificação Green Building Council Brasil" 
                className={styles.illustration} 
                loading="lazy"
              />
            </ScrollReveal>
          </div>

          {/* COLUNA DIREITA: Textos e Botão */}
          <ScrollReveal direction="up" delay={100} className={styles.rightColumn}>
            <h2 className={styles.title}>Construção Sustentável</h2>

            <p className={styles.paragraph}>
              Como membro do Green Building Council Brasil, a empresa reforça seu compromisso com práticas construtivas mais responsáveis e sustentáveis.
            </p>

            <p className={styles.paragraph}>
              Construções com certificação Green Building Council promovem eficiência energética, uso consciente da água e melhor qualidade dos ambientes internos, reduzindo impactos ambientais e custos operacionais.
            </p>

            <button className={styles.button}>
              Vamos Conversar
            </button>
            </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
