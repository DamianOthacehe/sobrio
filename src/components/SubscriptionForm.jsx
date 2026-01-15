import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';


export default function SubscriptionForm() {

    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const TEMPLATE_ADMIN_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN; 
    const TEMPLATE_WELCOME_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_WELCOME;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        // Obtenemos los datos de los campos por su atributo 'name'
        const dbData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            plan: form.plan.value,
            preferences: form.preferences.value,
            date: serverTimestamp() // Guardamos la fecha
        };

        try {
            // 1. GUARDAR EN BASE DE DATOS (FIREBASE)
            await addDoc(collection(db, "suscripciones"), dbData);

            // 2. PREPARAR DATOS PARA EL MAIL AL ADMIN (Usando el Template Universal)
            const templateParamsAdmin = {
                subject_title: `NUEVO SUSCRIPTOR - Plan ${form.plan.value}`,
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                message_body: `Plan elegido: ${form.plan.value}\nPreferencias: ${form.preferences.value}`
            };

            // 3. PREPARAR DATOS PARA EL MAIL AL USUARIO (Template Bienvenida)
            const templateParamsUser = {
                name: form.name.value,
                email: form.email.value, // EmailJS usará esto para el destinatario
                plan: form.plan.value
            };

            // 4. ENVIAR LOS MAILS
            // Aviso a Sobrio
            await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN_ID, templateParamsAdmin, PUBLIC_KEY);
            
            // Bienvenida al Usuario
            await emailjs.send(SERVICE_ID, TEMPLATE_WELCOME_ID, templateParamsUser, PUBLIC_KEY);

            alert("¡Bienvenido a Sobrio! Te hemos enviado un correo de confirmación.");
            form.reset();

        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="subscription-form" onSubmit={handleSubmit}>
            <input
                type="text" name='name' placeholder="Tu nombre completo"
                className="form-input" required
            />
            <input
                type="email" name='email' placeholder="Tu mail"
                className="form-input" required
            />
            <input
                type="tel" name='phone' placeholder="Tu telefono"
                className="form-input" required
            />

            <select name='plan' className="form-input form-select" required>
                <option value="" disabled>Que plan elegis</option>
                <option value="Noir">Noir</option>
                <option value="Blanc">Blanc</option>
                <option value="Equilibre">Équilibre</option>
            </select>

            <textarea
                name="preferences" placeholder="Contanos que vinos te gustan"
                className="form-input form-textarea" required
            ></textarea>

            <button type="submit" className="form-cta-button" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
}