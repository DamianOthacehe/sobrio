import { ASSETS } from "../constants/assets";

export default function CtaButton({ text, to = "#", className = "" }) {

    return (
        <a 
            href={to} 
            className={`join-club-cta ${className}`}
            onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('.cta-icon-img');
                if (img) img.src = ASSETS.ICON_CUP_WHITE;
            }}
            onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.cta-icon-img');
                if (img) img.src = ASSETS.ICON_CUP_RED;
            }}
        >
            <img 
                src={ASSETS.ICON_CUP_RED} 
                alt="Icono copa" 
                className="cta-icon-img" 
            />
            {text}
        </a>
    );
}