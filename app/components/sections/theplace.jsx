import Title from "../Title";

const ThePlace = () => {
    return (
        <div id="place" className="flex flex-col lg:flex-row items-center justify-around px-20 py-40 gap-20">
            <div className="flex flex-col gap-4 lg:max-w-[30%]">
                <Title title="O espaço" />
                <p className="text-primary">
                    Descubra o nosso espaço dedicado ao cuidado exclusivo das suas sobrancelhas. Aqui, proporcionamos mais do que um serviço, oferecemos uma experiência completa. Em um ambiente cuidadosamente preparado para o seu conforto, você encontrará ar condicionado para manter uma temperatura agradável em qualquer estação do ano. Além disso, desfrute da nossa área do café, onde pode relaxar enquanto aguarda ou após o seu tratamento. Trabalhamos apenas com produtos de qualidade, garantindo resultados excepcionais em cada procedimento. Sinta-se em casa e permita-nos cuidar da sua beleza com todo carinho e profissionalismo que você merece.
                </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
                <img src="/place2.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] mt-4 object-cover rounded-2xl transform rotate-12" />
                <img src="/place1.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] object-cover rounded-2xl transform -rotate-6" />
                <img src="/place4.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] mb-4 object-cover rounded-2xl transform rotate-12" />
            </div>
        </div>
    )
}
export default ThePlace;