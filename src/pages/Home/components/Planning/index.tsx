import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Planning.module.css';

export function Planning() {
  const cards = [
    {
      title: 'PREVISIBILIDADE',
      description: 'Existe uma janela em que todo risco ainda é reversível. Trabalhamos dentro dela: levantamos as condições ocultas antes da demolição e acompanhamos as respostas até a entrega.',
    },
    {
      title: 'Gestão',
      description: 'Controle rigoroso de recursos e fornecedores, assegurando a integridade do projeto original e a consistência das decisões ao longo de toda a execução.',
    },
    {
      title: 'Comunicação',
      description: 'Relatórios periódicos, prestação de contas transparente e canal direto com o responsável técnico. Você decide com informação na mão, no tempo certo de decidir.',
    },
    {
      title: 'CONFORMIDADE',
      description: 'Há um responsável técnico com nome e registro por trás de cada decisão da sua obra. Verificação em campo, ART emitida, conformidade documentada e assinada.',
    },
  ];

  return (
    <section className={styles.planningSection}>
      <ScrollReveal>
        <Container>
          <div className={styles.gridContainer}>
            {/* Coluna Esquerda */}
            <div className={styles.leftColumn}>
              <h2 className={styles.title}>A excelência nasce no planejamento.</h2>
              <p className={styles.description}>
                Rejeitamos o caos da construção convencional.
                Nossa abordagem é baseada no rigor técnico e na clareza absoluta de processos.
              </p>
            </div>

            {/* Divisória Central sutil feita por CSS no .rightColumn */}

            {/* Coluna Direita (Grid 2x2) */}
            <div className={styles.rightColumn}>
              <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
