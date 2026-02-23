import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItemTwo({ item }: { item: IBlogDT }) {
  return (
    <Link href={`/blog-details/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="tp-blog-item tp_fade_bottom" style={{ cursor: "pointer" }}>
        <div className="tp-blog-thumb fix p-relative">
          <Image src={item.img!} alt="blog-img" style={{ height: "auto" }} />
          <div className="tp-blog-meta">
            <span>{item.date}</span>
          </div>
        </div>
        <div className="tp-blog-content">
          <span>{item.category}</span>
          <h4 className="tp-blog-title-sm">
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </h4>
        </div>
      </div>
    </Link>
  );
}
