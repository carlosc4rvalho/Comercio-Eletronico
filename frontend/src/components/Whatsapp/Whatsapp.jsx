import React from 'react'
import whatsapp from 'assets/icons/whatsappFill.svg'
function Whatsapp() {
  return (
    <a
      className='fixed bottom-6 right-4 z-30 animate-scaleIn'
      href='https://api.whatsapp.com/send?phone=5543988730080&text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.'
      target='_blank'
    >
      <picture>
        <img src={whatsapp} alt='WhatsApp' className='h-20 w-20 hover:opacity-75' />
      </picture>
    </a>
  )
}

export default Whatsapp
