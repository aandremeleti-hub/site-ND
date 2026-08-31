import { Link } from 'react-router-dom';
import { Container } from '../Container';
import styles from './Footer.module.css';

import logoNovaDimensao from '../../../assets/logoNovaDimensao.svg';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const AtIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);


export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna 1: Marca */}
          <div className={styles.brandColumn}>
            <img src={logoNovaDimensao} alt="Nova Dimensão Engenharia" className={styles.logo} />
            <p className={styles.brandDescription}>
              Engenharia e construção com qualidade, segurança e compromisso em cada projeto.
            </p>
            <div className={styles.socialBox}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Email ou Outro">
                <AtIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Website">
                <GlobeIcon />
              </a>
            </div>
          </div>

          {/* Coluna 2: Menu Alternativo */}
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Menu Alternativo</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="/">Início</Link></li>
              <li className={styles.linkItem}><Link to="/sobre">Sobre</Link></li>
              <li className={styles.linkItem}><Link to="/servicos">Nossos Serviços</Link></li>
              <li className={styles.linkItem}><Link to="/projetos">Projetos</Link></li>
              <li className={styles.linkItem}><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Serviços</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="/servicos">Gerenciamentos de Obras</Link></li>
              <li className={styles.linkItem}><Link to="/servicos">Obras Residenciais</Link></li>
              <li className={styles.linkItem}><Link to="/servicos">Projetos de Engenharia</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Contato</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <PhoneIcon />
                <span>(11) 3230-9699</span>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon />
                <span>(11) 97520-2330</span>
              </div>
              <div className={styles.contactItem}>
                <MailIcon />
                <span>contato@novadimensao.eng.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© 2026 - Nova Dimensão Engenharia - Todos os direitos reservados</span>
          <span>Desenvolvido por StartMedia</span>
        </div>
      </Container>
    </footer>
  );
}
