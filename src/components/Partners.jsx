import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import "./Partners.css";

const partners = [
    { name: "SofZenix LLP", tag: "IT Solutions" },
    { name: "LT SuperCom", tag: "Corporate" },
    { name: "SkilStation", tag: "Education" },
    { name: "Learnerstrack", tag: "LMS Portal" },
    { name: "PixelPulse", tag: "Media Agency" },
    { name: "SofZenix LLP", tag: "IT Solutions" },
    { name: "LT SuperCom", tag: "Corporate" },
    { name: "SkilStation", tag: "Education" },
    { name: "Learnerstrack", tag: "LMS Portal" },
    { name: "PixelPulse", tag: "Media Agency" }
];

function Partners() {
    return (
        <section className="partners" id="partners">
            <div className="container">
                {/* SECTION LABEL */}
                <div className="section-label">
                    <span>04</span>
                    <div></div>
                    <p>PARTNERS</p>
                </div>

                {/* MAIN CONTENT ROWS */}
                <div className="partners-main">
                    {/* LEFT BLOCK */}
                    <motion.div
                        className="partners-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>
                            We Collaborate
                            <span className="accent-text"> with Trusted Brands</span>
                        </h2>
                    </motion.div>

                    {/* RIGHT BLOCK */}
                    <motion.div
                        className="partners-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <p>
                            We partner with emerging startups and corporate organizations to deliver result-oriented digital solutions and marketing campaigns.
                        </p>

                        <a href="#about" className="partners-btn">
                            <span>More About Us</span>
                            <span className="btn-icon">
                                <ArrowUpRight size={18} strokeWidth={2} />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* INFINITE SCROLLING MARQUEE */}
                <motion.div
                    className="partners-marquee-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="partners-track">
                        {partners.map((partner, index) => (
                            <div className="partner-logo-item" key={index}>
                                <h3>{partner.name}</h3>
                                <span>{partner.tag}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Partners;