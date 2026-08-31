import { SEO } from '../../components/SEO';
import { ContactHero } from './components/ContactHero';
import { LocationMap } from './components/LocationMap';

export function Contato() {
  return (
    <>
      <SEO title="Contato" description="Entre em contato com a Nova Dimensão Engenharia" />
      <main>
        <ContactHero />
        <LocationMap />
      </main>
    </>
  );
}
