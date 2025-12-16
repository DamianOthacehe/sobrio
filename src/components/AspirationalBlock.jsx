import { NavLink } from 'react-router-dom';
import './AspirationalBlock.css';

export default function AspirationalBlock() {
    
    const IMG_1 = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/adela-dvorakova-kVDPPKpXjF0-unsplash.jpg';
    const IMG_2 = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/premium_photo-1753322890984-c4ed661ac805.jpg';
    const IMG_3 = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/photo-1525576064846-083dce8b33ba.jpg';
    const IMG_4 = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/kelsey-knight-udj2tD3WKsY-unsplash.jpg';
    const ICON_RED = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20roja.png';
    const ICON_WHITE = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png';

    return (
        <section className="aspirational-section">
            
            {/* Bloque Superior: 3 Columnas (Grid) */}
            <div className="aspirational-grid">
                
                {/* Tarjeta 1 */}
                <article className="aspirational-card">
                    <img src={IMG_1} alt="Mano sirviendo vino en copa" className="card-image"/>
                    <h3 className="card-title">Bienvenidos al club</h3>
                    <p className="card-text">Bienvenido a algo mas que un club de vinos. Estás adentro. Y eso ya es motivo para brindar.</p>
                    <p className="signature-text">Sobrio</p>
                </article>
                
                {/* Tarjeta 2 */}
                <article className="aspirational-card">
                    <img src={IMG_2} alt="Una mano sosteniendo dos botellas de vino" className="card-image"/>
                    <h3 className="card-title">Celebrar lo cotidiano</h3>
                    <p className="card-text">No se trata solo de lo que hay en la copa, sino de todo lo que se genera alrededor.</p>
                </article>
                
                {/* Tarjeta 3 */}
                <article className="aspirational-card">
                    <img src={IMG_3} alt="Mujer tomando vino al aire libre" className="card-image"/>
                    <h3 className="card-title">Selección mensual</h3>
                    <p className="card-text">Cada mes llega una nueva selección, curada con tiempo, historias y propósito.</p>
                    <p className="card-text">Porque creemos en brindar distinto</p>
                </article>
                
            </div>
            
            {/* Bloque Inferior: Ritual compartido (Two Columns) */}
            <div className="join-ritual-block">
                <div className="ritual-text-content">
                    <h2 className="ritual-title">Más que vinos, un ritual compartido</h2>
                    <p className="ritual-paragraph">Cada botella tiene una historia</p>
                    <p className="ritual-paragraph">Unite a una comunidad que celebra el brindis como un arte</p>
                    
                    {/* CTA con lógica de hover para cambio de imagen (copa) */}
                    <NavLink 
                        to="#subscriptions" 
                        className="join-club-cta"
                        onMouseEnter={(e) => {
                            e.currentTarget.querySelector('.cta-icon-img').src = ICON_WHITE;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.querySelector('.cta-icon-img').src = ICON_RED;
                        }}
                    >
                        <img 
                            src={ICON_RED} 
                            alt="Copa de vino icono" 
                            className="cta-icon-img"
                            data-icon-red={ICON_RED} 
                            data-icon-white={ICON_WHITE} 
                        />
                        Sumate al club
                    </NavLink>
                </div>
                <div className="ritual-image-content">
                    <img src={IMG_4} alt="Gente brindando con copas de vino" className="ritual-image"/>
                </div>
            </div>
            
        </section>
    );
}