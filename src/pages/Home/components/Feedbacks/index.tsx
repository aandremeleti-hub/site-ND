import { useState } from 'react';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Feedbacks.module.css';

import destaqueProjeto2 from '../../../../assets/destaque_projeto2.webp';
import feedbackRpj from '../../../../assets/feedback_rpj.webp';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const feedbacks = [
  {
    id: 1,
    monogram: "RPJ",
    paragraphs: [
      "A gestão técnica e o acompanhamento diário da Nova Dimensão foram decisivos para a entrega da nossa casa rigorosamente dentro do prazo e do orçamento previstos.",
      "O rigor com o projeto e a clareza dos relatórios semanais nos deram total previsibilidade durante toda a obra."
    ],
    authorName: "Proprietário - Residência RPJ",
    authorRole: "Construção Residencial | Pico do Jaraguá",
    projectImage: feedbackRpj,
    projectAlt: "Residência RPJ - Obra executada pela Nova Dimensão Engenharia",
  },
  {
    id: 2,
    monogram: "CMG",
    paragraphs: [
      "A compatibilização prévia de todos os projetos complementares evitou retrabalhos e custos imprevistos na reforma.",
      "Profissionalismo impecável da equipe de engenharia do início ao fim."
    ],
    authorName: "Proprietário - Residência CMG",
    authorRole: "Reforma Residencial | Jardim Paulistano",
    projectImage: destaqueProjeto2,
    projectAlt: "Residência CMG - Reforma executada pela Nova Dimensão Engenharia",
  }
];

export function Feedbacks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [key, setKey] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedbacks.length);
    setKey(prev => prev + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    setKey(prev => prev + 1);
  };

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const currentFeedback = feedbacks[activeIndex];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.gridContainer}>

          {/* COLUNA ESQUERDA: Texto e Controles */}
          <div className={styles.leftColumn}>
            <ScrollReveal direction="up">
              <div className={styles.headerGroup}>
                <span className={styles.subtitle}>FEEDBACKS</span>
                <h2 className={styles.title}>O que nossos clientes estão dizendo sobre nós</h2>
              </div>
            </ScrollReveal>

            {/* Conteúdo dinâmico com key para animar na troca */}
            <ScrollReveal direction="up" delay={100}>
              <div key={key} className={`${styles.feedbackContent} ${styles.fadeEnter}`}>
                <div className={styles.quoteWrapper}>
                  {currentFeedback.paragraphs.map((text, index) => (
                    <p key={index} className={styles.quoteText}>{text}</p>
                  ))}
                </div>

                <div className={styles.authorBox}>
                  <div className={styles.monogramBadge} aria-label={`Selo monograma ${currentFeedback.monogram}`}>
                    {currentFeedback.monogram}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{currentFeedback.authorName}</span>
                    <span className={styles.authorRole}>{currentFeedback.authorRole}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* COLUNA DIREITA: Imagem do Projeto e Controles */}
          <div className={styles.rightColumn}>
            <ScrollReveal direction="up" delay={200}>
              <div key={key} className={`${styles.imageFrame} ${styles.fadeEnter}`} onClick={() => openModal(currentFeedback.projectImage)}>
                <img src={currentFeedback.projectImage} alt={currentFeedback.projectAlt} className={styles.projectImage} loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CONTROLES INFERIORES (SETAS) */}
        <div className={styles.pagination}>
          <div className={styles.controlsBox}>
            <button className={styles.controlButton} onClick={handlePrev} aria-label="Feedback anterior">
              <ArrowLeft />
            </button>
            <button className={`${styles.controlButton} ${styles.controlButtonPrimary}`} onClick={handleNext} aria-label="Próximo feedback">
              <ArrowRight />
            </button>
          </div>
        </div>
      </Container>

      {/* MODAL / LIGHTBOX */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <button className={styles.closeModal} onClick={() => setIsModalOpen(false)}>✕</button>
          <img
            src={modalImage}
            className={styles.modalImage}
            alt="Projeto em destaque"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
