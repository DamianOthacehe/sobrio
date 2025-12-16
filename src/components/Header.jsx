import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="main-header">
            {/* 1. Logo */}
            <NavLink to = '/'><img src="https://pub-3ce380b6ddaf41119e39fdb9078e3aef.r2.dev/logo_rojo.png" alt="Logo de sobrio" className="header-logo" /></NavLink>
            {/* 2. Icono de Menú */}
            <button className="header-menu-icon">☰</button>
        </header>)
}