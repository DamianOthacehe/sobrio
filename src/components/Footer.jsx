import ContactForm from './ContactForm';
import './Footer.css';

export default function Footer() {
    const LOGO_ICON = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/logo_blanco.png';
    const ICON_WINE_WHITE = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png';

    return (
        <footer className="main-footer">
            <div className="footer-wrapper">

                {/* 1. Título con mayor margen inferior */}
                <div className="footer-header-centered">
                    <h2 className="charlamos-title">
                        ¿Charlamos?
                        <img src={ICON_WINE_WHITE} alt="copa" className="footer-title-icon" />
                    </h2>
                </div>

                <div className="footer-contact-section">
                    <div className="footer-cta-text">
                        <p>Queremos acompañarte en cada brindis</p>
                        <p className="highlight-text">Escribinos y te respondemos <br /> en menos de 24 hs</p>
                    </div>

                    <div className="footer-form-container">
                        <ContactForm />
                    </div>
                </div>

                {/* 2. Título Club de brindis */}
                <h2 className="club-title">Club de brindis</h2>

                <div className="footer-info-grid">
                    <div className="footer-logo-block">
                        <img src={LOGO_ICON} alt="Sobrio Isotipo" className="footer-isotipo-large" />
                    </div>

                    <div className="footer-links-block">
                        {/* Agregamos el título Enlaces */}
                        <h3 className="links-title">Enlaces</h3> 
                        <ul>
                            <li><a href="#subscriptions">Suscribirse</a></li>
                            <li><a href="#faq">Preguntas frecuentes</a></li>
                            <li><a href="#home">Ir al inicio</a></li>
                        </ul>
                    </div>

                    <div className="footer-social-block">
                        <p>contacto@sobrio.com <span className="icon-white">✉</span></p>
                        <p>2235647826 <span className="icon-white">📞</span></p>
                        <p>instagram.com/sobrio.ar <span className="icon-white">📸</span></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 SOBRIO - Todos los derechos reservados |
                        Diseñado por <a href="https://www.linkedin.com/in/damian-otha/" target="_blank" rel="noreferrer">Damian Othacehe</a></p>
                </div>
            </div>
        </footer>
    );
}