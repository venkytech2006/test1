import { Mail, Phone, ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                {/* Top */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#hero" className="footer-logo"><span className="footer-logo-accent">zen</span>rise</a>
                        <p>
                            Helping businesses win customers and accelerate digital growth. Your brand can perform beyond ordinary.
                        </p>
                    </div>

                    <div className="footer-nav-group">
                        <span className="footer-nav-title">Company</span>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#blog">Blog</a>
                    </div>

                    <div className="footer-nav-group">
                        <span className="footer-nav-title">Solutions</span>
                        <a href="#services">Website Design / UI UX</a>
                        <a href="#services">SEO Management</a>
                        <a href="#services">Performance Marketing</a>
                        <a href="#services">Social Media</a>
                    </div>

                    <div className="footer-cta-col">
                        <span className="footer-nav-title">Connect</span>
                        <a href="tel:+917981496591" className="footer-contact-row">
                            <Phone size={14} />
                            <span>+91 7981496591</span>
                        </a>
                        <a href="mailto:Info@ZenriseDigitech.com" className="footer-contact-row">
                            <Mail size={14} />
                            <span>Info@ZenriseDigitech.com</span>
                        </a>
                        <a href="#contact" className="btn-primary footer-btn">
                            <span>Get Started</span>
                            <span className="btn-icon">
                                <ArrowUpRight size={17} strokeWidth={2} />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="footer-separator"></div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Zenrise Digitech. All rights reserved.</span>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
