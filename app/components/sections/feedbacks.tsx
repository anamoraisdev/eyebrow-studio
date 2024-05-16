import Title from "../Title"

const Feedbacks  = () =>{
    const images = ['/feedback1.png', '/feedback2.png', 'feedback3.jpeg']
    return(
        <div className="p-20 flex flex-col items-center gap-10">
            <div className="flex flex-col justify-center items-center">
            <Title title="Feedbacks"/>
            <p className="text-sm text-primary">
            Seu olhar, nossa inspiração: sua opinião é o nosso guia!
            </p>

            </div>
            <div className="flex gap-10">
                {images.map((image) => 
                <img src={image} alt='' className="w-[24rem] h-auto object-start"/>
                
                )}

            </div>
        </div>
    )
}

export default Feedbacks;