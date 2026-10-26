import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { ProjectModal, type IProjectModalData } from '../../../../components/ui/ProjectModal';
import { PROJECTS_DATA, type IProjectItem } from '../../data/projectsData';
import styles from './ProjectsHero.module.css';

/**
 * Maps each project to its appropriate grid layout variant to achieve
 * an elegant, balanced Bento grid with harmonic vertical & horizontal rhythm.
 */
function getCardVariantClass(project: IProjectItem): string {
  // Panoramic feature card for the grand finale (spans all columns)
  if (project.id === 13) {
    return styles.cardFull;
  }
  // Wide feature cards for prominent architectural works (spans 2 columns)
  if (project.id === 1 || project.id === 5) {
    return styles.cardWide;
  }
  // Tall vertical cards (spans 2 rows)
  if (project.orientation === 'vertical') {
    return styles.cardTall;
  }
  // Standard horizontal card (1 col x 1 row)
  return styles.cardStandard;
}

export function ProjectsHero() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<IProjectModalData | null>(null);

  return (
    <section className={styles.section} aria-label="Portfólio de Obras e Projetos">
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>NOVA DIMENSÃO ENGENHARIA</span>
            <h1 className={styles.title}>Nossos Projetos</h1>
            <p className={styles.headerSubtitle}>
              Seleção exclusiva de obras residenciais de alto padrão e intervenções arquitetônicas
              executadas com rigor de engenharia, sofisticação e pontualidade.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.bentoGrid}>
          {PROJECTS_DATA.map((project, index) => {
            const variantClass = getCardVariantClass(project);
            const cardClasses = `${styles.card} ${variantClass} ${project.className || ''}`.trim();
            // Stagger animation delays smoothly across visible blocks
            const staggerDelay = (index % 4) * 80;

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={staggerDelay}
                className={cardClasses}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={`Perspectiva visual do projeto ${project.title} - Nova Dimensão`}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.overlay} />

                <div className={styles.cardContent}>
                  {project.badge && (
                    <span className={styles.cardBadge}>{project.badge}</span>
                  )}
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaArea}>
                        {project.specs.builtArea || project.specs.areaConstruida}
                      </span>
                      <span className={styles.metaDot} aria-hidden="true">•</span>
                      <span className={styles.metaLocation}>
                        {project.specs.location || project.specs.localizacao}
                      </span>
                    </div>
                    <span className={styles.viewAction} aria-hidden="true">
                      Ver obra
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.cardHitbox}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Ver detalhes completos do projeto ${project.title}`}
                />
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={200} className={styles.buttonWrapper}>
          <Button onClick={() => navigate('/contato')}>
            Acompanhar nossos projetos
          </Button>
        </ScrollReveal>
      </Container>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
