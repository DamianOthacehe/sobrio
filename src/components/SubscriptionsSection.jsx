import SubscriptionForm from './SubscriptionForm';
import './SubscriptionsSection.css';
import { ASSETS } from '../constants/assets';

export default function SubscriptionsSection() {

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
                            style={{ backgroundImage: `url('${ASSETS.ICON_CUP_WHITE}')` }}
                        ></div> 
                    </div>
                    <SubscriptionForm/>
                </div>
            </div>
        </section>
    );
}