import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const TEMPLATE_ADMIN_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN; 
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();        
        const form = e.target;

        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
        if (!nameRegex.test(form.name.value)) {
            return toast.error("Por favor, ingresa un nombre válido.");
        }

        setLoading(true);


        const dbData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            date: serverTimestamp()
        };

        try {
            // 1. GUARDAR EN FIREBASE
            await addDoc(collection(db, "consultas"), dbData);

            // 2. PREPARAR DATOS PARA EL MAIL AL ADMIN (Reutilizando Template Universal)
            const templateParamsAdmin = {
                subject_title: "NUEVA CONSULTA DE CONTACTO", // Título diferente
                name: form.name.value,
                email: form.email.value,
                phone: "No especificado", // El form de contacto no tiene tel
                message_body: `Mensaje: ${form.message.value}` // El cuerpo es el mensaje
            };

            // 3. ENVIAR SOLO AL ADMIN
            await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN_ID, templateParamsAdmin, PUBLIC_KEY);

            toast.success("Gracias por su consulta", {
                description: "Le responderemos a la brevedad."
            });

            form.reset();

        } catch (error) {
            toast.error("Hubo un problema al enviar el mensaje", {
                description: "Por favor intenta nuevamente"
            });
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="footer-contact-form" onSubmit={handleSubmit}>
            <div className="footer-input-group">
                <span className="footer-label">Nombre:</span>
                <input type="text"name="name" className="footer-framed-input"
                    required />
            </div>
            <div className="footer-input-group">
                <span className="footer-label">Email:</span>
                <input type="email"name="email" className="footer-framed-input"
                    required />
            </div>
            <div className="footer-input-group">
                <span className="footer-label">Mensaje:</span>
                <textarea name="message" className="footer-framed-input footer-textarea"
                    required />
            </div>
            {/* Contenedor para alinear a la derecha */}
            <div className="footer-submit-container">
                <button type="submit" className="footer-submit-btn" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
}