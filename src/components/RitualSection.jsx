import './AspirationalBlock.css';
import CtaButton from './CTAButton';

export default function RitualSection(){

        const IMG_4 = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/kelsey-knight-udj2tD3WKsY-unsplash.jpg';

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
                    <img src={IMG_4} alt="Gente brindando con copas de vino" className="ritual-image"/>
                </div>
        </section>
    )
}