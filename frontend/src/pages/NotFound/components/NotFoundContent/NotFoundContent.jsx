import logo from 'assets/icons/logo.svg'
import { Link } from 'react-router-dom'

function NotFoundContent() {
  return (
    <section className='flex min-h-screen  items-center justify-center'>
      <div className='flex w-11/12 flex-col gap-8 text-white mt-10 md:mt-20 md:w-9/12'>
        <nav className='flex items-center justify-start gap-2 text-xl text-white'>
          <Link to='/' className='transition-colors duration-500 hover:text-green'>
            Inicio
          </Link>
          <span>/</span>
        </nav>

        <div className='flex w-full items-center justify-between gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-5xl font-semibold'>Página não encontrada</h1>
            <p className='text-xl md:text-2xl'>
              Desculpe, a página que você está procurando não existe. Por favor, verifique os URL ou volte para a página
              inicial.
            </p>
          </div>
          <div className='hidden flex-1 flex-col gap-4 md:flex'>
            <picture>
              <img src={logo} alt='Logo da Agência Dorac, formado pelas letras A e D estilizadas' className='w-10/12' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundContent
