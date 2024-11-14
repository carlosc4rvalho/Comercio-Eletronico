import React from 'react';
import bg from 'assets/images/background.jpg';

function Banner() {
  return (
    <section
      id="inicio"
      className="relative flex w-full items-center justify-center bg-cover bg-no-repeat bg-center min-h-svh"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      <div className="mt-44 flex w-11/12 flex-col items-center justify-center text-center md:mt-10 md:min-h-screen md:w-10/12 relative my-16">
        <h1 className="text-5xl font-bold text-white md:text-7xl uppercase">
          Pense grande.<br />Venda mais rápido.
        </h1>
        <p className="mt-4 mb-8 text-xl md:text-2xl text-gray-200 md:w-1/2 italic">
          Impulsione suas vendas e conquiste leads qualificados com soluções digitais estratégicas. Vamos transformar sua presença online, atrair novos clientes e acelerar o crescimento do seu negócio.
        </p>
        <button className="flex items-center justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5543988730080&text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
            target='_blank'
            className="rounded-full bg-green px-12 py-4 text-2xl font-medium uppercase text-white hover:opacity-75"
          >
            Saiba Mais
          </a>
        </button>
      </div>
    </section>
  );
}

export default Banner;