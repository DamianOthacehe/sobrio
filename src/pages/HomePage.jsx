import { NavLink } from 'react-router-dom';
import './HomePage.css'
import SubscriptionsSection from '../components/SubscriptionsSection';
import AspirationalBlock from '../components/AspirationalBlock';
import BenefitsSection from '../components/BenefitsSection';
import MonthlySelections from '../components/MonthlySelections';
import FAQSection from '../components/FAQSection';

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
            <AspirationalBlock/>
            <SubscriptionsSection/>
            <BenefitsSection/>
            <MonthlySelections/>
            <FAQSection/>
        </main>
    )}