import { useState, useEffect } from 'react';
import styles from './ProjectModal.module.css';

export interface ProjectSpecs {
  areaConstruida: string;
  tipoObra: string;
  prazoExecucao: string;
  anoConclusao: string;
  localizacao: string;
  regimeExecucao: string;
}

export interface ProjectModalData {
  id: number;
  badge?: string;
  title: string;
  description: string;
  images: string[];
  specs: ProjectSpecs;
}

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectModalData | null;
  onClose: () => void;
}

// Spec Icons matching the design spec
const RulerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0l-4.6-4.6c-.4-.4-.4-1 0-1.4L15.3 2.7c.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4z" />
    <path d="m14.5 4.5 1 1" />
    <path d="m11.5 7.5 2 2" />
    <path d="m8.5 10.5 1 1" />
    <path d="m5.5 13.5 2 2" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
  </svg>
);

const CalendarClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="18" cy="18" r="4" />
    <polyline points="18 16 18 18 19.5 19.5" />
  </svg>
);

const CalendarCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HardhatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 15V6a2 2 0 0 1 4 0v9" />
    <path d="M4 15a8 8 0 0 1 16 0" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset selected image when project changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [project?.id]);

  // Handle body scroll locking and Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const currentImage = project.images[selectedImageIndex] || project.images[0];

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <CloseIcon />
        </button>

        <div className={styles.contentGrid}>
          {/* Galeria de Fotos (Esquerda) */}
          <div className={styles.galleryColumn}>
            <div className={styles.mainImageWrapper}>
              <img
                src={currentImage}
                alt={project.title}
                className={styles.mainImage}
              />
            </div>

            {project.images && project.images.length > 1 && (
              <div className={styles.thumbnailsRow}>
                {project.images.slice(0, 4).map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.thumbnailButton} ${
                      selectedImageIndex === index ? styles.thumbnailActive : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`Visualizar foto ${index + 1} de ${project.title}`}
                  >
                    <img
                      src={img}
                      alt=""
                      aria-hidden="true"
                      className={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações da Obra (Direita) */}
          <div className={styles.infoColumn}>
            {project.badge && (
              <span className={styles.badge}>{project.badge}</span>
            )}

            <h2 id="modal-project-title" className={styles.title}>
              {project.title}
            </h2>

            <div className={styles.accentBar} />

            <p className={styles.description}>{project.description}</p>

            {/* Informações da obra em grid 2 colunas */}
            <div className={styles.specsGrid}>
              {/* Área Construída */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <RulerIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Área Construída</span>
                  <span className={styles.specValue}>
                    {project.specs.areaConstruida}
                  </span>
                </div>
              </div>

              {/* Tipo de Obra */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <BuildingIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Tipo de Obra</span>
                  <span className={styles.specValue}>
                    {project.specs.tipoObra}
                  </span>
                </div>
              </div>

              {/* Prazo de Execução */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <CalendarClockIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Prazo de Execução</span>
                  <span className={styles.specValue}>
                    {project.specs.prazoExecucao}
                  </span>
                </div>
              </div>

              {/* Ano de Conclusão */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <CalendarCheckIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Ano de Conclusão</span>
                  <span className={styles.specValue}>
                    {project.specs.anoConclusao}
                  </span>
                </div>
              </div>

              {/* Localização */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <LocationPinIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Localização</span>
                  <span className={styles.specValue}>
                    {project.specs.localizacao}
                  </span>
                </div>
              </div>

              {/* Regime de Execução */}
              <div className={styles.specItem}>
                <div className={styles.specIconWrapper}>
                  <HardhatIcon />
                </div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>Regime de Execução</span>
                  <span className={styles.specValue}>
                    {project.specs.regimeExecucao}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
