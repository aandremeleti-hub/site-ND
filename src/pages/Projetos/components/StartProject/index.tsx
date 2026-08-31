import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './StartProject.module.css';

import illustrationTirarDoPapel from '../../../../assets/illustrationTirarDoPapel.svg';

const steps = [
  {
    number: '1.',
    title: 'Fale com a gente',
    description: 'Entendemos sua necessidade e iniciamos o atendimento de forma personalizada.'
  },
  {
    number: '2.',
    title: 'Desenvolvemos seu projeto',
    description: 'Planejamos e estruturamos cada detalhe com foco em qualidade e eficiência.'
  },
  {
    number: '3.',
    title: 'Executamos a obra',
    description: 'Colocamos tudo em prática com acompanhamento técnico e total controle da execução.'
  }
];

export function StartProject() {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>

          <div className={styles.imageColumn}>
            <ScrollReveal direction="up">
              <img
                src={illustrationTirarDoPapel}
                alt="Vamos tirar seu projeto do papel"
                className={styles.image}
                loading="lazy"
              />
            </ScrollReveal>
          </div>

          <div className={styles.contentColumn}>
            <div className={styles.headerGroup}>
              <ScrollReveal direction="up">
                <span className={styles.spanText}>NOVA DIMENSÃO ENGENHARIA</span>
                <h2 className={styles.title}>Vamos tirar seu projeto do papel?</h2>
              </ScrollReveal>
            </div>

            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 100}
                >
                  <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>{step.number}</div>
                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDesc}>{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={300} className={styles.buttonWrapper}>
              <Button onClick={() => navigate('/contato')}>
                Solicitar Orçamento
              </Button>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
