import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { smoothScrollTo } from '../utils/scroll';

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        smoothScrollTo(id, 900, 90);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);
}
