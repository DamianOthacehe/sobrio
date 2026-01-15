import './AspirationalBlock.css';
import CtaButton from './CTAButton';
import { ASSETS } from '../constants/assets';

export default function RitualSection(){

    return(
        <section className="join-ritual-block">
        {/* Bloque Inferior: Ritual compartido (Two Columns) */}
                <div className="ritual-text-content">
                    <h2 className="ritual-title">Más que vinos, un ritual compartido</h2>
                    <p className="ritual-paragraph">Cada botella tiene una historia</p>
                    <p className="ritual-paragraph">Unite a una comunidad que celebra el brindis como un arte</p>
                    
                    <CtaButton text="Sumate al club" to="#subscriptions" />
                </div>
                <div className="ritual-image-content">
                    <img src={ASSETS.ASPIRATIONAL_IMG_4} alt="Gente brindando con copas de vino" className="ritual-image"/>
                </div>
        </section>
    )
}