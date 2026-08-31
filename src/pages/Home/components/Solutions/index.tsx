import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Solutions.module.css';

import iconReformasPremium from '../../../../assets/iconReformasPremium.svg';
import iconConstrucoesResidenciais from '../../../../assets/IconConstrucoesResidenciais.svg';
import iconObra from '../../../../assets/iconObra.svg';
import iconCorporativos from '../../../../assets/iconCorporativos.svg';

const solutions = [
  {
    id: 1,
    icon: iconConstrucoesResidenciais,
    title: 'Construção\nResidencial',
    desc: 'Casas e residências executadas do projeto à chave, com fidelidade ao projeto arquitetônico executivo e às especificações aprovadas.'
  },
  {
    id: 2,
    icon: iconReformasPremium,
    title: 'Reforma Residencial\nDe Alto Padrão',
    desc: 'Apartamentos e casas. Obra em imóvel ocupado, com convivência, portaria e vizinhança preservadas do primeiro dia à entrega.'
  },
  {
    id: 3,
    icon: iconCorporativos,
    title: 'Gerenciamento \nDe Obras',
    desc: 'Escritórios, lojas e ambientes de negócio, com o padrão estético da marca mantido e interferência mínima na operação do cliente.'
  },
  {
    id: 4,
    icon: iconObra,
    title: 'Compatibilização\ne Viabilidade',
    desc: 'Análise técnica de projeto antes da decisão de obra: interferências, custo estimado e o que a edificação permite.'
  }
];

export function Solutions() {
  return (
    <section className={styles.solutionsSection}>
      <ScrollReveal>
        <Container>
          <div className={styles.headerGroup}>
            <span className={styles.subtitle}>Soluções</span>
            <h2 className={styles.title}>Expertise em cada detalhe</h2>
          </div>
        </Container>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <Container>
          <div className={styles.cardsGrid}>
            {solutions.map((solution) => (
              <div key={solution.id} className={styles.card}>
                <div className={styles.contentGroup}>
                  <img src={solution.icon} alt="" aria-hidden="true" className={styles.icon} loading="lazy" />
                  <h3 className={styles.cardTitle}>
                    {solution.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className={styles.cardDesc}>{solution.desc}</p>
                </div>
                <a href="#" className={styles.link}>
                  Saiba mais
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
