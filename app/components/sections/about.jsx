import Title from "../Title";

const About = () => {

    return (
        <div id="about" className=" p-20 flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-start lg:max-w-[30%]">
                <Title title="Sobre" />
                <p className="text-primary">

                    Completando 4 anos de experiência em constante atuação no Mundo das Sobrancelhas, trago uma bagagem de experiência e dedicação, que me fizeram aprimorar a minha técnica e me tornar uma Designer Especialista em Henna e Epilação na cera.
                    Entrego em meus atendimentos agilidade no design e definição com naturalidade.
                    Se tem uma palavra que descreveria os meus resultados seria: individual. Por que me capacitei para desenvolver e entregar o design adequado para sua estruta natural de pelos, evidenciando a sua beleza de acordo com a sua necessidade.
                    Utilizando da técnica de Design Estrategico junto ao visagismo e olhar clínico que adquiri resultam em um olhar HARMÔNICO.
                    Deixando se ser apenas um design e se tornando um Design Personalizado.
                    Te faço (re)descobrir o potencial de suas sobrancelhas com um design único e exclusivamente para você.

                </p>
            </div>
            <img src="/profile.jpeg" alt="Foto da profissional" className="w-[20rem]"/>
        </div>
    )
}

export default About;