import { useState } from 'react';
import './Header.css'
import { ASSETS } from '../constants/assets';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    // const closeMenu = () => setIsOpen(false);

    return (
        <header className="main-header">
            {/* 1. Logo */}
            <a href="#hero" className="header-logo-link">
                <img src={ASSETS.LOGO_RED}
                    alt="Logo de sobrio"
                    className="header-logo" />
            </a>
            {/* Botón Hamburguesa */}
            <button className="header-menu-icon" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Menú de Navegación */}
            <nav className={`header-nav ${isOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                    <li><a href="#plans" onClick={toggleMenu}>Planes</a></li>
                    <li><a href="#subscriptions" onClick={toggleMenu}>Suscripciones</a></li>
                    <li><a href="#benefits" onClick={toggleMenu}>Beneficios</a></li>
                    <li><a href="#selections" onClick={toggleMenu}>Selecciones</a></li>
                    <li><a href="#faq" onClick={toggleMenu}>Preguntas</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}