import { ArrowUpRight, LayoutTemplate, Search, Target, Share2 } from "lucide-react";
import { motion } from "motion/react";
import "./Services.css";

const services = [
    {
        number: "01",
        title: "Website Design / UI UX",
        description: "We create visually engaging, user-friendly websites designed to deliver seamless digital experiences and convert visitors into customers.",
        icon: LayoutTemplate,
        color: "orange",
        featured: true,
    },
    {
        number: "02",
        title: "SEO Management",
        description: "Improve your online visibility and search rankings with strategic SEO solutions built for sustainable organic growth.",
        icon: Search,
        color: "lime",
        featured: false,
    },
    {
        number: "03",
        title: "Performance Marketing",
        description: "Drive measurable business growth through targeted, data-driven performance marketing campaigns that maximize ROI.",
        icon: Target,
        color: "purple",
        featured: false,
    },
    {
        number: "04",
        title: "Social Media Management",
        description: "Build a strong social presence with engaging content, strategic planning, and consistent brand communication.",
        icon: Share2,
        color: "blue",
        featured: false,
    },
];

function Services() {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    const featured = services[0];
    const others = services.slice(1);

    return (
        <section className="services section-lg" id="services" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                {/* Header */}
                <div className="services-top-row">
                    <div className="services-header">
                        <div className="section-label">
                            <span>02</span>
                            <div></div>
                            <p>WHAT WE DO</p>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            We deliver services
                            <span className="accent-text"> that drive results.</span>
                        </motion.h2>
                    </div>

                    <a href="#contact" className="btn-primary services-cta-header">
                        <span>View Packages</span>
                        <span className="btn-icon">
                            <ArrowUpRight size={17} strokeWidth={2} />
                        </span>
                    </a>
                </div>

                {/* Featured service — large panel */}
                <motion.div
                    className="service-featured"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    onMouseMove={handleMouseMove}
                >
                    <div className="sf-spotlight"></div>
                    <div className="sf-content">
                        <div className="sf-top">
                            <span className="sf-number">{featured.number}</span>
                            <div className="sf-icon">
                                <featured.icon size={28} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="sf-title">{featured.title}</h3>
                        <p className="sf-desc">{featured.description}</p>
                        <a href="#contact" className="sf-link">
                            <span>Let's Discuss</span>
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                    <div className="sf-visual">
                        <div className="sf-mock-browser">
                            <div className="sf-mock-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="sf-mock-content">
                                <div className="sf-mock-line w80"></div>
                                <div className="sf-mock-line w60"></div>
                                <div className="sf-mock-line w40"></div>
                                <div className="sf-mock-blocks">
                                    <div className="sf-mock-block"></div>
                                    <div className="sf-mock-block"></div>
                                    <div className="sf-mock-block accent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Supporting services — 3-col grid */}
                <div className="services-supporting-grid">
                    {others.map((service, index) => (
                        <motion.article
                            className="service-panel"
                            key={service.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onMouseMove={handleMouseMove}
                        >
                            <div className="sp-spotlight"></div>
                            <div className="sp-top">
                                <span className="sp-number">{service.number}</span>
                                <div className="sp-icon">
                                    <service.icon size={20} strokeWidth={1.8} />
                                </div>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#contact" className="sp-link">
                                <span>Learn More</span>
                                <ArrowUpRight size={16} />
                            </a>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom statement */}
                <motion.div
                    className="services-bottom-statement"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p>
                        Every service we offer is built around one goal: accelerating your brand's digital growth with precision and measurable impact.
                    </p>
                    <a href="#contact" className="btn-primary">
                        <span>Get Started</span>
                        <span className="btn-icon">
                            <ArrowUpRight size={17} strokeWidth={2} />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
