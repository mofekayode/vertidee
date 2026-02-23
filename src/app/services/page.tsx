import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Our Services - Vert Idee | Advertising Agency Lagos",
  description: "Comprehensive advertising services including creative design, media production, outdoor advertising, experiential marketing, branding, and production in Lagos, Nigeria.",
};

export default function ServicesPage() {
  return <ServiceMain />;
}
