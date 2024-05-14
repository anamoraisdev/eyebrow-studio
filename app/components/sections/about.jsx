import Title from "../Title";

const About = () => {
  
    return (
        <div id="about" className=" p-20 flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-start lg:max-w-[30%]">
                <Title title="Sobre"/>
                <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab voluptatibus debitis accusantium fugit fugiat eius commodi impedit! Assumenda ipsa provident error quasi ut dignissimos iure similique vel ipsam molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia iste natus sunt libero! Cupiditate ipsam perspiciatis tempore magnam aperiam, et eum temporibus illo quo. Expedita perspiciatis quaerat sapiente atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium amet minus nihil omnis fuga a natus, praesentium iure in reprehenderit. Quaerat corporis, deserunt eum facilis quas excepturi delectus impedit voluptates.</p>
            </div>
            <img src="/perfil.jpeg" alt="" className="w-[20rem]" />
        </div>
    )
}

export default About;