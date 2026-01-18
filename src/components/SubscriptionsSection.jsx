import SubscriptionForm from './SubscriptionForm';
import './SubscriptionsSection.css';
import { ASSETS } from '../constants/assets';

export default function SubscriptionsSection() {

    return (
        <section id="subscriptions" className="subscriptions-section">

            {/* Bloque de Registro (Formulario) */}
            <div className="registration-form-block">
                <div className="registration-content">
                    <div className="registration-info">
                        <h2 className="registration-title title-display">
                            Registrate para recibir cada mes nuestra mejor seleccion
                        </h2>
                            <img src={ASSETS.ICON_CUP_WHITE} alt="" className="large-cup-icon" />
                    </div>
                        <SubscriptionForm />
                </div>
            </div>
        </section>
    );
}