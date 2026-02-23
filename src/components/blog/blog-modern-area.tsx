import React from "react";
import Image from "next/image";
import Link from "next/link";

const blog_articles = [
  {
    id: 1,
    img: "/assets/img/blog/strat.jpeg",
    title: "Marketing Strategies for Startup Brands",
    date: "October 27, 2022",
    excerpt: "It is every business's big dream that they begin making sales immediately after their brand is launched. However, this is not always the case as most start-ups begin without a structured marketing strategy.",
  },
  {
    id: 2,
    img: "/assets/img/blog/social-media-blog.jpg",
    title: "How Important is Social Media to Your Business",
    date: "October 27, 2022",
    excerpt: "Over the years, Social media has become the most influential tool to network with people across the globe, making it the most influential way to digitally market products and services.",
  },
  {
    id: 3,
    img: "/assets/img/blog/handshake.jpeg",
    title: "Three Reasons Your Target Customers Don't Know Your Brand",
    date: "February 11, 2022",
    excerpt: "Imagine how it feels to have your new house collapse just when you are about to move in? That's exactly how it feels to have a brand that your target audience does not even know about.",
  },
  {
    id: 4,
    img: "/assets/img/blog/brand-building.jpeg",
    title: "How to Build a Brand in Five Steps",
    date: "February 11, 2022",
    excerpt: "Building a brand is setting up an outward perception of your company. It is creating an impression for everyone who comes in contact with your services and products.",
  },
];

export default function BlogModern() {
  return (
    <div className="pt-170 pb-120">
      <div className="container">
        {/* Header */}
        <div className="row mb-60">
          <div className="col-xl-8">
            <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", color: "#888", display: "block", marginBottom: "12px" }}>
              Fresh Ideas
            </span>
            <h2 className="tp-char-animation" style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2 }}>
              Our Blog
            </h2>
            <p style={{ fontSize: "18px", color: "#666", marginTop: "16px", maxWidth: "600px" }}>
              Insights on branding, marketing strategy, and building your business in Nigeria.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="row">
          {blog_articles.map((article) => (
            <div key={article.id} className="col-xl-6 col-lg-6 col-md-6 mb-50">
              <Link href={`/blog-details/${article.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ cursor: "pointer" }}>
                  <div style={{ overflow: "hidden", borderRadius: "12px", marginBottom: "20px" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      width={700}
                      height={400}
                      style={{ width: "100%", height: "350px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    />
                  </div>
                  <span style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {article.date}
                  </span>
                  <h4 style={{ fontSize: "24px", fontWeight: 700, lineHeight: 1.3, margin: "10px 0 12px", transition: "color 0.3s ease" }}>
                    {article.title}
                  </h4>
                  <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7 }}>
                    {article.excerpt}
                  </p>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#888", marginTop: "8px", display: "inline-block" }}>
                    Vert Idee &middot; Fresh Ideas
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
