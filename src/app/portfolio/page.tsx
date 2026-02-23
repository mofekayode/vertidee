import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "Our Portfolio - Vert Idee | Advertising Agency Lagos",
  description: "Explore our portfolio of successful advertising campaigns, brand activations, outdoor advertising, event management, and more across Nigeria.",
};

export default function PortfolioPage() {
  return <PortfolioStandardMain />;
}
