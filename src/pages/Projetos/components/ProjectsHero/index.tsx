import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { ProjectModal, type ProjectModalData } from '../../../../components/ui/ProjectModal';
import styles from './ProjectsHero.module.css';

// ----- Projeto 1: RPJ (Residência Pico do Jaraguá)
import rpj_01 from '../../../../assets/projetos/rpj-01.webp';
import rpj_02 from '../../../../assets/projetos/rpj-02.webp';
import rpj_03 from '../../../../assets/projetos/rpj-03.webp';
import rpj_04 from '../../../../assets/projetos/rpj-04.webp';

// ----- Projeto 2: MJP (Residência Jardim Paulistano)
import mjp_01 from '../../../../assets/projetos/mjp-01.webp';
import mjp_02 from '../../../../assets/projetos/mjp-02.webp';
import mjp_03 from '../../../../assets/projetos/mjp-03.webp';
import mjp_04 from '../../../../assets/projetos/mjp-04.webp';

// ----- Projeto 3: CMG (Residência Jardim Paulistano)
import cmg_01 from '../../../../assets/projetos/cmg-01.webp';
import cmg_02 from '../../../../assets/projetos/cmg-02.webp';
import cmg_03 from '../../../../assets/projetos/cmg-03.webp';
import cmg_04 from '../../../../assets/projetos/cmg-04.webp';

// ----- Projeto 4: AMP (Residência Perdizes)
import amp_01 from '../../../../assets/projetos/amp-01.webp';
import amp_02 from '../../../../assets/projetos/amp-02.webp';
import amp_03 from '../../../../assets/projetos/amp-03.webp';
import amp_04 from '../../../../assets/projetos/amp-04.webp';

// ----- Projeto 5: RVM (Residência Jardim Paulistano)
import rvm_01 from '../../../../assets/projetos/rvm-01.webp';
import rvm_02 from '../../../../assets/projetos/rvm-02.webp';
import rvm_03 from '../../../../assets/projetos/rvm-03.webp';
import rvm_04 from '../../../../assets/projetos/rvm-04.webp';

interface ProjectItem extends ProjectModalData {
  image: string;
  className: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    badge: 'Construção Residencial',
    title: 'RPJ',
    description: 'Construção residencial unifamiliar contemporânea com integração de volumes, acabamento refinado e rigoroso controle estrutural no Pico do Jaraguá.',
    image: rpj_01,
    images: [rpj_01, rpj_02, rpj_03, rpj_04],
    specs: {
      areaConstruida: '450m²',
      tipoObra: 'Construção Residencial',
      prazoExecucao: '17 meses',
      anoConclusao: '2021',
      localizacao: 'Pico do Jaraguá, São Paulo',
      regimeExecucao: 'Empreitada Global'
    },
    className: styles.card1
  },
  {
    id: 2,
    badge: 'Construção Residencial',
    title: 'MJP',
    description: 'Gerenciamento executivo e acompanhamento estrutural completo de residência de alto padrão com controle de custos e cronograma em linha de base.',
    image: mjp_01,
    images: [mjp_01, mjp_02, mjp_03, mjp_04],
    specs: {
      areaConstruida: '520m²',
      tipoObra: 'Construção Residencial',
      prazoExecucao: '18 meses',
      anoConclusao: '2023',
      localizacao: 'Jardim Paulistano, São Paulo',
      regimeExecucao: 'Administração de Obras'
    },
    className: styles.card2
  },
  {
    id: 3,
    badge: 'Reforma Residencial',
    title: 'CMG',
    description: 'Reforma e modernização de residência de alto padrão com detalhamento executivo, marcenaria nobre e integração completa de instalações.',
    image: cmg_01,
    images: [cmg_01, cmg_02, cmg_03, cmg_04],
    specs: {
      areaConstruida: '500m²',
      tipoObra: 'Reforma Residencial',
      prazoExecucao: '7 meses',
      anoConclusao: '2023',
      localizacao: 'Jardim Paulistano, São Paulo',
      regimeExecucao: 'Administração de Obras'
    },
    className: styles.card3
  },
  {
    id: 4,
    badge: 'Reforma Residencial',
    title: 'AMP',
    description: 'Reforma integral de apartamento residencial em Perdizes, compatibilização de infraestrutura predial e acabamentos contemporâneos.',
    image: amp_01,
    images: [amp_01, amp_02, amp_03, amp_04],
    specs: {
      areaConstruida: '420m²',
      tipoObra: 'Reforma Residencial',
      prazoExecucao: '3 meses',
      anoConclusao: '2022',
      localizacao: 'Perdizes, São Paulo',
      regimeExecucao: 'Empreitada Global'
    },
    className: styles.card4
  },
  {
    id: 5,
    badge: 'Construção Residencial',
    title: 'RVM',
    description: 'Residência unifamiliar de grande porte com estrutura mista, caixilharia especial e alto padrão de acabamento executivo.',
    image: rvm_01,
    images: [rvm_01, rvm_02, rvm_03, rvm_04],
    specs: {
      areaConstruida: '2000m²',
      tipoObra: 'Construção Residencial',
      prazoExecucao: '24 meses',
      anoConclusao: '2025',
      localizacao: 'Jardim Paulistano, São Paulo',
      regimeExecucao: 'Empreitada Global'
    },
    className: styles.card5
  },
];

export function ProjectsHero() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerGroup}>
          <ScrollReveal direction="up">
            <span className={styles.spanText}>NOVA DIMENSÃO ENGENHARIA</span>
            <h1 className={styles.title}>Nossos Projetos</h1>
          </ScrollReveal>
        </div>

        <div className={styles.bentoGrid}>
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={index * 100}
              className={`${styles.card} ${project.className}`}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className={styles.cardImage} loading="lazy" />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400} className={styles.buttonWrapper}>
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
