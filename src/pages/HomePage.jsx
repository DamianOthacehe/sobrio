import { NavLink } from 'react-router-dom';
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
            <section className='hero-section'>
                <h1 className="hero-title title-display">SOBRIO</h1>
                <p className="hero-subtitle text-focus-in">Club de Vinos</p>
                <NavLink to="/products" className="hero-cta-button">
                    Descubrí la selección de este mes
                </NavLink>
            </section>

            <AspirationalSection/>
            <section className="sticky-card card-ritual">
                <RitualSection/>
            </section>
            
            <section className="sticky-card card-plans">
                <PlansSection/>
            </section>
            
            <section className="sticky-card card-subscriptions">
                <SubscriptionsSection/>
            </section>
            <div className="normal-scroll-content">
                <BenefitsSection/>
                <MonthlySelections/>
                <FAQSection/>
            </div>
        </main>
    )}