import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./Testimonials.css";

const testimonials = [
    {
        id: 1,
        quote: "As the Founder of Sofzenix, I truly appreciate the professionalism, creativity, and result-driven digital marketing strategies delivered by the team. Their support helped us strengthen our online presence, improve brand visibility, and achieve impactful growth. Highly recommended for businesses looking for reliable digital marketing solutions.",
        name: "Upputuri Sathish",
        company: "Founder & CEO",
        brand: "Sofzenix IT Solutions",
    },
    {
        id: 2,
        quote: "Thanks to ZenRise, our brand awareness has skyrocketed! Their strategic approach to digital marketing has greatly enhanced customer interactions. We couldn't be happier with the results.",
        name: "Rajasekhar Reddy",
        company: "Vertical Head",
        brand: "LT Supercom",
    },
    {
        id: 3,
        quote: "As the Founder of SkilStation, I am truly impressed with the dedication and innovative digital marketing strategies delivered by the team. Their professional approach and consistent support helped us build a stronger online presence and reach a wider audience effectively.",
        name: "Upputuri Sathish",
        company: "Founder & CEO",
        brand: "SkilStation",
    },
];

function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
    };

    const previousTestimonial = () => {
        setCurrent((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
    };

    const testimonial = testimonials[current];

    return (
        <section className="testimonials section-lg" id="testimonials">
            <div className="container">
                {/* Header row */}
                <div className="test-top-row">
                    <div className="section-label">
                        <span>05</span>
                        <div></div>
                        <p>TESTIMONIALS</p>
                    </div>

                    <div className="test-nav-row">
                        <div className="test-nav-btns">
                            <button type="button" onClick={previousTestimonial} aria-label="Previous" className="test-nav-btn">
                                <ArrowLeft size={18} />
                            </button>
                            <button type="button" onClick={nextTestimonial} aria-label="Next" className="test-nav-btn">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="test-counter">
                            <span className="test-current">{String(current + 1).padStart(2, "0")}</span>
                            <span className="test-sep">/</span>
                            <span className="test-total">{String(testimonials.length).padStart(2, "0")}</span>
                        </div>
                    </div>
                </div>

                {/* Main editorial layout */}
                <div className="test-editorial">
                    {/* Large quote */}
                    <motion.div
                        className="test-quote-section"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="test-quote-mark">
                            <Quote size={48} strokeWidth={1.5} />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <blockquote className="test-quote-text">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="test-author-section">
                                    <div className="test-author-info">
                                        <span className="test-author-name">{testimonial.name}</span>
                                        <span className="test-author-role">{testimonial.company} — {testimonial.brand}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Side metrics */}
                    <motion.div
                        className="test-metrics-side"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="test-metric-block">
                            <div className="test-metric-number">95%</div>
                            <div className="test-metric-label">
                                <span className="test-metric-index">01</span>
                                <span>Client Success Rate</span>
                            </div>
                        </div>
                        <div className="test-metric-divider"></div>
                        <div className="test-metric-block">
                            <div className="test-metric-number">80%</div>
                            <div className="test-metric-label">
                                <span className="test-metric-index">02</span>
                                <span>Average Conversion Rate</span>
                            </div>
                        </div>
                        <div className="test-metric-divider"></div>
                        <div className="test-metric-block">
                            <div className="test-metric-number">4.9</div>
                            <div className="test-metric-label">
                                <span className="test-metric-index">03</span>
                                <span>Average Client Rating</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
