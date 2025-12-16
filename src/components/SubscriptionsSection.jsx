import SubscriptionForm from './SubscriptionForm';
import './SubscriptionsSection.css';

export default function SubscriptionsSection() {

    const BACKGROUND_IMAGE_URL = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/banner-brindis.png';
    const LARGE_CUP_ICON_URL = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png';

    return (
        <section id="subscriptions" className="subscriptions-section">
            
            {/* Bloque de Títulos y Cards */}
            <div 
                className="subscriptions-header-block"
                style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }} 
            >
                <h2 className="subscriptions-main-title title-display">Join the club</h2>
                
                <div className="plans-grid">
                    
                    {/* Plan 1: Noir */}
                    <article className="plan-card plan-noir">
                        <div className="plan-logo">(S)</div>
                        <h3 className="plan-title">Noir</h3>
                        <p className="plan-description">Vinos con carácter y profundidad. Selección que desafía tus límites. Para cuando el momento lo merece.</p>
                        <p className="plan-signature">SOBRIO</p>
                    </article>
                    
                    {/* Plan 2: Blanc */}
                    <article className="plan-card plan-blanc">
                        <div className="plan-logo">(S)</div>
                        <h3 className="plan-title">Blanc</h3>
                        <p className="plan-description">Blancos, frescos, elegantes y expresivos. Ideal para descorchar sin culpa y sin perder intención.</p>
                        <p className="plan-signature">SOBRIO</p>
                    </article>
                    
                    {/* Plan 3: Équilibre */}
                    <article className="plan-card plan-equilibre">
                        <div className="plan-logo">(S)</div>
                        <h3 className="plan-title">Équilibre</h3>
                        <p className="plan-description">El punto justo entre ambos mundos. Una curaduría para quienes no temen disfrutar "sin reglas".</p>
                        <p className="plan-signature">SOBRIO</p>
                    </article>
                    
                </div>
            </div>
            
            {/* Bloque de Registro (Formulario) */}
            <div className="registration-form-block">
                <div className="registration-content">
                    <div className="registration-text-icon">
                        <h2 className="registration-title">
                            Registrate para recibir cada mes nuestra mejor seleccion
                        </h2>
                        <div 
                            className="large-cup-icon"
                            style={{ backgroundImage: `url('${LARGE_CUP_ICON_URL}')` }}
                        ></div> 
                    </div>
                    <SubscriptionForm/>
                </div>
            </div>
        </section>
    );
}