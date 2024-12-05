import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Whatsapp from 'components/Whatsapp';
import Banner from './components/Banner';
import About from './components/About';
import DoracAcademy from './components/DoracAcademy';
import ContactForm from './components/ContactForm';

function Home() {
  return (
    <main
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(51, 1, 80, 0.8), rgba(44, 50, 98, 1))',
      }}
    >
      <Header />
      <Banner />
      <About />
      <DoracAcademy />
      <ContactForm />
      <Footer />
      <Whatsapp />
    </main>
  );
}

export default Home;