import React from 'react';
import useScrollVisibility from 'hooks/useScrollVisibility';

const data = [
  {
    id: '01',
    name: 'Design & Branding',
    description:
      'Crio designs exclusivos que representam a identidade e os valores da sua marca. Além disso, me concentro em garantir que os projetos sejam intuitivos, acessíveis e funcionais. Combinando design com desenvolvimento, entrego soluções digitais robustas e fáceis de usar.',
  },
  {
    id: '02',
    name: 'Criação de Web Site',
    description:
      'Desenvolvo sites escaláveis, pensados para crescer com o seu negócio. Foco em criar experiências únicas para os usuários com micro animações, transições suaves e interações intuitivas que garantem sites de alta performance e design responsivo.',
  },
  {
    id: '03',
    name: 'Tráfego Pago Google Ads',
    description:
      'Especializo-me na criação e gestão de campanhas no Google Ads, sempre com foco em gerar resultados reais para o seu negócio. Através de segmentação estratégica e otimização constante, trabalho para aumentar a visibilidade da sua marca e gerar leads qualificados, maximizando o retorno sobre o investimento (ROI).',
  },
  {
    id: '04',
    name: 'Pacote Completo',
    description:
      'Ofereço um pacote completo que vai do conceito inicial à implementação do seu site. Combinando design criativo e desenvolvimento técnico, crio soluções digitais que atendem às necessidades do seu negócio, sempre focando em funcionalidade, desempenho e uma experiência de usuário excepcional.',
  },
];

function ServiceItem({ service }) {
  return (
    <div className='p-8 border-b-2 border-gray-600 md:border-none'>
      <h3 className='text-3xl font-semibold mb-4 text-white'>{service.name}</h3>
      <p className='text-white text-lg'>{service.description}</p>
    </div>
  );
}

function About() {
  const [isVisible, sectionRef] = useScrollVisibility('about');

  return (
    <section ref={sectionRef} id='sobre' className='flex flex-col items-center justify-center min-h-screen p-10'>
      <h2 className='text-6xl font-bold text-center mb-16 text-white'>Posso te ajudar com...</h2>

      <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
        {data.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default About;