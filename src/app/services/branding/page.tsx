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
    "Brand Refresh & Sign Creation",
    "Implementation & Maintenance",
  ],
  images: [
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
