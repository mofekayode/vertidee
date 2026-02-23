import React from "react";
import { IdProps } from "@/types/custom-d-t";

const blogMeta: Record<number, { title: string; date: string }> = {
  1: { title: "Marketing Strategies for Startup Brands", date: "October 2022" },
  2: { title: "How Important is Social Media to Your Business", date: "October 2022" },
  3: { title: "Three Reasons Your Target Customers Don't Know Your Brand", date: "February 2022" },
  4: { title: "How to Build a Brand in Five Steps", date: "February 2022" },
};

export default function BlogDetailsBreadcrumb({ id }: IdProps) {
  const meta = blogMeta[Number(id)] || blogMeta[1];

  return (
    <div style={{ paddingTop: "160px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <span style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#888",
              display: "block",
              marginBottom: "16px",
            }}>
              {meta.date}
            </span>
            <h1 className="tp-char-animation" style={{
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "16px",
            }}>
              {meta.title}
            </h1>
            <span style={{ fontSize: "14px", color: "#888" }}>
              Vert Idee &middot; Fresh Ideas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
