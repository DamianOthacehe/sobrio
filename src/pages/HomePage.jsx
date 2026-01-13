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