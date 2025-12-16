import { NavLink } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    return (
        <section className='hero-section'>
            <h1 className="hero-title title-display">SOBRIO</h1>
            <p className="hero-subtitle">Club de Vinos</p>
            <NavLink to="/products" className="hero-cta-button">
                Descubrí la selección de este mes
            </NavLink>
        </section>
    )
}