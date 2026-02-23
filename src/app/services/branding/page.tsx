import { Metadata } from "next";
import ServiceDetailPage from "@/components/service/service-detail-page";

export const metadata: Metadata = {
  title: "Branding Services - Vert Idee | Advertising Agency Lagos",
  description: "Showroom branding, office branding, uniforms, and corporate gift items from Vert Idee in Lagos, Nigeria.",
};

const data = {
  title: "Branding Solutions",
  subtitle: "Corporate & Environmental",
  description: "Ensure consistent brand presence across every touchpoint. From showroom branding to corporate gifts, we create cohesive brand experiences that reinforce your identity.",
  features: [
    "Showroom & Retail Branding",
    "Office Space Branding",
    "Uniform Design & Production",
    "Corporate Gift Items",
    "Vehicle Branding",
    "Environmental Graphics",
  ],
  images: [
    "/assets/img/portfolio/modern-trade/1.jpg",
    "/assets/img/portfolio/modern-trade/2.jpg",
    "/assets/img/portfolio/modern-trade/3.jpg",
    "/assets/img/portfolio/modern-trade/4.jpg",
    "/assets/img/portfolio/modern-trade/5.jpg",
    "/assets/img/portfolio/modern-trade/6.jpg",
    "/assets/img/portfolio/modern-trade/7.jpg",
    "/assets/img/portfolio/modern-trade/8.jpg",
    "/assets/img/portfolio/general/STI_1.jpg",
    "/assets/img/portfolio/general/STI_2.jpg",
    "/assets/img/portfolio/general/STI_3.jpg",
    "/assets/img/portfolio/general/STI_4.jpg",
    "/assets/img/portfolio/general/Satnam_1.jpg",
    "/assets/img/portfolio/general/Xpression.jpg",
  ],
};

export default function BrandingPage() {
  return <ServiceDetailPage data={data} />;
}
