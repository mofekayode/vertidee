import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog-modern";

export const metadata: Metadata = {
  title: "Blog - Vert Idee | Advertising Agency Lagos",
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;
