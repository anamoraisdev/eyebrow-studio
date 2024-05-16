const Banner = ({setOpenModal}) =>{
    return(
        <div className="relative">
            <img className="" alt="" src="/banner.png"/>
            <button onClick={() => setOpenModal(true)} className="absolute w-full h-full top-0 flex justify-start items-center"></button>
        </div>
    )
}

export default Banner;