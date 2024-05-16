import React from 'react';
import Title from '../Title';

const Galeria = () => {
  const imagens = [
    {
      src: "foto-servico1.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico2.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico3.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico4.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico5.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico6.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico8.jpeg",
      title: "design de sonbramcelhas"
    },
    {
      src: "foto-servico9.jpeg",
      title: "design de sonbramcelhas"
    }
  ]

  return (
    <div id="galery" className='p-20 flex flex-col items-center bg-complement-100 bg-opacity-30'>
      <Title title="Galeria" />
      <p className="text-primary">Descubra nossa galeria: onde a arte da beleza ganha vida.</p>
      <div className="flex flex-wrap justify-center ">
        {imagens.map((imagem, index) => (
          <div key={index} className="m-4 relative">
            <img
              src={imagem.src}
              alt={imagem.title}
              className="w-64 h-64 object-cover rounded-md shadow cursor-pointer transition duration-300 ease-in-out transform hover:scale-05"
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
            />
            <div className="absolute top-0 rounded-md left-0 w-full h-full flex justify-center items-center opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-primary bg-opacity-50">
              <p className="text-white text-lg">{imagem.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Galeria;

