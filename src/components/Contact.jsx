import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Website Design",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", service: "Website Design", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="contact section-lg dark-section" id="contact">
            <div className="container">
                {/* Large heading */}
                <motion.div
                    className="contact-hero"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-label">
                        <span>08</span>
                        <div></div>
                        <p>GET IN TOUCH</p>
                    </div>

                    <h2>
                        Let's build something
                        <span className="accent-text"> remarkable together.</span>
                    </h2>

                    <p className="contact-sub">
                        Ready to accelerate your brand? Send us a message or reach out directly — we respond within 24 hours.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Form */}
                    <motion.div
                        className="contact-form-wrap"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="form-row-2">
                                <div className="form-field">
                                    <label htmlFor="user-name">Name</label>
                                    <input
                                        type="text"
                                        id="user-name"
                                        required
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="user-email">Email</label>
                                    <input
                                        type="email"
                                        id="user-email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="user-service">Service</label>
                                <select
                                    id="user-service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="Website Design">Website Design / UI UX</option>
                                    <option value="SEO Management">SEO Management</option>
                                    <option value="Performance Marketing">Performance Marketing</option>
                                    <option value="Social Media">Social Media Management</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label htmlFor="user-message">Message</label>
                                <textarea
                                    id="user-message"
                                    rows="4"
                                    required
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="form-submit" disabled={submitted}>
                                {submitted ? (
                                    <span>Thank you! Message sent.</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={15} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact details */}
                    <motion.div
                        className="contact-details-panel"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="contact-detail">
                            <div className="cd-icon">
                                <Phone size={18} />
                            </div>
                            <div className="cd-text">
                                <span className="cd-label">CALL US</span>
                                <a href="tel:+917981496591" className="cd-value">+91 7981496591</a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="cd-icon">
                                <Mail size={18} />
                            </div>
                            <div className="cd-text">
                                <span className="cd-label">EMAIL US</span>
                                <a href="mailto:Info@ZenriseDigitech.com" className="cd-value">Info@ZenriseDigitech.com</a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="cd-icon">
                                <MapPin size={18} />
                            </div>
                            <div className="cd-text">
                                <span className="cd-label">VISIT OFFICE</span>
                                <span className="cd-value">Bangalore, Karnataka</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
