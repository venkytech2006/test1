import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import "./Hero.css";

function CountUp({ to, duration = 2, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const target = parseFloat(to);
        const isInt = Number.isInteger(target);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;
            setCount(isInt ? Math.floor(current) : parseFloat(current.toFixed(1)));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [to, duration]);

    return <span>{count}{suffix}</span>;
}

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                {/* LEFT — Typography */}
                <div className="hero-content">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="hero-badge-dot"></span>
                        <span>Empowering Digital Brands Since 2026</span>
                    </motion.div>

                    <motion.h1
                        className="hero-heading"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        We Build
                        <br />
                        Digital Growth
                        <br />
                        <span className="hero-line-light">for Ambitious Brands</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Scalable marketing campaigns. High-converting websites.
                        Result-oriented SEO. One agency, built for growth.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <a href="#contact" className="btn-primary">
                            <span>Start a Project</span>
                            <span className="btn-icon">
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </span>
                        </a>

                        <a href="#about" className="btn-secondary">
                            <span>See Our Work</span>
                        </a>
                    </motion.div>

                    {/* Trust signals */}
                    <motion.div
                        className="hero-trust-row"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="trust-item">
                            <div className="trust-number"><CountUp to={85} suffix="%" /></div>
                            <div className="trust-label">Avg. Sales Growth</div>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <div className="trust-number"><CountUp to={4.2} suffix="K" /></div>
                            <div className="trust-label">Monthly Leads Generated</div>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <div className="trust-number"><CountUp to={10} suffix="+" /></div>
                            <div className="trust-label">Satisfied Clients</div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT — Dashboard Visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-dashboard">
                        <div className="browser-bar">
                            <div className="browser-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="browser-url">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                <span>insights.zenrisedigitech.com</span>
                            </div>
                        </div>
                        
                        <div className="dash-body">
                            <div className="dash-stats">
                                <div className="d-card">
                                    <span className="d-tag">ACTIVE CAMPAIGNS</span>
                                    <strong className="d-num"><CountUp to={12} /></strong>
                                    <span className="d-trend up">+4.8%</span>
                                </div>
                                <div className="d-card">
                                    <span className="d-tag">MONTHLY LEADS</span>
                                    <strong className="d-num"><CountUp to={4.2} suffix="K" /></strong>
                                    <span className="d-trend up">+18%</span>
                                </div>
                            </div>
                            
                            <div className="d-chart">
                                <div className="d-chart-head">
                                    <span>Organic Growth Trend</span>
                                    <div className="d-chart-legend">
                                        <span className="d-dot"></span>
                                        <span>Traffic</span>
                                    </div>
                                </div>
                                <div className="d-bars">
                                    {[40, 55, 48, 75, 60, 85, 95].map((h, i) => (
                                        <div 
                                            key={i} 
                                            className={`d-bar ${i === 5 ? 'active' : ''}`}
                                            style={{ "--h": `${h}%` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="d-footer">
                                <div className="d-status">
                                    <div className="d-pulse"></div>
                                    <span>Optimization Mode: Active</span>
                                </div>
                                <span className="d-live">LIVE INSIGHTS</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom ticker */}
            <div className="hero-ticker">
                <div className="ticker-track">
                    {["STRATEGY", "DESIGN", "MARKETING", "GROWTH", "STRATEGY", "DESIGN", "MARKETING", "GROWTH", "STRATEGY", "DESIGN", "MARKETING", "GROWTH"].map((word, i) => (
                        <span key={i} className="ticker-item">
                            {word}
                            <span className="ticker-dot"></span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
