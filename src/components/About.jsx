import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import "./About.css";

const stats = [
    { number: "10+", label: "Satisfied Clients" },
    { number: "9+", label: "Marketing Experts" },
    { number: "6+", label: "Brands Joined" },
    { number: "40+", label: "Successful Campaigns" },
];

function CountUp({ to, duration = 1.2, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!isInView) return;
        let startTime = null;
        const target = parseFloat(to);
        const isInt = Number.isInteger(target);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const current = progress * target;
            setCount(isInt ? Math.floor(current) : parseFloat(current.toFixed(1)));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, to, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
    return (
        <section className="about section-lg" id="about">
            <div className="container">
                {/* Label + oversized number */}
                <div className="about-top-row">
                    <div className="section-label">
                        <span>01</span>
                        <div></div>
                        <p>WHO WE ARE</p>
                    </div>
                    <div className="about-overline-number">01</div>
                </div>

                {/* Main editorial grid */}
                <div className="about-editorial">
                    {/* Left — large statement */}
                    <motion.div
                        className="about-statement"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2>
                            We exist to turn
                            <span className="accent-text"> ambitious ideas </span>
                            into measurable digital outcomes.
                        </h2>
                    </motion.div>

                    {/* Right — supporting copy */}
                    <motion.div
                        className="about-body"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p>
                            Zenrise Digitech is a full-service digital marketing agency. Since 2026, we've been helping brands achieve exceptional results through innovative strategies and data-driven marketing solutions.
                        </p>
                        <p>
                            From high-performance websites to precision SEO campaigns, we engineer every touchpoint of your digital presence.
                        </p>

                        <a href="#services" className="btn-secondary about-cta">
                            <span>Our Services</span>
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </a>
                    </motion.div>
                </div>

                {/* Stats — editorial strip */}
                <div className="about-stats-strip">
                    {stats.map((stat, index) => {
                        const numValue = parseFloat(stat.number);
                        const suffix = stat.number.replace(/[0-9.]/g, "");
                        return (
                            <motion.div
                                className="about-stat-item"
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="stat-big-number">
                                    <CountUp to={numValue} suffix={suffix} />
                                </div>
                                <div className="stat-meta">
                                    <span className="stat-index">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="stat-name">{stat.label}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default About;
