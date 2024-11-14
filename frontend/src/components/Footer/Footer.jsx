import React from 'react'
import email from 'assets/icons/email.svg'
import whatsapp from 'assets/icons/whatsapp.svg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='flex flex-col items-center justify-between md:min-h-[50vh]'
    >
      <div className='m-8 flex w-11/12 flex-col justify-between gap-8 text-white md:w-9/12 md:flex-row'>
        <div className='flex flex-1 flex-col gap-4'>
          <header>
            <h3 className='text-2xl font-semibold uppercase'>Serviços</h3>
          </header>

          <ul className='flex flex-col gap-2'>
            <li className='text-xl'>
              <a href='#sobre' className='transition-colors duration-500 hover:text-green'>
                Design & Branding
              </a>
            </li>
            <li className='text-xl'>
              <a href='#sobre' className='transition-colors duration-500 hover:text-green'>
                Criação de Web Site
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-1 flex-col gap-4'>
          <header>
            <h3 className='text-2xl font-semibold uppercase'>Redes Sociais</h3>
          </header>

          <ul className='flex flex-col gap-2'>
            <li className='text-xl'>
              <a
                href='https://www.instagram.com/carlos_c4rvalho/'
                className='transition-colors duration-500 hover:text-green'
                target='_blank'
              >
                Instagram
              </a>
            </li>
            <li className='text-xl'>
              <a
                href='https://www.linkedin.com/in/carlosc4rvalho/'
                className='transition-colors duration-500 hover:text-green'
                target='_blank'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-1 flex-col gap-4'>
          <header>
            <h3 className='text-2xl font-semibold uppercase'>Contatos</h3>
          </header>

          <ul className='flex flex-col gap-2'>
            <li className='text-xl'>
              <a
                href='mailto:carloseducarvalho.me@gmail.com'
                className='flex items-center gap-2 transition-colors duration-500 hover:text-green'
                target='_blank'
              >
                <img src={email} alt='Ícone do email' className='h-8 w-8' />
                <span>carloseducarvalho.me@gmail.com</span>
              </a>
            </li>
            <li className='text-xl'>
              <a
                href='https://api.whatsapp.com/send?phone=5543988730080&text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.'
                className='flex items-center gap-2 transition-colors duration-500 hover:text-green'
                target='_blank'
              >
                <img src={whatsapp} alt='Ícone do whatsApp' className='h-8 w-8' />
                <span>(43) 98873-0080</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex w-full items-center justify-center bg-white p-4'>
        <blockquote className='text-lg font-medium text-purple'>
          &copy; {currentYear} Carlos Carvalho. Todos os direitos reservados.
        </blockquote>
      </div>
    </footer>
  )
}

export default Footer
