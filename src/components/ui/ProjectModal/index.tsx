import { useState, useEffect, type ReactElement } from 'react';
import styles from './ProjectModal.module.css';
import {
  RulerIcon, BuildingIcon, CalendarClockIcon,
  CalendarCheckIcon, LocationPinIcon, HardhatIcon, CloseIcon,
} from './ProjectModalIcons';

export interface IProjectSpecs {
  builtArea: string;
  workType: string;
  executionPeriod: string;
  completionYear: string;
  location: string;
  executionRegime: string;
  areaConstruida?: string;
  tipoObra?: string;
  prazoExecucao?: string;
  anoConclusao?: string;
  localizacao?: string;
  regimeExecucao?: string;
}

export interface IProjectModalData {
  id: number;
  badge?: string;
  title: string;
  description: string;
  images: string[];
  specs: IProjectSpecs;
}

export interface IProjectModalProps {
  isOpen: boolean;
  project: IProjectModalData | null;
  onClose: () => void;
}

export type { IProjectSpecs as ProjectSpecs, IProjectModalData as ProjectModalData, IProjectModalProps as ProjectModalProps };

interface ISpecItem {
  id: string;
  label: string;
  getValue: (s: IProjectSpecs) => string;
  icon: () => ReactElement;
}

const SPECS_CONFIG: ISpecItem[] = [
  { id: 'builtArea', label: 'Área Construída', getValue: (s) => s.builtArea || s.areaConstruida || '', icon: RulerIcon },
  { id: 'workType', label: 'Tipo de Obra', getValue: (s) => s.workType || s.tipoObra || '', icon: BuildingIcon },
  { id: 'executionPeriod', label: 'Prazo de Execução', getValue: (s) => s.executionPeriod || s.prazoExecucao || '', icon: CalendarClockIcon },
  { id: 'completionYear', label: 'Ano de Conclusão', getValue: (s) => s.completionYear || s.anoConclusao || '', icon: CalendarCheckIcon },
  { id: 'location', label: 'Localização', getValue: (s) => s.location || s.localizacao || '', icon: LocationPinIcon },
  { id: 'executionRegime', label: 'Regime de Execução', getValue: (s) => s.executionRegime || s.regimeExecucao || '', icon: HardhatIcon },
];

function ProjectModalContent({ project, onClose }: { project: IProjectModalData; onClose: () => void }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && project.images?.length > 1) setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
      else if (e.key === 'ArrowLeft' && project.images?.length > 1) setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project.images]);

  const currentImage = project.images[selectedImageIndex] || project.images[0];
  const totalImages = project.images ? project.images.length : 0;

  return (
    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
        <CloseIcon />
      </button>

      <div className={styles.contentGrid}>
        <div className={styles.galleryColumn}>
          <div className={styles.mainImageWrapper}>
            <img src={currentImage} alt={`Perspectiva visual ${selectedImageIndex + 1} de ${project.title} - Nova Dimensão`} className={styles.mainImage} loading="lazy" />
            {totalImages > 1 && <span className={styles.imageCounter} aria-hidden="true">{selectedImageIndex + 1} / {totalImages}</span>}
          </div>

          {project.images?.length > 1 && (
            <div className={styles.thumbnailsRow} role="tablist" aria-label="Miniaturas do projeto">
              {project.images.slice(0, 4).map((img, index) => (
                <button
                  key={`${project.id}-thumb-${img}`}
                  type="button"
                  role="tab"
                  aria-selected={selectedImageIndex === index}
                  className={`${styles.thumbnailButton} ${selectedImageIndex === index ? styles.thumbnailActive : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Visualizar foto ${index + 1} de ${totalImages} do projeto ${project.title}`}
                >
                  <img src={img} alt={`Miniatura ${index + 1} de ${project.title}`} className={styles.thumbnailImage} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.infoColumn}>
          {project.badge && <span className={styles.badge}>{project.badge}</span>}
          <h2 id="modal-project-title" className={styles.title}>{project.title}</h2>
          <div className={styles.accentBar} />
          <p id="modal-project-desc" className={styles.description}>{project.description}</p>

          <div className={styles.specsGrid}>
            {SPECS_CONFIG.map(({ id, label, getValue, icon: IconComponent }) => (
              <div key={id} className={styles.specItem}>
                <div className={styles.specIconWrapper}><IconComponent /></div>
                <div className={styles.specTexts}>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specValue}>{getValue(project.specs)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ isOpen, project, onClose }: IProjectModalProps) {
  if (!isOpen || !project) return null;
  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title" aria-describedby="modal-project-desc">
      <ProjectModalContent key={project.id} project={project} onClose={onClose} />
    </div>
  );
}
