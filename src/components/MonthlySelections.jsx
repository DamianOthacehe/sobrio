import WineCard from "./WineCard";
import './MonthlySelections.css';
import { ASSETS } from "../constants/assets";

export default function MonthlySelections() {

    const winesData = [

        {
            id: 6,
            month: 'Enero',
            name: 'Mugrón Blend',
            bodega: 'Mugrón',
            region: 'Cafayate, Valles Calchaquíes, Salta',
            varietal: '60 % Malbec / 25 % Cabernet Sauvignon / 10% Tannat / 5% Cabernet Franc',
            anio: '2021',
            notaCata: 'Un blend con raíces, literalmente. Fresco, con carácter de altura y esa sensación de fruta roja madura que abraza sin ser pesado. Hay especias suaves, algo terroso bien de origen y un final largo que se queda charlando un rato más. Elegante sin ser formal, intenso sin ser rudo. Un vino con historia en la etiqueta y en la copa.',
            occasion: 'Maridaje SOBRIO: Fogón: asado criollo, costillas, chorizo bombon y morcilla. Plan mesa larga: pastas con salsas rojas, lasagna casera, estofado. Picada con actitud: quesos estacionados, jamon crudo, aceitunas negras. Servilo entre 16° y 18°C. Un blend para abrir, servir y dejar que hable.',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/mugron-diciembre-25-sf.png',
        },

        {
            id: 5,
            month: 'Enero',
            name: 'El Viticultor',
            bodega: 'El Viticultor (Daniel Guillén)',
            region: 'Valles Calchaquíes, Salta - Valle de Pucará (2.420 m s. n. m.)',
            varietal: '95 % Malbec / 5 % Cabernet Sauvignon',
            anio: '2022',
            notaCata: 'Este Malbec viene directo de Salta y es como subirte a la montaña sin aire pero con la copa llena. Explota de fruta roja, tiene ese toque especiado que te guiña un ojo y una frescura que no pide permiso: entra y se queda. En boca es redondo, amable, pero con carácter… como ese amigo que cae a tu casa con un pack y nunca desentona.',
            occasion: 'No hace falta buscar el plato Michelin: Unas empanadas salteñas que se comen de a dos por vez. Asado con amigos, aunque sea con brasas improvisadas en la vereda. Pasta con mucho queso para la previa del finde. Este vino es como vos cuando estás de buen humor: entra en todas.',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/viticultor-noviembre-25-sf.png',
        },

        {
            id: 4,
            month: 'Diciembre',
            name: 'Uvas de Atelier',
            bodega: 'Sierra Lima Alfa',
            region: 'Animaná y Cafayate, Valles Calchaquíes, Salta',
            varietal: 'Blend de Malbec',
            anio: '2022',
            notaCata: 'Malbec salteño con actitud. Fruta negra bien madura, toque especiado y un final largo que abriga. Potente sin perder elegancia. De esos vinos que te dicen "relajá... yo me encargo del resto"',
            occasion: 'Maridaje SOBRIO: Fogón: asado jugoso, bondiola, provoleta. Cena con onda: pastas con salsa potente, risotto de hongos. Picada fina: reggianito, quesos ahumados, salame tandilero. Servilo entre 15° y 17°C. Perfecto para noches largas y brindis con historia',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/atelier-diciembre-25-sf.png',
        },

        {
            id: 3,
            month: 'Diciembre',
            name: 'Mugrón Blend',
            bodega: 'Mugrón',
            region: 'Cafayate, Valles Calchaquíes, Salta',
            varietal: '60 % Malbec / 25 % Cabernet Sauvignon / 10% Tannat / 5% Cabernet Franc',
            anio: '2021',
            notaCata: 'Un blend con raíces, literalmente. Fresco, con carácter de altura y esa sensación de fruta roja madura que abraza sin ser pesado. Hay especias suaves, algo terroso bien de origen y un final largo que se queda charlando un rato más. Elegante sin ser formal, intenso sin ser rudo. Un vino con historia en la etiqueta y en la copa.',
            occasion: 'Maridaje SOBRIO: Fogón: asado criollo, costillas, chorizo bombon y morcilla. Plan mesa larga: pastas con salsas rojas, lasagna casera, estofado. Picada con actitud: quesos estacionados, jamon crudo, aceitunas negras. Servilo entre 16° y 18°C. Un blend para abrir, servir y dejar que hable.',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/mugron-diciembre-25-sf.png',
        },

        {
            id: 2,
            month: 'Noviembre',
            name: 'El Viticultor',
            bodega: 'El Viticultor (Daniel Guillén)',
            region: 'Valles Calchaquíes, Salta - Valle de Pucará (2.420 m s. n. m.)',
            varietal: '95 % Malbec / 5 % Cabernet Sauvignon',
            anio: '2022',
            notaCata: 'Este Malbec viene directo de Salta y es como subirte a la montaña sin aire pero con la copa llena. Explota de fruta roja, tiene ese toque especiado que te guiña un ojo y una frescura que no pide permiso: entra y se queda. En boca es redondo, amable, pero con carácter… como ese amigo que cae a tu casa con un pack y nunca desentona.',
            occasion: 'No hace falta buscar el plato Michelin: Unas empanadas salteñas que se comen de a dos por vez. Asado con amigos, aunque sea con brasas improvisadas en la vereda. Pasta con mucho queso para la previa del finde. Este vino es como vos cuando estás de buen humor: entra en todas.',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/viticultor-noviembre-25-sf.png',
        },

        {
            id: 1,
            month: 'Noviembre',
            name: 'Re Manija',
            bodega: 'Manija',
            region: 'Paraje Altamira, Valle de Uco - Mendoza',
            varietal: '100 % Cabernet Sauvignon',
            anio: '2019',
            notaCata: 'Este cabernet es como ese amigo que te manda un “¿pongo la casa?” un jueves a la noche: intenso, un poco rebelde y con cero ganas de esperar al finde. Apenas lo servís te tira fruta roja bien arriba, un toque de pimienta que pica la curiosidad y una frescura que te deja pensando “ok, dame otro vaso ya”. Taninos firmes, charla fácil y ese flow manija que no te deja parar.',
            occasion: 'Maridaje que sale solo. Este Manija se lleva bárbaro con lo de todos los días: Una picada con quesos y fiambres bien variada. Hamburguesas caseras a la plancha. Una pasta con salsa roja que perfuma toda la casa. Nada de protocolo: abrilo, serví lo que haya y dejá que el vino haga su magia.',
            image: 'https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/manija-noviembre-25-sf.png',
        },
    ];


    return (
        <section
            className="monthly-selections-section"
            style={{ backgroundImage: `url('${ASSETS.BACKGROUND_SEL}')` }}
        >
            <h2 className="section-title title-display selection-title">
                Nuestras selecciones anteriores
            </h2>
            <div className="wines-grid">
                {winesData.map((wine) => (
                    <WineCard key={wine.id} wine={wine} />
                ))}
            </div>
        </section>
    )
}