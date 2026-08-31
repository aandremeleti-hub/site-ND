import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './LocationMap.module.css';

export function LocationMap() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>LOCALIZAÇÃO</span>
            <h2 className={styles.title}>Nossa Localização</h2>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://maps.google.com/maps?q=Av.%20Nicolas%20Boer,%20399%20-%20Jardim%20das%20Perdizes,%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização da Nova Dimensão Engenharia"
            ></iframe>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
