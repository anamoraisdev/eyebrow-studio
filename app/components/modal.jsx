'use client';
import { useEffect, useState } from "react";
import { services } from "./sections/services";

const Modal = ({ setOpenModal, handleSendMessage}) => {
    const [selectedService, setselectedService] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [name, setName] = useState("");
    const [checkbox, setCheckBox] = useState(false)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState();

    const agendar = () => {
        const message = `Olá! Nova solicitação de agendamento:\n\nNome: ${name}\n${selectedService}\n${selectedDate}\n${selectedTime}\n\nFico no aguardo de sua confirmação!`
        if(name && selectedDate && selectedService && selectedTime){
            handleSendMessage({ isMessage: false, name: name, message: message })

        } else{
            setError("Por favor preencha os campos para solicitar agendamento!")
            setTimeout(function() {
              setError("")
            }, 1000);
        }
    }

    
    return (
        <div className="bg-black bg-opacity-30 fixed inset-0 overflow-y-auto flex justify-center items-center">
            <div className="bg-white max-w-[50%] w-[50%] p-20 flex flex-col gap-4 ">
                <div className="flex justify-between">
                    <h1>Agende seu horario!</h1>
                    <button onClick={() => setOpenModal(false)}>X</button>
                </div>
                <div className="flex flex-col gap-6 items-start text-primary">
                    <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" className="border p-2 text-sm w-full rounded"></input>

                    <select required className="border p-2 text-sm w-full rounded " value={selectedService} onChange={(e) => setselectedService(e.target.value)}>
                        <option disabled value="">serviço desejado</option>
                        {services && services.map((service, index) => <option key={index} value={service.name}>{service.name}</option>)}
                    </select>
                    <div className="border p-2 text-sm rounded ">
                        <input className="" required type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                    </div>
                    <select required className="border p-2 text-sm w-full rounded " name="" id="" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                        <option disabled value="">turno desejado</option>
                        <option>manhã</option>
                        <option>tarde</option>
                        <option>noite</option>
                    </select>
                    <div className="flex flex-col border p-2 text-sm w-full rounded  gap-4">
                        <div className="flex justify-between">
                            <p className="">Termos de compromisso</p>
                            <button onClick={() => setOpen(open ? false : true)}>{open ? "-" : "+"}</button>
                        </div>
                        {open &&
                            <div className="border flex flex-col gap-2 p-4 rounded ">
                                <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p>2. Nisi adipisci tempora corporis magni.</p>
                                <p>3. distinctio fuga rem nihil officia.</p>
                                <p>4. eum obcaecati esse inventore quo.</p>
                                <p>5. facilis dolor, qui sint quasi quia quos.</p>
                            </div>
                        }
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" required value={checkbox} onChange={(e) => setCheckBox(e.target.value)} />
                        <p>Assumo esta ciente com os termos de compromisso!</p>
                    </div>
                    {error && <p className="text-red-500">{error}</p> }
                    <button type="submit" onClick={agendar} className="px-4 py-3 rounded hover:bg-secondary-100 bg-secondary-200 text-white">agendar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;