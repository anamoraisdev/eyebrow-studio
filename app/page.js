'use client';
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Galery from "./components/sections/galery";
import Navbar from "./components/navbar";
import Services from "./components/sections/services";
import ThePlace from "./components/sections/theplace";
import WorkingTime from "./components/sections/workingTime";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Modal from "./components/modal";
import ButtonWhatsapp from "./components/buttonWhatsapp";

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  
  const handleSendMessage = ({ isMessage, name, message, phone }) => {
    const telefoneEmpresa = '5541984996202';

    const buildWhatsappUrl = (messageText) => {
      return `https://wa.me/${telefoneEmpresa}?text=${encodeURIComponent(messageText)}`;
    };

    let messageText = '';

    if (isMessage) {
      messageText = `Olá me chamo ${name}, ${message}. Meu número de contato é ${phone}`;
    } else if (!isMessage && message) {
      messageText = `${message}`;
    } else {
      messageText = "Olá, venho do site e gostaria de mais informações "
    }

    const whatsappUrl = buildWhatsappUrl(messageText);

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    } else {
      console.error('Não é possível abrir o WhatsApp no ambiente do servidor.');
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const distanceFromTop = section.getBoundingClientRect().top;
        if (distanceFromTop < window.innerHeight * 0.75) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main className="h-screen overflow-y-auto scroll-snap">
      <Navbar />
      <ButtonWhatsapp handleSendMessage={handleSendMessage}/>

      {openModal && <Modal setOpenModal={setOpenModal} handleSendMessage={handleSendMessage} />}

      <Services setOpenModal={setOpenModal} />
      <WorkingTime />
      <ThePlace />
      <Galery />
      <About />
      <Contact handleSendMessage={handleSendMessage} />
      <Footer />
    </main>
  );
}
