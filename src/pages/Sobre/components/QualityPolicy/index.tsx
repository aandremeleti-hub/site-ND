import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './QualityPolicy.module.css';

import illustrationQualidade from '../../../../assets/illustrationQualidade.webp';

const leftItems = [
  {
    id: 1,
    title: '01 ESCOPO ANTES DO PREÇO',
    desc: 'Nenhuma obra começa sem escopo, projeto e orçamento fechados por escrito. Alteração só com ordem de mudança aprovada antes da execução.'
  },
  {
    id: 2,
    title: '02 UM RELATÓRIO SÓ',
    desc: 'Cliente e arquiteto recebem o mesmo documento de andamento físico, técnico e financeiro.'
  },
  {
    id: 3,
    title: '03 PRAZO E CUSTO MEDIDOS, NÃO ESTIMADOS',
    desc: 'Cronograma e orçamento com linha de base; desvio apurado e reportado ao longo da obra.'
  }
];

const rightItems = [
  {
    id: 4,
    title: '04 TODOS OS ENVOLVIDOS, MAPEADOS',
    desc: 'Condomínio, vizinhos, arquiteto, fornecedores e equipes: cada um com interlocução e plano de comunicação definidos antes do início da obra.'
  },
  {
    id: 5,
    title: '05 MELHORIA CONTÍNUA',
    desc: 'Assegurar a excelência da empresa através da melhoria contínua do Sistema de Gestão de qualidade.'
  },
  {
    id: 6,
    title: '06 ENTREGA DOCUMENTADA',
    desc: 'Manual do proprietário, garantias, as built e plano de manutenção na entrega das chaves.'
  }
];

export function QualityPolicy() {
  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal direction="up">
          <div className={styles.headerGroup}>
            <span className={styles.subtitle}>Qualidade</span>
            <h2 className={styles.title}>Política de Qualidade</h2>
          </div>
        </ScrollReveal>

        <div className={styles.gridContainer}>
          {/* Coluna Esquerda */}
          <div className={styles.leftColumn}>
            {leftItems.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delay={index * 150}>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Coluna Central */}
          <div className={styles.centerColumn}>
            <ScrollReveal direction="up" delay={200}>
              <img src={illustrationQualidade} alt="Política de Qualidade" className={styles.image} loading="lazy" />
            </ScrollReveal>
          </div>

          {/* Coluna Direita */}
          <div className={styles.rightColumn}>
            {rightItems.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delay={(index + 3) * 150}>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
