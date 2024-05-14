import Title from "../Title";

const ThePlace = () => {
    return (
        <div id="place" className="flex flex-col lg:flex-row items-center justify-around px-20 py-40 gap-20">
            <div className="flex flex-col gap-4 lg:max-w-[30%]">
                <Title title="O espaço"/>
                <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum, voluptates veniam ipsam ex illo accusamus beatae fugiat laudantium unde deleniti? Error optio qui maiores laboriosam nam voluptate sequi cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum officiis assumenda asperiores, necessitatibus corrupti labore cumque totam sed quo voluptatem, harum accusamus ipsa eum perspiciatis obcaecati esse, quae dolor libero?</p>
                <button className="px-4 py-3 rounded hover:bg-secondary-100 bg-secondary-200 text-white">
                    ver mais 
                </button>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
                <img src="/place1.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] mt-4 object-cover rounded-2xl transform rotate-12"/>
                <img src="/place2.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] object-cover rounded-2xl transform -rotate-6"/>
                <img src="/place3.jpeg" className="w-[16rem] h-[22rem] mr-[-20px] mb-4 object-cover rounded-2xl transform rotate-12"/>
            </div>
        </div>
)}
export default ThePlace;