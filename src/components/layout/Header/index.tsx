import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container';
import { Button } from '../../ui/Button';
import logo from '../../../assets/logoNovaDimensao.svg';
import { openWhatsApp } from '../../../utils/whatsapp';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Nova Dimensão Engenharia" className={styles.logo} />
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMenu}
            >
              Início
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMenu}
            >
              Sobre
            </NavLink>
            <NavLink
              to="/nossos-servicos"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMenu}
            >
              Nossos Serviços
            </NavLink>
            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMenu}
            >
              Projetos
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMenu}
            >
              Contato
            </NavLink>

            <div className={styles.mobileAction}>
              <Button variant="primary" onClick={() => {
                closeMenu();
                openWhatsApp('Olá! Gostaria de saber mais sobre os serviços da Nova Dimensão Engenharia e Construtora.');
              }}>Converse Conosco</Button>
            </div>
          </nav>

          <div className={styles.actionContainer}>
            <Button variant="primary" onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre os serviços da Nova Dimensão Engenharia e Construtora.')}>Converse Conosco</Button>
          </div>

          {/* Botão Hambúrguer para Mobile */}
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </Container>
    </header>
  );
}
