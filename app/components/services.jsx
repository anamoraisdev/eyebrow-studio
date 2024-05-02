const Services = () => {
    const services = [
        {
            name: "Design de sonbrancelhas",
            png: "/foto1-servico.png",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
        },
        {
            name: "Aplicacao de renna",
            png: "/foto1-servico.png",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
        },
        {
            name: "Buço",
            png: "/foto1-servico.png",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
        }
    ]
    return (
        <main className="flex flex-col justify-center items-center gap-4 py-8">
            <h1 className="text-3xl hover:text-secondary-100 text-secondary-200">Nossos serviços</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) =>
                    <div className="shadow-lg border w-[24rem] h-[32rem]">
                        <img src={service.png} alt={`foto do ${service.name}`} className=" w-full h-[12rem] object-cover" />
                        <div className="p-6 flex flex-col justify-center items-start gap-4 text-primary">
                            <h2 className="text-2xl">{service.name}</h2>
                            <p>
                                {service.description}
                            </p>
                            <button className="px-4 py-3 rounded hover:bg-secondary-100 bg-secondary-200 text-white">agendar</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
export default Services;