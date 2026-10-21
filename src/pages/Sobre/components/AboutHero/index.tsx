import { useRef } from 'react';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { useCountUp } from '../../../../hooks/useCountUp';
import styles from './AboutHero.module.css';

import illustrationSobre from '../../../../assets/illustrationSobre.webp';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  note?: string;
}

function StatItem({ target, suffix = '', label, note }: StatItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(target, 2500, itemRef);

  return (
    <div className={styles.statItem} ref={itemRef}>
      <span className={styles.statNumber}>+{count.toLocaleString('pt-BR')}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
      {note && <span className={styles.statNote}>{note}</span>}
    </div>
  );
}

export function AboutHero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.gridContainer}>
          {/* Coluna Esquerda: Imagem */}
          <div className={styles.imageColumn}>
            <ScrollReveal direction="up">
              <img src={illustrationSobre} alt="Construindo Histórias com Qualidade" className={styles.image} loading="eager" />
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Textos e Stats */}
          <ScrollReveal direction="up" delay={100} className={styles.textColumn}>
            <div className={styles.headerGroup}>
              <h1 className={styles.title}>Construindo Histórias com Qualidade</h1>
            </div>

            <div className={styles.paragraphsGroup}>
              <p className={styles.paragraph}>
                A Nova Dimensão Engenharia e Construtora é uma construtora com sede em São Paulo, que também atende o interior e o litoral do estado. Com uma equipe altamente especializada, atua em projetos de construção e reforma com foco em segurança, confiabilidade e boas práticas do mercado.
              </p>

              <p className={styles.paragraph}>
                Somos uma construtora de São Paulo especializada em reforma e construção residencial de alto padrão. Trabalhamos em apartamentos e casas onde o projeto é autoral.
                Conduzimos um número limitado de obras por vez. É a condição para que cada obra tenha equipe técnica dedicada e o responsável técnico presente em campo.
              </p>
            </div>

            <hr className={styles.separator} />

            <div className={styles.statsGroup}>
              <StatItem target={200} label="PROJETOS REALIZADOS" />
              <StatItem target={98} suffix="%" label="CLIENTES SATISFEITOS" note="* NPS avaliado nas últimas 23 obras" />
              <StatItem target={10} suffix="mil m²" label="OBRAS EXECUTADAS" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
