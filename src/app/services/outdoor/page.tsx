import { Metadata } from "next";
import ServiceDetailPage from "@/components/service/service-detail-page";

export const metadata: Metadata = {
  title: "Outdoor Advertising - Vert Idee | Advertising Agency Lagos",
  description: "Out-of-home advertising solutions including billboards, signage, and transit ads from Vert Idee in Lagos, Nigeria.",
};

const data = {
  title: "Outdoor Advertising",
  subtitle: "Out-of-Home Solutions",
  description: "Maximize your brand visibility with our comprehensive outdoor advertising solutions. From billboards to transit advertising, we ensure your brand is seen by the right audience.",
  features: [
    "Billboard Design & Placement",
    "BRT Adverts",
    "Bus Stop Adverts",
    "Lamppost Adverts",
    "Advertising Trucks",
    "Signage Production & Installation",
  ],
  images: [
    "/assets/img/portfolio/outdoor/1.jpg",
    "/assets/img/portfolio/outdoor/2.jpg",
    "/assets/img/portfolio/outdoor/3.jpg",
    "/assets/img/portfolio/outdoor/4.jpg",
    "/assets/img/portfolio/outdoor/5.jpg",
    "/assets/img/portfolio/outdoor/6.jpg",
    "/assets/img/portfolio/outdoor/7.jpg",
    "/assets/img/portfolio/outdoor/8.jpg",
    "/assets/img/portfolio/outdoor/9.jpg",
    "/assets/img/portfolio/outdoor/10.jpg",
    "/assets/img/portfolio/outdoor/11.jpg",
    "/assets/img/portfolio/outdoor/12.jpg",
    "/assets/img/portfolio/outdoor/13.jpg",
    "/assets/img/portfolio/outdoor/14.jpg",
    "/assets/img/portfolio/outdoor/15.jpg",
    "/assets/img/portfolio/outdoor/16.jpg",
    "/assets/img/portfolio/outdoor/17.jpg",
    "/assets/img/portfolio/outdoor/18.jpg",
    "/assets/img/portfolio/outdoor/19.jpg",
    "/assets/img/portfolio/outdoor/20.jpg",
  ],
};

export default function OutdoorPage() {
  return <ServiceDetailPage data={data} />;
}
