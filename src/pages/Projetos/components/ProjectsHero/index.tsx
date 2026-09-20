import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import { Button } from '../../../../components/ui/Button';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import { ProjectModal, type ProjectModalData } from '../../../../components/ui/ProjectModal';
import styles from './ProjectsHero.module.css';

// ----- Projeto 1
import projeto1_01 from '../../../../assets/projetos/projeto1-01.svg';
import projeto1_02 from '../../../../assets/projetos/projeto1-02.svg';
import projeto1_03 from '../../../../assets/projetos/projeto1-03.svg';
import projeto1_04 from '../../../../assets/projetos/projeto1-04.svg';

// ----- Projeto 2
import projeto2_01 from '../../../../assets/projetos/projeto2-01.svg';
import projeto2_02 from '../../../../assets/projetos/projeto2-02.svg';
import projeto2_03 from '../../../../assets/projetos/projeto2-03.svg';
import projeto2_04 from '../../../../assets/projetos/projeto2-04.svg';

// ----- Projeto 3
import projeto3_01 from '../../../../assets/projetos/projeto3-01.svg';
import projeto3_02 from '../../../../assets/projetos/projeto3-02.svg';
import projeto3_03 from '../../../../assets/projetos/projeto3-03.svg';
import projeto3_04 from '../../../../assets/projetos/projeto3-04.svg';

// ----- Projeto 4
import projeto4_01 from '../../../../assets/projetos/projeto4-01.svg';
import projeto4_02 from '../../../../assets/projetos/projeto4-02.svg';
import projeto4_03 from '../../../../assets/projetos/projeto4-03.svg';
import projeto4_04 from '../../../../assets/projetos/projeto4-04.svg';

// ----- Projeto 5
import projeto5_01 from '../../../../assets/projetos/projeto5-01.svg';
import projeto5_02 from '../../../../assets/projetos/projeto5-02.svg';
import projeto5_03 from '../../../../assets/projetos/projeto5-03.svg';
import projeto5_04 from '../../../../assets/projetos/projeto5-04.svg';


interface ProjectItem extends ProjectModalData {
  image: string;
  className: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    badge: 'PROJETO RESIDENCIAL',
    title: 'RPJ Residencia',
    description: 'Loren ipsum dolor sit amet consectetur adipiscing elit. Nullam vestibulum justo nec velit tincidunt, sit amet malesuada ante.',
    image: projeto2_01,
    images: [projeto2_01, projeto2_02, projeto2_03, projeto2_04],
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
    title: 'Obras Mara',
    description: 'Gerenciamento técnico e execução estrutural completa para empreendimento corporativo com rigoroso controle de custos e cronograma.',
    image: projeto4_01,
    images: [projeto4_01, projeto4_02, projeto4_03, projeto4_04],
    specs: {
      areaConstruida: '520m²',
      tipoObra: 'Construção Residencial',
      prazoExecucao: '18 meses',
      anoConclusao: '2023',
      localizacao: 'Pico do Jaraguá - São Paulo',
      regimeExecucao: 'Adm. de obras'
    },
    className: styles.card2
  },
  {
    id: 3,
    badge: 'PROJETO RESIDENCIAL',
    title: 'CMG - CASA MARIA GUSTAVO',
    description: 'Construção residencial de alto padrão executada com foco em qualidade, gestão eficiente e atenção aos detalhes.',
    image: projeto5_01,
    images: [projeto5_01, projeto5_02, projeto5_03, projeto5_04],
    specs: {
      areaConstruida: '500m²',
      tipoObra: 'Residencial Residencial',
      prazoExecucao: '7 meses',
      anoConclusao: '2023',
      localizacao: 'Jd. Paulistano',
      regimeExecucao: 'Adm. de obras'
    },
    className: styles.card3
  },
  {
    id: 4,
    badge: 'PROJETO RESIDENCIAL',
    title: 'AMP - Apartamento',
    description: 'Construção unifamiliar contemporânea com estrutura mista, amplas esquadrias.',
    image: projeto1_01,
    images: [projeto1_01, projeto1_02, projeto1_03, projeto1_04],
    specs: {
      areaConstruida: '420m²',
      tipoObra: 'Reforma Residencial',
      prazoExecucao: '3 meses',
      anoConclusao: '2022',
      localizacao: 'Perdizes, São Paulo',
      regimeExecucao: 'Empreitada global'
    },
    className: styles.card4
  },
  {
    id: 5,
    badge: 'PROJETO RESIDENCIAL',
    title: 'Obras Mamede',
    description: 'Construção residencial de alto padrão executada com foco em qualidade',
    image: projeto3_01,
    images: [projeto3_01, projeto3_02, projeto3_03, projeto3_04],
    specs: {
      areaConstruida: '2000m²',
      tipoObra: 'Residencial Residencial',
      prazoExecucao: '3 meses',
      anoConclusao: '2025',
      localizacao: 'Jd. Paulistano',
      regimeExecucao: 'Empreitada global'
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
