import { Metadata } from "next";
import ServiceDetailPage from "@/components/service/service-detail-page";

export const metadata: Metadata = {
  title: "Production Services - Vert Idee | Advertising Agency Lagos",
  description: "High-quality printing, calendars, journals, banners, and signage production from Vert Idee in Lagos, Nigeria.",
};

const data = {
  title: "Production Services",
  subtitle: "Print & Manufacturing",
  description: "High-quality production of all marketing materials and collateral. We handle everything from design to delivery, ensuring premium quality at every stage.",
  features: [
    "Calendar & Journal Production",
    "Jotter & Notebook Manufacturing",
    "Banner & Signage Production",
    "Large Format Printing",
    "Marketing Collateral Production",
    "Packaging Production",
  ],
  images: [
    "/assets/img/portfolio/general/NDL1.jpg",
    "/assets/img/portfolio/general/NDL2.jpg",
    "/assets/img/portfolio/general/NDL3.jpg",
    "/assets/img/portfolio/general/NDL4.jpg",
    "/assets/img/portfolio/general/NDL5.jpg",
    "/assets/img/portfolio/general/The_Promise_1.jpg",
    "/assets/img/portfolio/general/The_Promise_2.jpg",
    "/assets/img/portfolio/general/The_Promise_3.jpg",
    "/assets/img/portfolio/general/Topwide1.jpg",
    "/assets/img/portfolio/general/Topwide_2.jpg",
    "/assets/img/portfolio/general/Topwide_3.jpg",
    "/assets/img/portfolio/event-management/1.jpg",
    "/assets/img/portfolio/event-management/2.jpg",
    "/assets/img/portfolio/event-management/3.jpg",
    "/assets/img/portfolio/event-management/4.jpg",
    "/assets/img/portfolio/event-management/5.jpg",
    "/assets/img/portfolio/event-management/6.jpg",
  ],
};

export default function ProductionPage() {
  return <ServiceDetailPage data={data} />;
}
