import React from "react";
import Image from "next/image";
import Link from "next/link";
import articles, { blogIdToSlug } from "@/data/blog-articles";

const blogMeta: Record<number, { title: string; date: string; img: string }> = {
  1: { title: "Marketing Strategies for Startup Brands", date: "October 27, 2022", img: "/assets/img/blog/strat.jpeg" },
  2: { title: "How Important is Social Media to Your Business", date: "October 27, 2022", img: "/assets/img/blog/social-media-blog.jpg" },
  3: { title: "Three Reasons Your Target Customers Don't Know Your Brand", date: "February 11, 2022", img: "/assets/img/blog/handshake.jpeg" },
  4: { title: "How to Build a Brand in Five Steps", date: "February 11, 2022", img: "/assets/img/blog/brand-building.jpeg" },
};

export default function BlogDetailsArea({ id }: { id?: number }) {
  const blogId = id || 1;
  const slug = blogIdToSlug[blogId];
  const article = slug ? articles[slug] : null;
  const meta = blogMeta[blogId] || blogMeta[1];

  return (
    <section style={{ paddingTop: "60px", paddingBottom: "80px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            {/* Article hero image */}
            <div style={{ overflow: "hidden", borderRadius: "12px", marginBottom: "40px" }}>
              <Image
                src={meta.img}
                alt={meta.title}
                width={900}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Article body */}
            {article ? (
              <>
                {article.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: "32px" }}>
                    {section.heading && (
                      <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", lineHeight: 1.4 }}>
                        {section.heading}
                      </h3>
                    )}
                    {section.paragraphs.map((p, j) => (
                      <p key={j} style={{ fontSize: "17px", lineHeight: "1.9", color: "#333", marginBottom: j < section.paragraphs.length - 1 ? "16px" : "0" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <p style={{ fontSize: "17px", color: "#666" }}>Article content coming soon.</p>
            )}

            {/* Author */}
            <div style={{
              marginTop: "50px",
              padding: "30px",
              background: "#f8f8f8",
              borderRadius: "12px",
              borderLeft: "4px solid #1a1a2e",
            }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Vert Idee</h5>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.7", margin: 0 }}>
                Creative advertising agency based in Lagos, Nigeria. We specialize in brand activations, outdoor advertising, media production, and experiential marketing.
              </p>
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: "40px" }}>
              <Link href="/blog" className="tp-btn-border" style={{ display: "inline-block" }}>
                <span className="tp-btn-border-wrap">
                  <span className="text-1">Back to Blog</span>
                  <span className="text-2">Back to Blog</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
