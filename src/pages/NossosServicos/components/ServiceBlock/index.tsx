import { useNavigate } from 'react-router-dom';
import styles from './ServiceBlock.module.css';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';

interface ServiceBlockProps {
  title: string;
  spanText: string;
  paragraphs: string[];
  buttonText?: string;
  imageSrc: string;
  imageAlt: string;
  theme: 'dark' | 'dark-alt' | 'light';
  reverse?: boolean;
}

export function ServiceBlock({
  title,
  spanText,
  paragraphs,
  buttonText,
  imageSrc,
  imageAlt,
  theme,
  reverse = false,
}: ServiceBlockProps) {
  const navigate = useNavigate();

  const themeClass =
    theme === 'dark' ? styles.themeDark :
      theme === 'dark-alt' ? styles.themeDarkAlt :
        styles.themeLight;

  return (
    <section className={`${styles.section} ${themeClass}`}>
      <Container>
        <div className={styles.grid}>

          <div className={styles.imageColumn} style={{ order: reverse ? 2 : 1 }}>
            <ScrollReveal direction="up">
              <img src={imageSrc} alt={imageAlt} className={styles.image} loading="lazy" />
            </ScrollReveal>
          </div>

          <div className={styles.contentColumn} style={{ order: reverse ? 1 : 2 }}>
            <ScrollReveal direction="up">
              <span className={styles.spanText}>{spanText}</span>
              <h2 className={styles.title}>{title}</h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className={styles.paragraphs}>
                {paragraphs.map((text, idx) => (
                  <p key={idx} className={styles.paragraph}>{text}</p>
                ))}
              </div>
            </ScrollReveal>

            {buttonText && (
              <ScrollReveal direction="up" delay={200} className={styles.buttonWrapper}>
                <Button onClick={() => navigate('/contato')}>
                  {buttonText}
                </Button>
              </ScrollReveal>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
