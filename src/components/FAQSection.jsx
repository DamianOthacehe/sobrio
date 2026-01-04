import { useState } from 'react';
import './FAQSection.css';
import CtaButton from './CTAButton';

export default function FAQSection() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [

        {
            question: "¿Como funciona la suscripción?",
            answer: "Cada mes seleccionamos una colección exclusiva de vinos curada por nuestro equipo. Te avisamos antes del envío y podés modificar tus preferencias o saltarte un mes si lo necesitás.",
        },
        {
            question: "¿Puedo elegir los vinos que recibo?",
            answer: "Nuestras selecciones son curadas para sorprenderte, pero podés configurar tu perfil de sabor para que lo que enviemos siempre esté alineado con tus gustos.",
        },
        {
            question: "¿Cuándo recibo mi caja?",
            answer: "Las cajas se despachan durante la segunda semana de cada mes para asegurar que lleguen a tiempo para tus brindis mensuales.",
        },
        {
            question: "¿Puedo pausar o cancelar mi suscripción?",
            answer: "Sí, sin compromisos. Podés pausar o darte de baja en cualquier momento desde tu panel de usuario antes del cierre de facturación.",
        },
        {
            question: "¿Hacen envíos a todo el país?",
            answer: "Llegamos a cada rincón de Argentina. Los tiempos de entrega pueden variar según la provincia, pero el vino llega siempre en perfectas condiciones.",
        },
        {
            question: "¿Qué incluye cada envío?",
            answer: "Además de los vinos seleccionados, recibís fichas de cata técnicas, sugerencias de maridaje y acceso exclusivo a nuestra playlist del mes.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className='faq-wrapper'>
                <h2 className="faq-main-title">Preguntas frecuentes</h2>

                <div className="faq-container">
                    {/* 5.2. Lista de Preguntas (Acordeón) */}
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 5.3. Decoración: Copa Roja Inclinada */}
                    <div className="faq-decoration">
                        <img
                            src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20roja.png"
                            alt="Decoración copa"
                            className="faq-glass-icon"
                        />
                    </div>
                </div>

                {/* 5.4. Bloque de Cierre y CTA */}
                <div className="faq-footer">
                    <h3 className="faq-footer-title">¿Tenés alguna otra duda?</h3>
                    <p className="faq-footer-text">Escribinos y te ayudamos a elegir el mejor plan para vos</p>
                    <CtaButton text="Contactanos" to="/contacto" className="faq-cta-margin" />
                </div>
            </div>
        </section>
    );
}