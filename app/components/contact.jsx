import { useState } from "react";
import Map from "./map";

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        const phoneNumber = encodeURIComponent(phone);
        const messageText = encodeURIComponent(`Olá ${name}, ${message}`);
        const telefoneEmpresa = '5541984996202';
        const whatsappUrl = `https://wa.me/${telefoneEmpresa}?text=Olá,%20${name}.%20${messageText}%20Meu%20número%20de%20contato%20é%20${phoneNumber}`;

        if (typeof window !== 'undefined') {
            window.open(whatsappUrl, '_blank');
        } else {
            console.error('Não é possível abrir o WhatsApp no ambiente do servidor.');
        }
    };


    return (
        <div id="contact" className="lg:p-20 p-5">
            <div className="text-center pb-10">
                <h1 className="text-3xl hover:text-secondary-100 text-secondary-200 text-center">Fale conosco</h1>
                <h2 className="font-md text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hi impedit odit modi labore reiciendis culpa?</h2>
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
                    <button onClick={handleSendMessage} className="px-4 py-3 rounded hover:bg-secondary-100 bg-secondary-200 text-white">Enviar</button>

                    <p className="">Avenida Alameda Campomar 01, Jardim Miramar - Rio das ostras/ RJ</p>
                </form>
                <Map />
            </div>
        </div>
    )
}

export default Contact;
