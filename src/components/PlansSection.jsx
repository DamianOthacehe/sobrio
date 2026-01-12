import './SubscriptionsSection.css';

export default function PlansSection(){

        const BACKGROUND_IMAGE_URL = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/banner-brindis.png';

    return(
        <section
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
        </section>
    )
}