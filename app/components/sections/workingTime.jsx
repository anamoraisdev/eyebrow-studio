import Title from "../Title";

const WorkingTime = () => {
    return (
        <div id="times" className="p-20 bg-complement-100 bg-opacity-30 text-primary">
            <div className="flex flex-col justify-center gap-10 items-start lg:flex-row">
                <img src="/working.png" alt="" className="w-[30rem] h-auto object-cover rounded-md" />
                <div className="w-[100%] flex flex-col gap-8">
                    <div className="">
                        <Title title="Horário de funcionamento"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus sed reiciendis architecto nisi non sunt? </p>
                    </div>
                    <div className="border-b flex justify-between border-primary">
                        <p>Segunda a sexta</p>
                        <p>9hrs as 18hrs</p>
                    </div>
                    <div className="border-b flex justify-between border-primary">
                        <p>Sábados e feriados*</p>
                        <p>7hrs as 20hrs</p>
                    </div>
                    <div className="border-b flex justify-between border-primary">
                        <p>Domingo</p>
                        <p>fechado</p>
                    </div>
                    <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}
export default WorkingTime;