import { SEO } from '../../components/SEO';
import { Container } from '../../components/layout/Container';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Planning } from './components/Planning';
import { Journey } from './components/Journey';
import { Solutions } from './components/Solutions';
import { Projects } from './components/Projects';
import { BehindTheScenes } from './components/BehindTheScenes';
import { AboutCEO } from './components/AboutCEO';
// import { Feedbacks } from './components/Feedbacks';
import { Sustainability } from './components/Sustainability';

export function Home() {
  return (
    <>
      <SEO 
        title="Nova Dimensão Engenharia | Construção e Reformas de Alto Padrão" 
        description="Especialistas em construção, gerenciamento e execução de obras residenciais e corporativas. Segurança, previsibilidade e projetos sustentáveis." 
      />
      <Hero />
      <Stats />
      <Planning />
      <Journey />
      <Solutions />
      <Projects />
      <BehindTheScenes />
      <AboutCEO />
      <Container>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--color-dark)', opacity: 0.1, margin: 0 }} />
      </Container>
      <Feedbacks />
      <Sustainability />
    </>
  );
}
