import { SEO } from '../../components/SEO';
import { ServicesHero } from './components/ServicesHero';
import { ServiceBlock } from './components/ServiceBlock';

// Import Illustrations
import illustrationGerenciamento from '../../assets/illustrationGerenciamento.svg';
// import illustrationObrasComerciais from '../../assets/illustrationObrasComerciais.svg';
import illustrationObrasResidenciais from '../../assets/illustrationObrasResidenciais.svg';
import illustrationProjetosEngenharia from '../../assets/illustrationProjetosEngenharia.svg';

export function NossosServicos() {
  return (
    <>
      <SEO title="Nossos Serviços | NOVA DIMENSÃO ENGENHARIA E CONSTRUTORA" description="Conheça nossos serviços: Gerenciamento de Obras, Obras Comerciais, Obras Residenciais e Projetos de Engenharia." />
      
      <ServicesHero />

      

      {/* <ServiceBlock
        title="Obras Comerciais"
        spanText="NOVA DIMENSÃO ENGENHARIA E CONSTRUTORA"
        paragraphs={[
          "Contratar a gente para obras ou reformas comerciais traz diversas vantagens. Contamos com uma equipe especializada e experiente, garantindo soluções técnicas alinhadas às necessidades de cada cliente.",
          "Atuamos com foco em qualidade, eficiência e cumprimento de prazos, assegurando uma execução bem-sucedida. Mantemos transparência e comunicação clara em todas as etapas do projeto."
        ]}
        buttonText="Conheça-nos melhor"
        imageSrc={illustrationObrasComerciais}
        imageAlt="Construção e reforma de obras comerciais"
        theme="dark-alt"
        reverse={true}
      /> */}

      <ServiceBlock
        id="obras-residenciais"
        title="Obras Residenciais"
        spanText="NOVA DIMENSÃO ENGENHARIA E CONSTRUTORA"
        paragraphs={[
          "Reforma completa, retrofit e construção de residências de alto padrão em São Paulo — apartamentos e casas, em administração de obra ou empreitada global.",
          "O que faz uma obra dar errado raramente é técnico: é escopo aberto, decisão tomada tarde e informação que chega diferente para cada pessoa. Trabalhamos para eliminar as três antes que virem custo.",
          "O escopo é fechado por escrito antes do preço. O projeto é construído como foi desenhado — a autoria é da arquitetura, a execução é nossa. Cliente e escritório de arquitetura acompanham o mesmo relatório de andamento físico, técnico e financeiro. E a residência é entregue documentada: manual do proprietário, garantias, as built e plano de manutenção."
        ]}
        buttonText="Conheça-nos melhor"
        imageSrc={illustrationObrasResidenciais}
        imageAlt="Obra residencial finalizada com piscina"
        theme="dark"
        reverse={false}
      />

      <ServiceBlock
        id="gerenciamento-de-obras"
        title="Gerenciamento de Obras"
        spanText="NOVA DIMENSÃO ENGENHARIA E CONSTRUTORA"
        paragraphs={[
          "Gerenciar sua obra com a Nova Dimensão traz diversas vantagens. Nossa equipe oferece expertise técnica, conhecimento atualizado e experiência em projetos de construção, garantindo planejamento detalhado e coordenação eficiente.",
          "Com controle rigoroso de custos e prazos, buscamos assegurar a execução dentro do orçamento e cronograma estabelecidos. Atuamos com transparência e comunicação clara para garantir uma experiência segura e bem-sucedida."
        ]}
        buttonText="Conheça-nos melhor"
        imageSrc={illustrationGerenciamento}
        imageAlt="Equipe trabalhando no gerenciamento de uma obra"
        theme="light"
        reverse={true}
      />

      <ServiceBlock
        id="projetos-complementares"
        title="Projetos Complementares"
        spanText="NOVA DIMENSÃO ENGENHARIA E CONSTRUTORA"
        paragraphs={[
          "Uma reforma de alto padrão reúne estrutura, hidrossanitário, elétrica, ar-condicionado, automação e rede. Quando esses projetos não conversam entre si, o conflito só aparece na obra — e aí custa dinheiro e prazo.",
          "Indicamos os projetistas de cada disciplina, coordenamos o desenvolvimento e compatibilizamos as pranchas com o projeto de arquitetura antes da execução. Também conduzimos as aprovações em condomínio e nos órgãos competentes."
        ]}
        buttonText="Conheça-nos melhor"
        imageSrc={illustrationProjetosEngenharia}
        imageAlt="Projeto de engenharia em 3D"
        theme="light"
        reverse={false}
      />
    </>
  );
}
