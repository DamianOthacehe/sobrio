export default function WineCard({ wine }) {
    return (
        <article className="wine-card">

            {/* Capa de Imagen y Ficha Técnica (Visible por defecto) */}

            <div className="card-front">
                <div className="wine-image-container">
                    <img src={wine.image} alt={wine.name} className="wine-image" />
                    <span className="wine-month-badge">{wine.month}</span>
                </div>
                <div className="wine-info">
                    <h3 className="wine-name">{wine.name}</h3>
                    <div className="tech-sheet">
                        <p><strong>Bodega:</strong>{wine.bodega}</p>
                        <p><strong>Región:</strong>{wine.region}</p>
                        <p><strong>Varietal:</strong>{wine.varietal}</p>
                        <p><strong>Cosecha:</strong>{wine.anio}</p>
                    </div>
                </div>
            </div>

            {/* Capa de Notas de Cata (Visible en Hover) */}

            <div className="card-back-overlay">
                <h4 className="overlay-title">Experiencia Sobrio</h4>
                <p className="tasting-notes">{wine.notaCata}</p>
                <div className="occasion-box">
                    <p>{wine.occasion}</p>
                </div>
            </div>

        </article>
    );
}