import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "is-open" : ""}`}>
            {/* Scroll Progress Bar indicator */}
            <motion.div className="scroll-progress-bar" style={{ scaleX }} />

            <div className="container navbar-container">
                <a href="#home" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    <img
                        src={logo}
                        alt="Zenrise Digitech"
                        className="navbar-logo-image"
                    />
                </a>

                {/* NAVIGATION */}
                <nav className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
                    <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </nav>

                {/* CTA & HAMBURGER */}
                <div className="navbar-actions">
                    <a href="#contact" className="navbar-cta" onClick={() => setIsOpen(false)}>
                        <span>Let's Talk</span>
                        <span className="navbar-cta-icon">
                            <ArrowUpRight size={17} strokeWidth={2} />
                        </span>
                    </a>

                    <button 
                        className="hamburger-btn" 
                        onClick={toggleMenu} 
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;