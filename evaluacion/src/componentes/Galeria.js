import React from 'react';
import imagen1 from '../Imagenes/Imagen1.jpg';
import imagen2 from '../Imagenes/imagen2.jpg';
import imagen3 from '../Imagenes/imagen3.jpg';
import imagen4 from '../Imagenes/imagen4.jpg';
import imagen5 from '../Imagenes/imagen5.jpg';
import imagen6 from '../Imagenes/imagen6.jpg';

const Gallery = () => {
    return (
        <section>
            <div>
                <h2>Galería</h2>
                <div>
                    <img className='imagen' src={imagen1} alt="Imagen 1" />
                    <img className='imagen' src={imagen2} alt="Imagen 2" />
                    <img className='imagen' src={imagen3} alt="Imagen 3" />
                    <img className='imagen' src={imagen4} alt="Imagen 4" />
                    <img className='imagen' src={imagen5} alt="Imagen 5" />
                    <img className='imagen' src={imagen6} alt="Imagen 6" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;