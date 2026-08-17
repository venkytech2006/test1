import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./Portfolio.css";

const projects = [
    /* WEBSITE DESIGN */
    {
        id: 1,
        title: "SofZenix It solutions LLP",
        category: "Website Design",
        style: "orange",
        link: "https://www.sofzenix.in/",
        desc: "A custom web application with interactive administration dashboards and scalable server operations."
    },
    {
        id: 2,
        title: "LT SuperCom",
        category: "Website Design",
        style: "blue",
        link: "https://www.ltsupercom.in/",
        desc: "A creative corporate site showcasing advanced infrastructure operations and brand communication."
    },
    {
        id: 3,
        title: "SkilStation",
        category: "Website Design",
        style: "lime",
        link: "https://edu-tech-eb9p.vercel.app/",
        desc: "An educational platform designed with student dashboards, lessons progression, and seamless payments."
    },
    {
        id: 4,
        title: "Learnerstrack",
        category: "Website Design",
        style: "purple",
        link: "https://www.learnerstrack.com/",
        desc: "A responsive learning management portal optimized for course delivery and academic metrics tracking."
    },
    
    /* SEO MANAGEMENT */
    {
        id: 5,
        title: "E-Commerce Organic Boost",
        category: "SEO Management",
        style: "blue",
        link: "#contact",
        desc: "Overhaul of organic search footprint driving a 240% increase in non-paid transaction volumes."
    },
    {
        id: 6,
        title: "Local Retail Map Scaling",
        category: "SEO Management",
        style: "lime",
        link: "#contact",
        desc: "Strategic Google Maps optimization securing top 3 local pack placements for high-volume keywords."
    },

    /* SOCIAL MEDIA MANAGEMENT */
    {
        id: 7,
        title: "SaaS Viral Brand Campaign",
        category: "Social Media Management",
        style: "purple",
        link: "#contact",
        desc: "End-to-end LinkedIn strategy boosting organic founder impressions by 4.2M in 90 days."
    },
    {
        id: 8,
        title: "Instagram Visual Overhaul",
        category: "Social Media Management",
        style: "orange",
        link: "#contact",
        desc: "Complete visual redesign and storytelling format resulting in a 45% uplift in community interaction."
    }
];

const filters = [
    "Website Design",
    "SEO Management",
    "Social Media Management",
];

const emailProjects = [
    {
        id: "EM1",
        title: "PixelPulse Brand Launch",
        category: "Email Campaign",
    },
    {
        id: "EM2",
        title: "Cart Abandonment Sequence",
        category: "Automation",
    },
    {
        id: "EM3",
        title: "E-Commerce Holiday Sales",
        category: "Email Campaign",
    }
];

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("Website Design");

    const visibleProjects = projects.filter(
        (project) => project.category === activeFilter
    );

    return (
        <section className="portfolio" id="projects">
            <div className="container">
                {/* SECTION LABEL */}
                <div className="section-label">
                    <span>03</span>
                    <div></div>
                    <p>OUR PROJECTS</p>
                </div>

                {/* HEADER */}
                <div className="portfolio-header-grid">
                    <div className="portfolio-left-info">
                        <motion.div
                            className="portfolio-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>
                                Explore the Projects We’ve
                                <span className="accent-text"> Successfully Delivered</span>
                            </h2>
                        </motion.div>
                        <div className="portfolio-campaigns-counter">
                            <h3>150+</h3>
                            <p>Successful Campaigns</p>
                        </div>
                    </div>

                    {/* FILTER CONTROLS */}
                    <div className="portfolio-filters">
                        {filters.map((filter) => {
                            const isActive = activeFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    className={`filter-btn ${isActive ? "active" : ""}`}
                                    onClick={() => setActiveFilter(filter)}
                                    style={{ position: "relative", overflow: "hidden" }}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeFilterPill"
                                            className="active-filter-pill"
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}
                                    <span style={{ position: "relative", zIndex: 2 }}>{filter}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* PROJECT GRID */}
                <div className="projects-grid">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <motion.article
                                className="project-card"
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <a 
                                    href={project.link} 
                                    target={project.link.startsWith("http") ? "_blank" : "_self"}
                                    rel={project.link.startsWith("http") ? "noopener noreferrer" : ""}
                                    className="project-visual-link"
                                >
                                    <div                                     className="project-browser-frame">
                                        <span className="project-id-tag">
                                            {String(project.id).padStart(2, "0")}
                                        </span>

                                        {/* BROWSER FRAME MOCK */}
                                        <div className="browser-header">
                                            <div className="browser-dots">
                                                <span className="b-dot"></span>
                                                <span className="b-dot"></span>
                                                <span className="b-dot"></span>
                                            </div>
                                            <div className="browser-address">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                                <span>{project.category.replace(" Management", "").toLowerCase()}.zenrise.agency</span>
                                            </div>
                                        </div>
                                        
                                        <div className="browser-content">
                                            <span className="project-category-tag">{project.category}</span>
                                            <div className="project-details">
                                                <h3>{project.title}</h3>
                                                <p>{project.desc}</p>
                                            </div>
                                            <div className="project-action-row">
                                                <span className="project-launch-link">
                                                    <span>Explore Project</span>
                                                    <ArrowUpRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div className="project-details" style={{ display: "none" }}>
                                    <div className="project-text-group">
                                        <h3>{project.title}</h3>
                                        <p>{project.category}</p>
                                    </div>
                                    <span className="project-index-num">
                                        {String(project.id).padStart(2, "0")}
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* EMAIL MARKETING SECTION */}
                <div className="additional-projects">
                    <div className="additional-projects-header">
                        <span>EMAIL MARKETING & AUTOMATION</span>
                        <div></div>
                    </div>

                    <div className="additional-projects-list">
                        {emailProjects.map((project) => (
                            <div className="additional-project-row" key={project.id}>
                                <span className="row-id">{project.id}</span>
                                <div className="row-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                </div>
                                <a href="#contact" className="row-link-btn" aria-label="Discuss Project">
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;