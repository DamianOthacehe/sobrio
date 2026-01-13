
export default function CtaButton({ text, to = "#", className = "" }) {
    const ICON_RED = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20roja.png';
    const ICON_WHITE = 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/Copa%20blanca.png';

    return (
        <a 
            href={to} 
            className={`join-club-cta ${className}`}
            onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('.cta-icon-img');
                if (img) img.src = ICON_WHITE;
            }}
            onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.cta-icon-img');
                if (img) img.src = ICON_RED;
            }}
        >
            <img 
                src={ICON_RED} 
                alt="Icono copa" 
                className="cta-icon-img" 
            />
            {text}
        </a>
    );
}