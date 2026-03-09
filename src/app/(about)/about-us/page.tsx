import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "About Us - Vert Idee | Advertising Agency Lagos",
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
