import { useRef } from 'react';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { useCountUp } from '../../../../hooks/useCountUp';
import styles from './AboutCEO.module.css';

import illustrationLuiz from '../../../../assets/illustrationLuiz.svg';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
}

function StatItem({ target, suffix = '', label }: StatItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(target, 2500, itemRef);

  return (
    <div className={styles.statItem} ref={itemRef}>
      <span className={styles.statNumber}>+{count.toLocaleString('pt-BR')}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function AboutCEO() {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.gridContainer}>
          {/* Coluna Esquerda: Imagem */}
          <div className={styles.imageColumn}>
            <ScrollReveal direction="up">
              <img src={illustrationLuiz} alt="Luiz Fernando A. Lahr - CEO da Nova Dimensão Engenharia" className={styles.image} loading="lazy" />
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Textos e Stats */}
          <ScrollReveal direction="up" delay={100} className={styles.textColumn}>
            <div className={styles.headerGroup}>
              <span className={styles.subtitle}>Quem conduz nossa engenharia</span>
              <h2 className={styles.title}>Luiz Fernando A. Lahr</h2>
            </div>

            <div className={styles.paragraphsGroup}>
              <p className={styles.paragraph}>
                Luiz Fernando A. Lahr é Engenheiro Civil formado pela Pontifícia Universidade Católica de São Paulo (PUC-SP), CEO da Nova Dimensão Engenharia e Construtora e especialista em gestão de obras residenciais de alto padrão e projetos corporativos. Possui especializações pela USP, FGV e FIA, além de ser membro do Project Management Institute (PMI).
              </p>

              <p className={styles.paragraph}>
                Sua atuação integra conhecimento técnico, gestão estratégica e planejamento para garantir controle de custos, prazos e qualidade. Com metodologia própria baseada em processos, transparência e acompanhamento contínuo, conduz projetos com foco em segurança, organização, previsibilidade e excelência na execução.
              </p>
            </div>

            <div className={styles.statsGroup}>
              <StatItem target={30000} suffix="m²" label="CONSTRUÍDOS/REFORMADOS" />
              <StatItem target={100} label="CLIENTES ATENDIDOS" />
              <StatItem target={10} suffix=" anos" label="ATUANDO NO MERCADO" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
