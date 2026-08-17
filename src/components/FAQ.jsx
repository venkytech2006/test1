import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./FAQ.css";

const faqs = [
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We provide a comprehensive range of digital services, including custom website design / UI UX, search engine optimization (SEO), performance marketing, and strategic social media management.",
    },
    {
        id: 2,
        question: "When will I see results?",
        answer: "Organic SEO optimizations usually show noticeable search rank and traffic growth within 3 to 6 months. Performance marketing and paid search campaigns can yield measurable traffic and lead metrics within days of launch.",
    },
    {
        id: 3,
        question: "How do you measure success?",
        answer: "We track concrete data points tailored to your business, such as search engine ranking placements, organic traffic volume, conversion rates, cost-per-acquisition (CPA), and return on ad spend (ROAS).",
    },
    {
        id: 4,
        question: "Can you create a custom plan?",
        answer: "Yes. Every client engagement begins with a deep audit of your current channels, competition, and target goals. We use these insights to design a custom digital strategy built for your brand.",
    },
    {
        id: 5,
        question: "Why is SEO important?",
        answer: "SEO positions your brand in front of users actively searching for your services. Ranking organically builds brand trust and generates high-intent, sustainable inbound leads without recurring ad costs.",
    },
    {
        id: 6,
        question: "Do you provide monthly reports?",
        answer: "Yes, we send detailed monthly reports outlining active campaign progress, organic traffic growths, search rankings, and core conversion metrics, combined with monthly strategy calls.",
    },
];

function FAQ() {
    const [activeFAQ, setActiveFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <section className="faq section-lg" id="faq">
            <div className="container faq-container">
                {/* Left — heading + stats */}
                <motion.div
                    className="faq-left"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-label">
                        <span>06</span>
                        <div></div>
                        <p>FAQs</p>
                    </div>

                    <h2>
                        Answers to your most
                        <span className="accent-text"> common questions.</span>
                    </h2>

                    <div className="faq-stat-row">
                        <div className="faq-stat">
                            <div className="faq-stat-num">60%</div>
                            <div className="faq-stat-label">Organic Traffic Growth</div>
                        </div>
                        <div className="faq-stat">
                            <div className="faq-stat-num">50%</div>
                            <div className="faq-stat-label">Conversion Boost</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right — clean accordion */}
                <div className="faq-accordion">
                    {faqs.map((faqItem, index) => {
                        const isOpen = activeFAQ === index;

                        return (
                            <motion.div
                                className={`faq-item ${isOpen ? "active" : ""}`}
                                key={faqItem.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                            >
                                <button
                                    type="button"
                                    className="faq-trigger"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <div className="faq-trigger-left">
                                        <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                                        <h3>{faqItem.question}</h3>
                                    </div>
                                    <div className="faq-toggle">
                                        {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="faq-answer-text">
                                                <p>{faqItem.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
