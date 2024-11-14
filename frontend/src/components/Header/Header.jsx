import React, { useEffect, useState } from 'react'
import logo from 'assets/icons/logo.svg'
import menu from 'assets/icons/menu.svg'
import Navigation from 'components/Navigation'
import { Link } from 'react-router-dom'

function Header() {
  const [showNavigation, setShowNavigation] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - lastScrollY) > 200) {
        setIsHeaderVisible(currentScrollY < lastScrollY)
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleClick = () => setShowNavigation(!showNavigation)

  return (
    <>
      <header
        className={`bg-filter fixed top-0 z-30 flex w-full flex-col bg-transparent transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <nav className='flex items-center justify-between px-4 py-6 text-white md:px-12'>
          <Link to='/'>
            <figcaption className='text-xl font-semibold'>&copy;Carlos Carvalho</figcaption>
          </Link>

          <ul className='hidden items-center gap-8 md:flex'>
            <li>
              <a href='#sobre' className='text-xl transition-colors duration-500 hover:text-green'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#contato' className='text-xl transition-colors duration-500 hover:text-green'>
                Contato
              </a>
            </li>
          </ul>

          <button className='md:hidden' onClick={handleClick}>
            <img src={menu} alt='Ícone de Menu Hamburger' className='w-8' />
          </button>
        </nav>
      </header>

      <Navigation isOpen={showNavigation} onClose={() => setShowNavigation(false)} />
    </>
  )
}

export default Header;