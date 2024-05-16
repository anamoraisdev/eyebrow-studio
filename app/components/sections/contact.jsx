import { useState } from "react";
import Map from "../map";
import Title from "../Title";

const Contact = ({ handleSendMessage }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div id="contact" className="lg:p-20 p-5 ">
            <div className="text-center pb-10">
                <Title title="Fale conosco"/>
                <h2 className="font-md text-primary">Estamos aqui para ouvir você. Entre em contato e deixe-nos ajudar a realçar sua beleza</h2>
            </div>
            <div className=" flex items-center justify-center text-primary flex-col lg:flex-row ">
                <form className="flex flex-col gap-6 items-start">
                    <div className="flex flex-col items-start gap-4 w-[80%]">
                        <label className="">Nome</label>
                        <input type="text" placeholder="name" className="w-full p-2 border" onChange={(event) => setName(event.target.value)} value={name}></input>
                        <label>telefone</label>
                        <input type="tel" id="phone" name="phone" placeholder="(99) 99999-9999" className="border w-full p-2" onChange={(event) => setPhone(event.target.value)} value={phone} />
                    </div>
                    <label>sua mensagem</label>
                    <textarea placeholder="sua mensagem" className="w-[80%] p-2 border" onChange={(event) => setMessage(event.target.value)} value={message}></textarea>
                    <button onClick={() => handleSendMessage(true, name, message, phone)} className="px-4 py-3 rounded hover:bg-primary bg-secondary-200 text-white">Enviar</button>

                    <p className="">Avenida Alameda Campomar 01, Jardim Miramar - Rio das ostras/ RJ</p>
                </form>
                <Map />
            </div>
        </div>
    )
}

export default Contact;
