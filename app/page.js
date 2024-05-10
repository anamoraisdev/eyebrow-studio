'use client';
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Galery from "./components/sections/galery";
import Navbar from "./components/navbar";
import Services from "./components/services";
import ThePlace from "./components/theplace";
import WorkingTime from "./components/workingTime";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Modal from "./components/modal";

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
      <button onClick={() => handleSendMessage({ isMessage: false })} className="">
        <svg className="fixed bottom-2 right-0 z-50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,300,150">
          <g fill="#d39679" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(4,4)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
        </svg>
      </button>

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
