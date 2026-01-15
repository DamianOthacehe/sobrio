import './BenefitsSection.css';
import { ASSETS } from '../constants/assets';

export default function BenefitsSection() {

    return (
        <section className="benefits-section">
            <div className="benefits-content-wrapper">
                
                {/* 4.1. Bloque de Texto y Beneficios */}
                <div className="benefits-text-block">
                    <h2 className="benefits-title title-display">
                        ¿Qué recibís al sumarte a nuestro club?
                    </h2>
                    
                    <ul className="benefits-list">
                        <li className="benefit-item">
                            <span className="check-icon">✔</span>
                            2 Vinos de nuestra exclusiva selección
                        </li>
                        <li className="benefit-item">
                            <span className="check-icon">✔</span>
                            Ficha de cata con la historia de cada botella
                        </li>
                        <li className="benefit-item">
                            <span className="check-icon">✔</span>
                            Sugerencias de maridaje
                        </li>
                        <li className="benefit-item">
                            <span className="check-icon">✔</span>
                            Una playlist creada específicamente para disfrutar con tus vinos
                        </li>
                    </ul>

                    {/* CTA (Botón Rojo) */}
                    <a href='#selections' className="benefits-cta-button">
                        Descubrí la selección de este mes
                    </a>
                </div>
                
                {/* 4.2. Bloque de Imagen (Caja de Vino) */}
                <div className="benefits-image-block">
                    <img 
                        src={ASSETS.BENEFITS_IMG} 
                        alt="Caja de vino" 
                        className="box-image"
                    />
                </div>
                
            </div>
        </section>
    );
}