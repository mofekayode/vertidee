import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "Portfolio - Vert Idee | Our Work & Projects",
};

const PortfolioStandardPage = () => {
  return (
    <PortfolioStandardMain/>
  );
};

export default PortfolioStandardPage;
