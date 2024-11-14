import Footer from 'components/Footer'
import Header from 'components/Header'
import NotFoundContent from './components/NotFoundContent'
import Whatsapp from 'components/Whatsapp'
import React from 'react'

function NotFound() {
  return (
    <main className='bg-blue bg-opacity-90'>
      <Header />
      <NotFoundContent />
      <Footer />
      <Whatsapp />
    </main>
  )
}

export default NotFound
