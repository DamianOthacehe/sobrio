import { NavLink } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    return (
        <main>
            <section className='hero-section'>
                <h1 className="hero-title title-display">SOBRIO</h1>
                <p className="hero-subtitle">Club de Vinos</p>
                <NavLink to="/products" className="hero-cta-button">
                    Descubrí la selección de este mes
                </NavLink>
            </section>
            <section className="aspirational-section">
                <div className="aspirational-grid">
                    <article className="aspirational-card">
                        <img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/adela-dvorakova-kVDPPKpXjF0-unsplash.jpg"
                            alt="Copa de vino rebalsada" />
                        <h3 className="card-title">Bienvenidos al club</h3>
                        <p className="card-text">Bienvenido a algo mas que un club de vinos. Estas adentro y eso ya es motivo para brindar. </p>
                        <p className="signature-text">Sobrio</p>
                    </article>
                    <article className="aspirational-card">
                        <img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/premium_photo-1753322890984-c4ed661ac805.jpg"
                            alt="Una mano sosteniendo 2 botellas de vino" />
                        <h3 className="card-title">Celebrar lo cotidiano</h3>
                        <p className="card-text">No se trata solo de lo que hay en la copa, sino de todo lo que se genera alrededor.</p>
                    </article>
                    <article className="aspirational-card">
                        <img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/photo-1525576064846-083dce8b33ba.jpg"
                            alt="Mujer tomando vino al aire libre" />
                        <h3 className="card-title">Selección mensual</h3>
                        <p className="card-text">Cada mes llega una nueva selección, curada con tiempo, historias y propósito.</p>
                        <p className="card-text">Porque creemos en brindar distinto</p>
                    </article>
                </div>
                <div className='join-ritual-block'>
                    <div className='ritual-text-content'>
                        <h2 className='ritual-title'>Más que vinos, un ritual compartido</h2>
                        <p className='ritual-paragraph'>Cada botella tiene una historia</p>
                        <p className='ritual-paragraph'>Unite a una comunidad que celebra el brindis como un arte</p>
                        <NavLink to='/join' className='join-club-cta' onMouseEnter={(e) => {
                            // En el hover, cambiamos el src de la imagen al icono blanco
                            e.currentTarget.querySelector('.cta-icon-img').src =
                                e.currentTarget.querySelector('.cta-icon-img').dataset.iconWhite;
                        }}
                            onMouseLeave={(e) => {
                                // Al salir, volvemos al icono rojo
                                e.currentTarget.querySelector('.cta-icon-img').src =
                                    e.currentTarget.querySelector('.cta-icon-img').dataset.iconRed;
                            }}><img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20roja.png"
                                alt="Copa de vino icono"
                                className='cta-icon-img'
                                data-icon-red='https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20roja.png'
                                data-icon-white='https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png' />
                            Sumate al club</NavLink>
                    </div>
                    <div className="ritual-image-content">
                        <img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/kelsey-knight-udj2tD3WKsY-unsplash.jpg"
                            alt="Gente brindando con copas de vino"
                            className='ritual-image' />
                    </div>
                </div>
            </section>
        </main>
    )
}