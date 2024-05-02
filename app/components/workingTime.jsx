const WorkingTime = () => {
    return (
        <div className="p-20 bg-complement-100 bg-opacity-30 text-primary">
            <div className="flex justify-center gap-10 items-start">
                <img src="/working.png" alt="" className="w-[30rem] h-auto object-cover rounded-md" />
                <div className="w-[30rem] flex flex-col gap-8">
                    <div className="">
                        <h1 className="text-3xl hover:text-secondary-100 text-secondary-200">Horario de funcionamento</h1>
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