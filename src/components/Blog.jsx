import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import "./Blog.css";

const blogs = [
    {
        id: "01",
        date: "June 14, 2026",
        category: "Digital Strategy",
        title: "Innovative Strategies for Engaging Customers in the Digital Age",
        description: "Discover how top brands leverage omni-channel data and user-centric copywriting to maximize active customer engagement and brand loyalty.",
        style: "orange",
        featured: true,
    },
    {
        id: "02",
        date: "July 2, 2026",
        category: "SEO & Search",
        title: "Maximizing Search Engine Authority in the Era of AI-Driven Search",
        description: "Unpack strategic frameworks to optimize your content structure, build semantic topical authority, and secure placements across search engines.",
        style: "lime",
        featured: false,
    },
    {
        id: "03",
        date: "August 8, 2026",
        category: "Performance",
        title: "A Data-First Blueprint to Optimizing Return on Ad Spend (ROAS)",
        description: "Learn targeted methods to audit ad campaign funnels, refine creative assets, and drive sustainable growth for digital transactions.",
        style: "purple",
        featured: false,
    },
];

function Blog() {
    const featured = blogs[0];
    const secondary = blogs.slice(1);

    return (
        <section className="blog section-lg" id="blog">
            <div className="container">
                {/* Header */}
                <div className="blog-top-row">
                    <div className="section-label">
                        <span>07</span>
                        <div></div>
                        <p>OUR BLOG</p>
                    </div>

                    <a href="#contact" className="btn-primary blog-view-all">
                        <span>View All</span>
                        <span className="btn-icon">
                            <ArrowUpRight size={17} strokeWidth={2} />
                        </span>
                    </a>
                </div>

                <motion.h2
                    className="blog-main-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Latest thinking on
                    <span className="accent-text"> digital growth.</span>
                </motion.h2>

                {/* Editorial layout */}
                <div className="blog-editorial">
                    {/* Featured article — large */}
                    <motion.article
                        className="blog-featured"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div
                            className="blog-feat-img"
                            style={{
                                background: "linear-gradient(135deg, #ffe5e0 0%, #ffd4c8 50%, #ffc4b8 100%)",
                            }}
                        >
                            <span className="blog-feat-id">{featured.id}</span>
                        </div>
                        <div className="blog-feat-content">
                            <div className="blog-feat-meta">
                                <span className="blog-feat-cat">{featured.category}</span>
                                <span className="blog-feat-date">{featured.date}</span>
                            </div>
                            <h3>{featured.title}</h3>
                            <p>{featured.description}</p>
                            <a href="#contact" className="blog-feat-link">
                                <span>Read Article</span>
                                <ArrowUpRight size={16} strokeWidth={2} />
                            </a>
                        </div>
                    </motion.article>

                    {/* Secondary articles — stacked */}
                    <div className="blog-secondary-stack">
                        {secondary.map((blog, index) => (
                            <motion.article
                                className="blog-secondary"
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="blog-sec-left">
                                    <span className="blog-sec-id">{blog.id}</span>
                                    <div className="blog-sec-divider"></div>
                                </div>
                                <div className="blog-sec-content">
                                    <div className="blog-sec-meta">
                                        <span className="blog-sec-cat">{blog.category}</span>
                                        <span className="blog-sec-date">{blog.date}</span>
                                    </div>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <a href="#contact" className="blog-sec-link">
                                        <span>Read</span>
                                        <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
