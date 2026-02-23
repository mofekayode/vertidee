import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog-modern";

export const metadata: Metadata = {
  title: "Blog - Vert Idee | Advertising Agency Lagos",
  description: "Latest insights, trends, and news from Vert Idee - Lagos' premier advertising agency. Stay updated on marketing strategies and industry developments.",
};

export default function BlogPage() {
  return <BlogModernMain />;
}
