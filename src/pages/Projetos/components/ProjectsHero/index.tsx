import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { ProjectModal, type ProjectModalData } from '../../../../components/ui/ProjectModal';
import styles from './ProjectsHero.module.css';

import img1 from '../../../../assets/illustrationBast01.svg';
import img2 from '../../../../assets/illustrationBast02.svg';
import img3 from '../../../../assets/illustrationBast03.svg';
import img4 from '../../../../assets/illustrationBast04.svg';

interface ProjectItem extends ProjectModalData {
  image: string;
  className: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    badge: 'PROJETO RESIDENCIAL',
    title: 'Apartamento AMP',
    description: 'Reforma completa de apartamento de alto padrão com integração de ambientes sociais, automação residencial e marcenaria sob medida.',
    image: img1,
    images: [img1, img2, img3, img4],
    specs: {
      areaConstruida: '320 m²',
      tipoObra: 'Reforma Residencial de Alto Padrão',
      prazoExecucao: '8 meses',
      anoConclusao: '2024',
      localizacao: 'Jardins, São Paulo - SP',
      regimeExecucao: 'Administração de obra'
    },
    className: styles.card1
  },
  {
    id: 2,
    badge: 'PROJETO RESIDENCIAL',
    title: 'Residência de Alto Padrão',
    description: 'Construção residencial de alto padrão executada com foco em qualidade, gestão eficiente e atenção aos detalhes. O projeto contemplou todas as etapas da obra, desde o planejamento até a entrega final.',
    image: img2,
    images: [img2, img1, img3, img4],
    specs: {
      areaConstruida: '450 m²',
      tipoObra: 'Residencial de alto padrão',
      prazoExecucao: '14 meses',
      anoConclusao: '2025',
      localizacao: 'Alphaville, São Paulo - SP',
      regimeExecucao: 'Empreitada global'
    },
    className: styles.card2
  },
  {
    id: 3,
    badge: 'GERENCIAMENTO DE OBRAS',
    title: 'Obras Mara',
    description: 'Gerenciamento técnico e execução estrutural completa para empreendimento corporativo com rigoroso controle de custos e cronograma.',
    image: img3,
    images: [img3, img4, img1, img2],
    specs: {
      areaConstruida: '1.200 m²',
      tipoObra: 'Edifício Corporativo',
      prazoExecucao: '18 meses',
      anoConclusao: '2025',
      localizacao: 'Itaim Bibi, São Paulo - SP',
      regimeExecucao: 'Gerenciamento e Fiscalização'
    },
    className: styles.card3
  },
  {
    id: 4,
    badge: 'PROJETO RESIDENCIAL',
    title: 'Residência Villa Magna',
    description: 'Construção unifamiliar contemporânea com estrutura mista, amplas esquadrias, integração com área externa e acabamentos nobres.',
    image: img4,
    images: [img4, img3, img2, img1],
    specs: {
      areaConstruida: '580 m²',
      tipoObra: 'Residencial de alto padrão',
      prazoExecucao: '16 meses',
      anoConclusao: '2024',
      localizacao: 'Campinas, São Paulo - SP',
      regimeExecucao: 'Empreitada global'
    },
    className: styles.card4
  },
  {
    id: 5,
    badge: 'OBRA COMERCIAL',
    title: 'Nova Sede Corporativa',
    description: 'Execução e retrofit de sede corporativa moderna com soluções acústicas avançadas, automação predial e layout flexível.',
    image: img1,
    images: [img1, img3, img4, img2],
    specs: {
      areaConstruida: '750 m²',
      tipoObra: 'Comercial e Corporativo',
      prazoExecucao: '10 meses',
      anoConclusao: '2025',
      localizacao: 'Faria Lima, São Paulo - SP',
      regimeExecucao: 'Turnkey / Empreitada global'
    },
    className: styles.card5
  }
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
