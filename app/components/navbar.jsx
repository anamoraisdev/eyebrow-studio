

const Navbar = () => {
    return (
        <main className="bg-primary w-full h-32 flex items-center justify-between text-complement-100" >
            <h1 className="w-32 mx-20 ">LOGO</h1>
            <section className="flex gap-4 px-10 ">
                <a href='' className=" hover:text-secondary-200">
                    Serviços
                </a>
                <a href='' className=" hover:text-secondary-200">
                    O espaço
                </a>
                <a href='' className=" hover:text-secondary-200">
                    Galeria
                </a>
                <a href='' className=" hover:text-secondary-200">
                    Equipe
                </a>
                <a href='' className=" hover:text-secondary-200">
                    Fale conosco
                </a>
            </section>
        </main>
    )
}

export default Navbar;