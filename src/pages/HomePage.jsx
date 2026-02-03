import './HomePage.css'
import SubscriptionsSection from '../components/SubscriptionsSection';
import AspirationalSection from '../components/AspirationalSection';
import BenefitsSection from '../components/BenefitsSection';
import MonthlySelections from '../components/MonthlySelections';
import FAQSection from '../components/FAQSection';
import RitualSection from '../components/RitualSection';
import PlansSection from '../components/PlansSection';

export default function HomePage() {
    return (
        <main>
            <title>Sobrio | Club de Brindis</title>
            <meta name="description" content="Unite a Sobrio, el club de vinos que redefine el ritual de beber. Selecciones exclusivas y experiencias curadas." />
            <link rel="canonical" href="https://sobrio.vercel.app/" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://sobrio.vercel.app/" />
            <meta property="og:title" content="Sobrio | Club de Brindis" />
            <meta property="og:description" content="Suscribite hoy y recibí las mejores etiquetas en tu casa." />
            <meta property="og:image" content="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/1%20Hero.png" />
            
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sobrio | Club de Brindis" />
            <meta name="twitter:description" content="Suscribite hoy y recibí las mejores etiquetas en tu casa." />
            <meta name="twitter:image" content="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/1%20Hero.png" />
            
            <section id='hero' className='hero-section'>
                <h1 className="hero-title title-display">SOBRIO</h1>
                <p className="hero-subtitle text-focus-in">Club de Brindis</p>
                <a href='#selections' className="hero-cta-button">
                    Descubrí la selección de este mes
                </a>
            </section>

            <AspirationalSection/>
            <div className="stacking-cards">
            <section className="sticky-card card-ritual">
                <RitualSection/>
            </section>
            
            <div id="plans" className="anchor"></div>
            <section className="sticky-card card-plans">
                <PlansSection/>
            </section>
            
            <div id="subscriptions" className="anchor"></div>
            <section className="sticky-card card-subscriptions">
                <SubscriptionsSection/>
            </section>
            </div>
            <div className="normal-scroll-content">
                <div id='benefits' className="anchor"></div>
                <BenefitsSection/>
                <div id='selections' className="anchor"></div>
                <MonthlySelections/>
                <div id='faq' className="anchor"></div>
                <FAQSection/>
            </div>
        </main>
    )}