import type { IProjectModalData, IProjectSpecs } from '../../../components/ui/ProjectModal';

// ----- Project 1: RPJ (Residência Pico do Jaraguá)
import rpj_01 from '../../../assets/projetos/rpj-01.webp';
import rpj_02 from '../../../assets/projetos/rpj-02.webp';
import rpj_03 from '../../../assets/projetos/rpj-03.webp';
import rpj_04 from '../../../assets/projetos/rpj-04.webp';

// ----- Project 2: MJP (Residência Jardim Paulistano)
import mjp_01 from '../../../assets/projetos/mjp-01.webp';
import mjp_02 from '../../../assets/projetos/mjp-02.webp';
import mjp_03 from '../../../assets/projetos/mjp-03.webp';
import mjp_04 from '../../../assets/projetos/mjp-04.webp';

// ----- Project 3: CMG (Residência Jardim Paulistano)
import cmg_01 from '../../../assets/projetos/cmg-01.webp';
import cmg_02 from '../../../assets/projetos/cmg-02.webp';
import cmg_03 from '../../../assets/projetos/cmg-03.webp';
import cmg_04 from '../../../assets/projetos/cmg-04.webp';

// ----- Project 4: AMP (Residência Perdizes)
import amp_01 from '../../../assets/projetos/amp-01.webp';
import amp_02 from '../../../assets/projetos/amp-02.webp';
import amp_03 from '../../../assets/projetos/amp-03.webp';
import amp_04 from '../../../assets/projetos/amp-04.webp';

// ----- Project 5: RVM (Residência Jardim Paulistano)
import rvm_01 from '../../../assets/projetos/rvm-01.webp';
import rvm_02 from '../../../assets/projetos/rvm-02.webp';
import rvm_03 from '../../../assets/projetos/rvm-03.webp';
import rvm_04 from '../../../assets/projetos/rvm-04.webp';

// ----- Project 6: CASA COR 2025
import casacor_01 from '../../../assets/projetos/casacor-01.webp';
import casacor_02 from '../../../assets/projetos/casacor-02.webp';
import casacor_03 from '../../../assets/projetos/casacor-03.webp';
import casacor_04 from '../../../assets/projetos/casacor-04.webp';

// ----- Project 7: CTM
import ctm_01 from '../../../assets/projetos/ctm-01.webp';
import ctm_02 from '../../../assets/projetos/ctm-02.webp';
import ctm_03 from '../../../assets/projetos/ctm-03.webp';
import ctm_04 from '../../../assets/projetos/ctm-04.webp';

// ----- Project 8: RCM
import rcm_01 from '../../../assets/projetos/rcm-01.webp';
import rcm_02 from '../../../assets/projetos/rcm-02.webp';
import rcm_03 from '../../../assets/projetos/rcm-03.webp';
import rcm_04 from '../../../assets/projetos/rcm-04.webp';

// ----- Project 9: RJAB
import rjab_01 from '../../../assets/projetos/rjab-01.webp';
import rjab_02 from '../../../assets/projetos/rjab-02.webp';
import rjab_03 from '../../../assets/projetos/rjab-03.webp';
import rjab_04 from '../../../assets/projetos/rjab-04.webp';

// ----- Project 10: ROF
import rof_01 from '../../../assets/projetos/rof-01.webp';
import rof_02 from '../../../assets/projetos/rof-02.webp';
import rof_03 from '../../../assets/projetos/rof-03.webp';
import rof_04 from '../../../assets/projetos/rof-04.webp';

// ----- Project 11: RPG
import rpg_01 from '../../../assets/projetos/rpg-01.webp';
import rpg_02 from '../../../assets/projetos/rpg-02.webp';
import rpg_03 from '../../../assets/projetos/rpg-03.webp';
import rpg_04 from '../../../assets/projetos/rpg-04.webp';

// ----- Project 12: RPU
import rpu_01 from '../../../assets/projetos/rpu-01.webp';
import rpu_02 from '../../../assets/projetos/rpu-02.webp';
import rpu_03 from '../../../assets/projetos/rpu-03.webp';
import rpu_04 from '../../../assets/projetos/rpu-04.webp';

// ----- Project 13: SCP
import scp_01 from '../../../assets/projetos/scp-01.webp';
import scp_02 from '../../../assets/projetos/scp-02.webp';
import scp_03 from '../../../assets/projetos/scp-03.webp';
import scp_04 from '../../../assets/projetos/scp-04.webp';

export type { IProjectSpecs, IProjectModalData };

export interface IProjectItem extends IProjectModalData {
  image: string;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export type ProjectItem = IProjectItem;

/**
 * Creates project specifications supporting canonical English keys
 * and backwards-compatible Portuguese keys.
 */
function createProjectSpecs(specs: {
  builtArea: string;
  workType: string;
  executionPeriod: string;
  completionYear: string;
  location: string;
  executionRegime: string;
}): IProjectSpecs {
  return {
    ...specs,
    areaConstruida: specs.builtArea,
    tipoObra: specs.workType,
    prazoExecucao: specs.executionPeriod,
    anoConclusao: specs.completionYear,
    localizacao: specs.location,
    regimeExecucao: specs.executionRegime,
  };
}

export const PROJECTS_DATA: IProjectItem[] = [
  {
    id: 1,
    badge: 'Construção Residencial',
    title: 'RPJ',
    description: 'Construção residencial unifamiliar contemporânea com integração de volumes, acabamento refinado e rigoroso controle estrutural no Pico do Jaraguá.',
    image: rpj_01,
    images: [rpj_01, rpj_02, rpj_03, rpj_04],
    specs: createProjectSpecs({
      builtArea: '450m²',
      workType: 'Construção Residencial',
      executionPeriod: '17 meses',
      completionYear: '2021',
      location: 'Pico do Jaraguá, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 2,
    badge: 'Construção Residencial',
    title: 'MJP',
    description: 'Gerenciamento executivo e acompanhamento estrutural completo de residência de alto padrão com controle de custos e cronograma em linha de base.',
    image: mjp_01,
    images: [mjp_01, mjp_02, mjp_03, mjp_04],
    specs: createProjectSpecs({
      builtArea: '520m²',
      workType: 'Construção Residencial',
      executionPeriod: '18 meses',
      completionYear: '2023',
      location: 'Jardim Paulistano, São Paulo',
      executionRegime: 'Administração de Obras',
    }),
    orientation: 'vertical',
  },
  {
    id: 3,
    badge: 'Reforma Residencial',
    title: 'CMG',
    description: 'Reforma e modernização de residência de alto padrão com detalhamento executivo, marcenaria nobre e integração completa de instalações.',
    image: cmg_01,
    images: [cmg_01, cmg_02, cmg_03, cmg_04],
    specs: createProjectSpecs({
      builtArea: '500m²',
      workType: 'Reforma Residencial',
      executionPeriod: '7 meses',
      completionYear: '2023',
      location: 'Jardim Paulistano, São Paulo',
      executionRegime: 'Administração de Obras',
    }),
    orientation: 'vertical',
  },
  {
    id: 4,
    badge: 'Reforma Residencial',
    title: 'AMP',
    description: 'Reforma integral de apartamento residencial em Perdizes, compatibilização de infraestrutura predial e acabamentos contemporâneos.',
    image: amp_01,
    images: [amp_01, amp_02, amp_03, amp_04],
    specs: createProjectSpecs({
      builtArea: '420m²',
      workType: 'Reforma Residencial',
      executionPeriod: '3 meses',
      completionYear: '2022',
      location: 'Perdizes, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 5,
    badge: 'Construção Residencial',
    title: 'RVM',
    description: 'Residência unifamiliar de grande porte com estrutura mista, caixilharia especial e alto padrão de acabamento executivo.',
    image: rvm_01,
    images: [rvm_01, rvm_02, rvm_03, rvm_04],
    specs: createProjectSpecs({
      builtArea: '2000m²',
      workType: 'Construção Residencial',
      executionPeriod: '24 meses',
      completionYear: '2025',
      location: 'Jardim Paulistano, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 6,
    badge: 'Mostra de Arquitetura',
    title: 'CASA COR 2025',
    description: 'Execução de espaço conceitual e efêmero com marcenaria geométrica curvilínea, iluminação cênica difusa e composições texturais de vanguarda.',
    image: casacor_01,
    images: [casacor_01, casacor_02, casacor_03, casacor_04],
    specs: createProjectSpecs({
      builtArea: '20m²',
      workType: 'Empreitada Parcial',
      executionPeriod: '15 dias',
      completionYear: '2025',
      location: 'Parque da Água Branca, São Paulo',
      executionRegime: 'Empreitada Parcial',
    }),
    orientation: 'vertical',
  },
  {
    id: 7,
    badge: 'Reforma Residencial',
    title: 'CTM',
    description: 'Reforma residencial expressiva marcada pela integração entre cozinha gourmet em laca e pedra, jardim interno de inverno e sofisticado wine lounge sob estrutura metálica.',
    image: ctm_01,
    images: [ctm_01, ctm_02, ctm_03, ctm_04],
    specs: createProjectSpecs({
      builtArea: '750m²',
      workType: 'Reforma Residencial',
      executionPeriod: '5 meses',
      completionYear: '2023',
      location: 'Jardim Paulista, São Paulo',
      executionRegime: 'Administração de Obras',
    }),
    orientation: 'horizontal',
  },
  {
    id: 8,
    badge: 'Reforma Residencial',
    title: 'RCM',
    description: 'Intervenção arquitetônica de grande escala com pé-direito generoso, continuidade de pisos minerais e integração harmoniosa de marcenaria sob medida e luz natural.',
    image: rcm_01,
    images: [rcm_01, rcm_02, rcm_03, rcm_04],
    specs: createProjectSpecs({
      builtArea: '750m²',
      workType: 'Reforma Residencial',
      executionPeriod: '5 meses',
      completionYear: '2023',
      location: 'Jardim Paulista, São Paulo',
      executionRegime: 'Administração de Obras',
    }),
    orientation: 'vertical',
  },
  {
    id: 9,
    badge: 'Reforma Residencial',
    title: 'RJAB',
    description: 'Reforma residencial intimista orientada pela fluidez espacial, otimização de ambientes e paleta de acabamentos sóbrios com marcenaria minimalista de alto padrão.',
    image: rjab_01,
    images: [rjab_01, rjab_02, rjab_03, rjab_04],
    specs: createProjectSpecs({
      builtArea: '120m²',
      workType: 'Reforma Residencial',
      executionPeriod: '6 meses',
      completionYear: '2024',
      location: 'Santo Amaro, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 10,
    badge: 'Reforma Residencial',
    title: 'ROF',
    description: 'Reforma de apartamento de alto padrão nos Jardins, combinando caixilharia ampla, marcenaria arquitetônica de precisão e transição sutil entre áreas sociais e íntimas.',
    image: rof_01,
    images: [rof_01, rof_02, rof_03, rof_04],
    specs: createProjectSpecs({
      builtArea: '240m²',
      workType: 'Reforma Residencial',
      executionPeriod: '7 meses',
      completionYear: '2024',
      location: 'Jardins, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 11,
    badge: 'Reforma Residencial',
    title: 'RPG',
    description: 'Modernização contemporânea de residência com layouts integrados, iluminação embutida de temperatura acolhedora e acabamentos de textura aveludada.',
    image: rpg_01,
    images: [rpg_01, rpg_02, rpg_03, rpg_04],
    specs: createProjectSpecs({
      builtArea: '122m²',
      workType: 'Reforma Residencial',
      executionPeriod: '7 meses',
      completionYear: '2024',
      location: 'Parque Global, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 12,
    badge: 'Reforma Residencial',
    title: 'RPU',
    description: 'Ampla reforma residencial em Perdizes destacando soluções estruturais personalizadas, valorização da ventilação cruzada e marcenaria artesanal elegante.',
    image: rpu_01,
    images: [rpu_01, rpu_02, rpu_03, rpu_04],
    specs: createProjectSpecs({
      builtArea: '520m²',
      workType: 'Reforma Residencial',
      executionPeriod: '8 meses',
      completionYear: '2023',
      location: 'Perdizes, São Paulo',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
  {
    id: 13,
    badge: 'Reforma Residencial',
    title: 'SCP',
    description: 'Design residencial sofisticado com cozinha gourmet em ilha de mármore esculpido, galeria de circulação com marcenaria oculta e sala de banho com imersão e metais foscos.',
    image: scp_01,
    images: [scp_01, scp_02, scp_03, scp_04],
    specs: createProjectSpecs({
      builtArea: '380m²',
      workType: 'Reforma Residencial',
      executionPeriod: '6 meses',
      completionYear: '2024',
      location: 'São Paulo, SP',
      executionRegime: 'Empreitada Global',
    }),
    orientation: 'horizontal',
  },
];

export default PROJECTS_DATA;
