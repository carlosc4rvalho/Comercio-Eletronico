import React, { useState, useEffect } from 'react'
import menu from 'assets/icons/menu.svg'
import Navigation from 'components/Navigation'

function Menu() {
  const [showMenu, setShowMenu] = useState(null)
  const [showNavigation, setShowNavigation] = useState(false)
  const [isScrolledToTop, setIsScrolledToTop] = useState(true)
  let lastScrollPosition = 0

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setIsScrolledToTop(currentScrollPosition <= 0 || currentScrollPosition < lastScrollPosition)
      lastScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation)
  }

  const buttonClass = showMenu === null ? 'hidden' : showMenu ? 'block animate-scaleIn' : 'block animate-scaleOut'

  return (
    <>
      <button
        className={`fixed right-4 top-6 z-50 rounded-full p-4 ${!showNavigation && isScrolledToTop ? 'hidden' : 'bg-yellow'} shadow-2xl transition-all duration-500 md:right-24 md:top-10 md:p-6 ${buttonClass}`}
        onClick={toggleNavigation}
      >
        <img src={menu} alt='Ícone menu' className='h-8 w-8' />
      </button>
      <Navigation isOpen={showNavigation} onClose={toggleNavigation} />
    </>
  )
}

export default Menu
