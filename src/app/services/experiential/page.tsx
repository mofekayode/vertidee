import { Metadata } from "next";
import ServiceDetailPage from "@/components/service/service-detail-page";

export const metadata: Metadata = {
  title: "Experiential Marketing - Vert Idee | Advertising Agency Lagos",
  description: "Modern trade activations, market activation, road shows, and product sampling campaigns from Vert Idee in Lagos, Nigeria.",
};

const data = {
  title: "Experiential Marketing",
  subtitle: "Activations & Events",
  description: "Create memorable brand experiences that drive engagement and conversion. Our experiential marketing campaigns bring your brand directly to consumers through immersive activations.",
  videos: [
    "/assets/video/activation-video-1.mp4",
    "/assets/video/activation-video-2.mp4",
    "/assets/video/activation-video-3.mp4",
  ],
  features: [
    "Modern Trade Activations",
    "Market Activation Campaigns",
    "Road Shows & Product Sampling",
    "Brand Ambassador Management",
    "In-Store Promotions",
    "Consumer Engagement Events",
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
    "/assets/img/portfolio/activation-sampling/1.jpg",
    "/assets/img/portfolio/activation-sampling/2.jpg",
    "/assets/img/portfolio/activation-sampling/3.jpg",
    "/assets/img/portfolio/activation-sampling/4.jpg",
    "/assets/img/portfolio/activation-sampling/1_7.jpg",
    "/assets/img/portfolio/activation-sampling/2_4.jpg",
    "/assets/img/portfolio/activation-sampling/3_6.jpg",
    "/assets/img/portfolio/activation-sampling/4_5.jpg",
    "/assets/img/portfolio/activation-sampling/IMG_3382.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3385.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3450.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3483.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3484.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3502.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3503.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3521.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3530.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3544.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3629.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3632.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3633.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3635.JPG",
    "/assets/img/portfolio/activation-sampling/IMG_3637.JPG",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_10.34.35.jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_11.21.39_(1).jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_11.21.40.jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.21.jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.38_(1).jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.41.jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_14.48.14.jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_14.50.49_(1).jpeg",
    "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2026-01-27_at_10.29.03_AM.jpeg",
  ],
};

export default function ExperientialPage() {
  return <ServiceDetailPage data={data} />;
}
