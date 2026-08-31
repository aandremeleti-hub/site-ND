import { SEO } from '../../components/SEO';
import { ProjectsHero } from './components/ProjectsHero';
import { StartProject } from './components/StartProject';

export function Projetos() {
  return (
    <>
      <SEO 
        title="Projetos" 
        description="Veja os projetos realizados pela Nova Dimensão Engenharia" 
      />
      <main>
        <ProjectsHero />
        <StartProject />
      </main>
    </>
  );
}
