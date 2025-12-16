export default function SubscriptionForm() {
    
    return (
        <form className="subscription-form">
            <input type="text" placeholder="Tu nombre completo" className="form-input" />
            <input type="email" placeholder="Tu mail" className="form-input" />
            <input type="tel" placeholder="Tu telefono" className="form-input" />
            
            <select className="form-input form-select">
                <option value="">Que plan elegis</option>
                <option value="Noir">Noir</option>
                <option value="Blanc">Blanc</option>
                <option value="Equilibre">Équilibre</option>
            </select>
            
            <textarea placeholder="Contanos que vinos te gustan" className="form-input form-textarea"></textarea>
            
            <button type="submit" className="form-cta-button">Enviar</button>
        </form>
    );
}