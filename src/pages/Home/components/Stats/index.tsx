import { useCountUp } from '../../../../hooks/useCountUp';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Stats.module.css';

export function Stats() {
  const projetos = useCountUp(200, 2500);
  const satisfacao = useCountUp(98, 2500);
  const cidades = useCountUp(10, 2000);

  return (
    <section className={styles.statsSection}>
      <h2 className={styles.srOnly}>Estatísticas de Obras e Clientes</h2>
      <ScrollReveal>
        <Container>
          <div className={styles.grid}>
            <div className={styles.statItem}>
              <span className={styles.number}>+{projetos}</span>
              <span className={styles.label}>Projetos Realizados</span>
            </div>
            <div className={styles.statItem}>
              <span className={`${styles.number} ${styles.primaryColor}`}>{satisfacao}%</span>
              <span className={styles.label}>Clientes Satisfeitos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.number}>+{cidades}mil m²</span>
              <span className={styles.label}>Obras executadas</span>
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
