import Title from "../Title";

export const services = [
    {
        name: "Design Personalizado de sobrancelhas",
        jpeg: "/foto-servico9.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
    },
    {
        name: "Design Personalizado + Henna",
        jpeg: "/foto-servico1.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
    },
    {
        name: "Design Personalizado + tintura",
        jpeg: "/foto-servico2.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
    },
    {
        name: "Depilação de Buço na linha ou cera",
        jpeg: "/foto-servico6.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga ipsum ab enim mollitia quidem corrupti architecto reiciendis nam maiores! Voluptas iusto ducimus eius rerum vero rem perferendis ipsum ab"
    },
]
const Services = ({setOpenModal}) => {
  return (
        <main id="services" className="flex flex-col justify-center items-center gap-4 p-6 pb-28">
            <Title title="Nossos serviços"/>
            <p className="text-primary">Descubra nossos tratamentos exclusivos, projetados para realçar sua beleza natural.</p>
            <div className="flex flex-wrap justify-center gap-2">
                {services.map((service, index) =>
                    <div key={index} className="shadow-md rounded-2xl border w-[20rem]">
                        <img src={service.jpeg} alt={`foto do ${service.name}`} className="rounded-t-2xl w-full h-[12rem] object-cover" />
                        <div className="p-6 flex flex-col justify-center items-start gap-4 text-primary">
                            <h2 className="text-2xl">{service.name}</h2>
                            <button className="px-4 py-3 rounded hover:bg-primary bg-secondary-200 text-white" onClick={() => setOpenModal(true)}>agendar</button>
                        </div>
                    </div>
                )}
            </div>
            
        
        </main>
    )
}
export default Services;