import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = "service_43j9c3l"; 
    const TEMPLATE_ADMIN_ID = "template_8q64lgk"; 
    const PUBLIC_KEY = "3-z-hKHBTSQIbfJVa";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
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

            alert("Gracias por su consulta. Le responderemos a la brevedad.");
            form.reset();

        } catch (error) {
            console.error("Error:", error);
            alert("Error al enviar el mensaje.");
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
                    {loading ? '...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
}