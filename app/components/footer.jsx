import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="flex flex-col items-center gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo e Direitos Autorais */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          </div>

          {/* Menu de Navegação */}
          <div className="text-sm">
            <h4 className="font-bold mb-4">Menu</h4>
            <ul>
              <li><a href="#">Página Inicial</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="text-sm">
            <h4 className="font-bold mb-4">Contato</h4>
            <p>Endereço: Rua XYZ, 123</p>
            <p>Telefone: (00) 1234-5678</p>
            <p>Email: info@seusite.com</p>
          </div>

          
        </div>

        <span className="text-sm border-t w-full text-center border-complement-100 border-opacity-20 ">&copy; 2024 Seu Site</span>
      </div>
    </footer>
  );
};

export default Footer;

