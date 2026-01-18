import './AspirationalBlock.css';
import { ASSETS } from '../constants/assets';

export default function AspirationalSection() {

    return (
        <section className="aspirational-section">
            
            {/* Bloque Superior: 3 Columnas (Grid) */}
            <div className="aspirational-grid">
                
                {/* Tarjeta 1 */}
                <article className="aspirational-card">
                    <img src={ASSETS.ASPIRATIONAL_IMG_1} alt="Mano sirviendo vino en copa" className="card-image"/>
                    <h3 className="card-title">Bienvenidos al club</h3>
                    <p className="card-text">Bienvenido a algo mas que un club de vinos. Estás adentro. Y eso ya es motivo para brindar.</p>
                </article>
                
                {/* Tarjeta 2 */}
                <article className="aspirational-card">
                    <img src={ASSETS.ASPIRATIONAL_IMG_2} alt="Una mano sosteniendo dos botellas de vino" className="card-image"/>
                    <h3 className="card-title">Celebrar lo cotidiano</h3>
                    <p className="card-text">No se trata solo de lo que hay en la copa, sino de todo lo que se genera alrededor.</p>
                </article>
                
                {/* Tarjeta 3 */}
                <article className="aspirational-card">
                    <img src={ASSETS.ASPIRATIONAL_IMG_3} alt="Mujer tomando vino al aire libre" className="card-image"/>
                    <h3 className="card-title">Selección mensual</h3>
                    <p className="card-text">Cada mes llega una nueva selección, curada con tiempo, historias y propósito.</p>
                    <p className="card-text-signature">Porque creemos en brindar distinto</p>
                </article>
                
            </div>
            
        </section>
    );
}