import { SEO } from '../../components/SEO';
import { AboutHero } from './components/AboutHero';
import { Identity } from './components/Identity';
import { QualityPolicy } from './components/QualityPolicy';

export function Sobre() {
  return (
    <>
      <SEO 
        title="Sobre Nós | Nova Dimensão Engenharia" 
        description="A Nova Dimensão Engenharia é uma construtora com atuação em São Paulo e Alagoas, focada em segurança, confiabilidade e qualidade." 
      />
      <AboutHero />
      <Identity />
      <QualityPolicy />
    </>
  );
}
