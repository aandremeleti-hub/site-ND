import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { smoothScrollTo } from '../../../../utils/scroll';
import { openWhatsApp } from '../../../../utils/whatsapp';
import videoMain from '../../../../assets/video_main.mp4';
import styles from './Hero.module.css';

export function Hero() {
  const handleScrollToMethodology = () => {
    smoothScrollTo('metodologia', 1100, 80);
  };

  return (
    <section className={styles.heroSection}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src={videoMain} type="video/mp4" />
      </video>
      <div className={styles.overlay} />

      {/* Hero Content */}
      <div className={styles.contentWrapper}>
        <Container>
          <div className={styles.textContent}>
            <span className={styles.subtitle}>
              Nova dimensão engenharia e construtora
            </span>
            <h1 className={styles.title}>
              Construímos confiança
              <span className={styles.highlightBlock}>
                em cada etapa
              </span>
            </h1>
            <p className={styles.description}>
              Na Nova Dimensão Engenharia, acreditamos que uma obra de excelência começa muito antes da execução. Planejamento e gestão técnica não são fim — são o que transforma a intenção de cada cliente em resultado entregue no prazo, no custo e no padrão combinados.
            </p>
            <div className={styles.actions}>
              <Button variant="primary" onClick={handleScrollToMethodology}>
                Nossa Metodologia
              </Button>
              <Button variant="outline" onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre os serviços da Nova Dimensão Engenharia e Construtora.')}>Vamos Conversar</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
