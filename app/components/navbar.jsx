'use client';
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Fechar o menu após clicar em um link
    };

    return (
        <main className="bg-primary w-full h-32 flex items-center justify-between text-complement-100 sm">
            <h1 className="w-32 mx-20 ">LOGO</h1>
            <input type="checkbox" id="menu-toggle" className="hidden" checked={menuOpen} onChange={toggleMenu}/>
            <label htmlFor="menu-toggle" className="block cursor-pointer lg:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </label>
            <section className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:gap-4 px-4 sm:px-10`}>
                <a href='#servicos' onClick={() => scrollToSection('servicos')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                    Serviços
                </a>
                <a href='#horarios' onClick={() => scrollToSection('horarios')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                    Horários
                </a>
                <a href='#espaco' onClick={() => scrollToSection('espaco')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                    O espaço
                </a>
                <a href='#galeria' onClick={() => scrollToSection('galeria')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                    Galeria
                </a>
                <a href='#sobre' onClick={() => scrollToSection('sobre')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                   Sobre
                </a>
                <a href='#fale-conosco' onClick={() => scrollToSection('fale-conosco')} className="hover:text-secondary-200 transition duration-500 ease-in-out">
                    Fale conosco
                </a>
            </section>
        </main>
    );
};

export default Navbar;
