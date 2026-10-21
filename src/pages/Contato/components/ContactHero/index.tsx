import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './ContactHero.module.css';

import heroImg from '../../../../assets/fachada_nicolas_boer_399.webp';
import iconEndereco from '../../../../assets/iconEndereco.svg';
import iconEmail from '../../../../assets/iconEmail.svg';
import iconRelogio from '../../../../assets/iconRelogio.svg';

const contactInfos = [
  {
    id: 1,
    icon: iconEndereco,
    title: 'Endereço',
    description: 'Av. Nicolas Boer, 399 - 2º andar\nJardim das Perdizes\nSão Paulo SP'
  },
  {
    id: 2,
    icon: iconEmail,
    title: 'E-mail',
    description: 'Alguma dúvida?\nMande um e-mail pra gente:\ncontato@novadimensao.eng.br'
  },
  {
    id: 3,
    icon: iconRelogio,
    title: 'Horas',
    description: 'Conheça nossos horários:\nSegunda - Sexta 09:00 AM - 18:00 PM\nSábado 10:00 AM - 14:00 PM'
  }
];

export function ContactHero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>CONTATO</span>
            <h1 className={styles.title}>Fale Conosco</h1>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <ScrollReveal direction="up" delay={100}>
              <img
                src={heroImg}
                alt="Edifício TIME - Jardim das Perdizes"
                className={styles.heroImage}
                loading="lazy"
              />
              <span className={styles.imageCaption}>Edifício TIME - Jardim das Perdizes</span>
            </ScrollReveal>
          </div>

          <div className={styles.cardsWrapper}>
            {contactInfos.map((info, index) => (
              <ScrollReveal
                key={info.id}
                direction="up"
                delay={200 + index * 100}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  <img src={info.icon} alt={info.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{info.title}</h3>
                  <p className={styles.cardDesc}>{info.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
