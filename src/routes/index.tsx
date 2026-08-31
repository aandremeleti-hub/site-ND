import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { NossosServicos } from '../pages/NossosServicos';
import { Projetos } from '../pages/Projetos';
import { Contato } from '../pages/Contato';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
      {
        path: 'nossos-servicos',
        element: <NossosServicos />,
      },
      {
        path: 'projetos',
        element: <Projetos />,
      },
      {
        path: 'contato',
        element: <Contato />,
      },
    ],
  },
]);
