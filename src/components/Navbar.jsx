import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'text-blue-700' : 'text-gray-600';
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="bg-white shadow-md fixed max-w-dvw w-full z-10">
            <div className="mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-800">MiPortafolio</Link>
                    <div className="hidden md:flex space-x-8 font-medium">
                        <Link to="/" className={`hover:text-blue-600 ${isActive('/')}`}>Inicio</Link>
                        <Link to="/about" className={`hover:text-blue-600 ${isActive('/about')}`}>Sobre Mí</Link>
                        <Link to="/projects" className={`hover:text-blue-600 ${isActive('/projects')}`}>Proyectos</Link>
                        <Link to="/contact" className={`hover:text-blue-600 ${isActive('/contact')}`}>Contacto</Link>
                    </div>
                    <button className="md:hidden focus:outline-none" id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className="bi bi-list text-2xl"></i>
                    </button>
                </div>
                {/*  Mobile Menu*/}
                <div className={`py-4 md:hidden font-medium ${!menuOpen && 'hidden'}`} id="mobile-menu">
                    <Link to="/" className={`block py-2 hover:text-blue-600 ${isActive('/')}`}>Inicio</Link>
                    <Link to="/about" className={`block py-2 hover:text-blue-600 ${isActive('/about')}`}>Sobre Mí</Link>
                    <Link to="/projects" className={`block py-2 hover:text-blue-600 ${isActive('/projects')}`}>Proyectos</Link>
                    <Link to="/contact" className={`block py-2 hover:text-blue-600 ${isActive('/contact')}`}>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}