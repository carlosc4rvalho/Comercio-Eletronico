import React from 'react'
import { Link } from 'react-router-dom'
import useScrollVisibility from 'hooks/useScrollVisibility'

function AboutAcademiaDorac() {
  const [isVisible, sectionRef] = useScrollVisibility('academia-dorac')

  return (
    <section
      ref={sectionRef}
      id='academia-dorac'
      className='flex min-h-96 flex-col items-center justify-center bg-white bg-opacity-85'
    >
      <div className='my-16 flex w-11/12 flex-col items-center justify-center gap-6 text-center md:w-10/12'>
        <header className={`${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
          <h2 className='text-4xl font-bold text-blue md:text-6xl'>Crie produtos melhores</h2>
        </header>

        <p className={`text-lg w-9/12 md:w-11/12 md:text-2xl text-center ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
          Transforme sua visão em resultados reais com soluções digitais criativas e estratégias focadas em impulsionar sua marca. Se você busca um site de alto impacto ou fortalecer sua presença nas redes sociais, estamos prontos para ajudar a atrair leads qualificados e aumentar seu engajamento. Vamos criar produtos que realmente fazem a diferença!
        </p>

        <button className={`flex items-center justify-center ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
          <a
            href='https://api.whatsapp.com/send?phone=5543988730080&text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.'
            target='_blank'
            className='rounded-full bg-[#3F2657] px-10 py-3 text-2xl font-medium uppercase text-white hover:opacity-75'
          >
            comece agora mesmo!
          </a>
        </button>
      </div>
    </section>
  )
}

export default AboutAcademiaDorac