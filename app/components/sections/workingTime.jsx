import Title from "../Title";

const WorkingTime = () => {
    return (
        <div id="times" className="p-20 bg-complement-100 bg-opacity-30 text-primary">
            <div className="flex flex-col justify-center gap-10 items-start lg:flex-row">
                <img src="/working.png" alt="" className="w-[40rem] h-[20rem] object-cover rounded-md" />
                <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
                    <div className="">
                        <Title title="Horário de funcionamento"/>
                        <p>A beleza não tem hora marcada, mas nós temos!</p>
                    </div>
                    <div className="border-b flex justify-between border-primary">
                        <p>Segunda á sábado</p>
                        <p>7hrs as 20hrs</p>
                    </div>
                    <div className="border-b flex justify-between border-primary">
                        <p>Feriados e vésperas </p>
                        <p>6hrs as 22hrs</p>
                    </div>
                    <p>* Feriados e vésperas de feriados consultar disponibilidade com antecendência</p>
                </div>
            </div>
        </div>
    )
}
export default WorkingTime;