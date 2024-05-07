import React from 'react';

const Galeria = () => {
    const imagens = [
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
          src: "foto1-servico.png",
          title: "design de sonbramcelhas"
        },
        {
            src: "foto1-servico.png",
            title: "design de sonbramcelhas"
          },
          {
            src: "foto1-servico.png",
            title: "design de sonbramcelhas"
          }
    ]

    return (
        <div id="galery" className='p-20 flex flex-col items-center bg-complement-100 bg-opacity-50'>
            <h1 className="text-3xl hover:text-secondary-100 text-secondary-200">Galeria portifólio </h1>
            <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis eum, nostrum asperiores soluta non quasi nesciunt ab.</p>
            <div className="flex flex-wrap justify-center ">
                {imagens.map((imagem, index) => (
                    <div key={index} className="m-4 relative">
                        <img 
                            src={imagem.src} 
                            alt={imagem.title} 
                            className="w-64 h-auto rounded-md shadow cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
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

