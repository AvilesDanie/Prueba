import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {
            name: formData.name === '',
            email: formData.email === '',
            message: formData.message === ''
        };

        setFormErrors(errors);

        // Si hay errores, no se envía el formulario
        if (errors.name || errors.email || errors.message) {
            return;
        }

        // Aquí iría la lógica para enviar el formulario (por ejemplo, a un servidor o API)
        console.log('Formulario enviado:', formData);

        // Limpia el formulario después de enviar
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            className={`w-full p-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            className={`w-full p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            className={`w-full p-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded col-span-2`}
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
