import SubscriptionForm from './SubscriptionForm';
import './SubscriptionsSection.css';

export default function SubscriptionsSection() {

    const LARGE_CUP_ICON_URL = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png';

    return (
        <section id="subscriptions" className="subscriptions-section">
            
            
            
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