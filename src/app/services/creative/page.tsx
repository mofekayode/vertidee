import { Metadata } from "next";
import ServiceDetailPage from "@/components/service/service-detail-page";

export const metadata: Metadata = {
  title: "Creative Services - Vert Idee | Advertising Agency Lagos",
  description: "Logo creation, brand implementation, event programs, and creative strategy from Vert Idee, Lagos' premier advertising agency.",
};

const data = {
  title: "Creative Services",
  subtitle: "Brand Strategy & Design",
  description: "We craft compelling brand identities and creative strategies that resonate with your target audience. From logo design to complete brand implementation, our creative team delivers work that stands out.",
  features: [
    "Logo Creation & Visual Identity",
    "Brand Implementation & Roadmap",
    "Event Program Design",
    "Creative Campaign Strategy",
    "Brand Guidelines Development",
    "Packaging Design",
  ],
  images: [
    "/assets/img/portfolio/general/Enchanteur_1.jpg",
    "/assets/img/portfolio/general/Enchanteur_2.jpg",
    "/assets/img/portfolio/general/Enchanteur_3.jpg",
    "/assets/img/portfolio/general/Enchanteur_4.jpg",
    "/assets/img/portfolio/general/Enchanteur_5.jpg",
    "/assets/img/portfolio/general/Enchanteur_6.jpg",
    "/assets/img/portfolio/general/Enchanteur_7.jpg",
    "/assets/img/portfolio/general/Enchanteur_8.jpg",
    "/assets/img/portfolio/general/Bio_Oil_1.jpg",
    "/assets/img/portfolio/general/Bio_Oil_2.jpg",
    "/assets/img/portfolio/general/Bio_Oil_3.jpg",
    "/assets/img/portfolio/general/Bio_Oil_4.jpg",
    "/assets/img/portfolio/general/ORS_1.jpg",
    "/assets/img/portfolio/general/ORS_2.jpg",
    "/assets/img/portfolio/general/ORS_3.jpg",
    "/assets/img/portfolio/general/ORS_4.jpg",
  ],
};

export default function CreativePage() {
  return <ServiceDetailPage data={data} />;
}
