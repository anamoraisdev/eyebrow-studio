import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="flex flex-col items-center gap-20">
        <div className="flex justify-center w-full gap-20 items-center">
          <img src="/logo.png" alt="Logo" className="w-60"/>

          <div className="text-sm">
            <h4 className="font-bold mb-4">Menu</h4>
            <ul>
              <li><a href="#">Página Inicial</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4">Contato</h4>
            <p>Endereço: Estr. do palmital nᵒ 1. Atrás da polícia militar rodoviária</p>
            <p>Telefone: (22)999193117</p>
            <p>Facebook: Estter Oliveira Sobrancelhas </p>
            <p>instagram: @estteroliveirasobrancelhas</p>
          </div>


        </div>

        <span className="text-sm border-t w-full text-center border-complement-100 border-opacity-20 ">&copy; 2024 Seu Site</span>
      </div>
    </footer>
  );
};

export default Footer;

