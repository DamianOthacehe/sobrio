export default function ContactForm() {
    return (
        <form className="footer-contact-form">
            <div className="footer-input-group">
                <span className="footer-label">Nombre:</span>
                <input type="text" className="footer-framed-input" />
            </div>
            <div className="footer-input-group">
                <span className="footer-label">Email:</span>
                <input type="email" className="footer-framed-input" />
            </div>
            <div className="footer-input-group">
                <span className="footer-label">Mensaje:</span>
                <textarea className="footer-framed-input footer-textarea" />
            </div>
            {/* Contenedor para alinear a la derecha */}
            <div className="footer-submit-container">
                <button type="submit" className="footer-submit-btn">Enviar</button>
            </div>
        </form>
    );
}