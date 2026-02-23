import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Vert Idee - Creative Advertising Agency in Lagos, Nigeria",
  description: "Full-service advertising agency in Lagos, Nigeria. We specialize in creative strategy, experiential marketing, outdoor advertising, branding, media production, and more.",
  keywords: "advertising agency Lagos, creative agency Nigeria, experiential marketing, outdoor advertising, branding, media production, Vert Idee",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
