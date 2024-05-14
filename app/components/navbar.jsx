const Navbar = () => {
    return (
        <main className="bg-primary w-full h-36 flex items-center justify-between text-complement-100 sm" >
            <img src="/logo.png" className="w-60 mx-20 " />
            <section className="gap-4 px-10 hidden lg:flex">
                <a href='#services' className=" hover:text-secondary-200">
                    Serviços
                </a>
                <a href='#times' className=" hover:text-secondary-200">
                    Horários
                </a>
                <a href='#place' className=" hover:text-secondary-200">
                    O espaço
                </a>
                <a href='#galery' className=" hover:text-secondary-200">
                    Galeria
                </a>
                <a href='#about' className=" hover:text-secondary-200">
                    Sobre
                </a>

                <a href='#contact' className=" hover:text-secondary-200">
                    Fale conosco
                </a>
            </section>
        </main>
    )
}

export default Navbar;
