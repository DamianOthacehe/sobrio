import './HomePage.css'
import SubscriptionsSection from '../components/SubscriptionsSection';
import AspirationalSection from '../components/AspirationalSection';
import BenefitsSection from '../components/BenefitsSection';
import MonthlySelections from '../components/MonthlySelections';
import FAQSection from '../components/FAQSection';
import RitualSection from '../components/RitualSection';
import PlansSection from '../components/PlansSection';
import { ASSETS } from '../constants/assets';

export default function HomePage() {
    return (
        <main>

            <title>Sobrio | Club de Vinos</title>
            <meta name="description" content="Unite a Sobrio, el club de vinos que redefine el ritual de beber. Selecciones exclusivas y experiencias curadas." />
            
            {/* Estos son para cuando compartas el link por WhatsApp/Redes */}
            <meta property="og:title" content="Sobrio | Club de Vinos" />
            <meta property="og:description" content="Suscribite hoy y recibí las mejores etiquetas en tu casa." />
            <meta property="og:image" content={ASSETS.BENEFITS_IMG} />
            <meta property="og:url" content="https://sobrio.vercel.app" />

            <section id='hero' className='hero-section'>
                <h1 className="hero-title title-display">SOBRIO</h1>
                <p className="hero-subtitle text-focus-in">Club de Vinos</p>
                <a href='#selections' className="hero-cta-button">
                    Descubrí la selección de este mes
                </a>
            </section>

            <AspirationalSection/>
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