import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useScrollToHash } from '../../hooks/useScrollToHash';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './Layout.module.css';

export function Layout() {
  useScrollToHash();

  return (
    <div className={styles.layout}>
      <ScrollRestoration />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
