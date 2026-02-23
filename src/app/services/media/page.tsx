import { Metadata } from "next";
import MediaServicePage from "@/components/service/media-service-page";

export const metadata: Metadata = {
  title: "Media Services - Vert Idee | Advertising Agency Lagos",
  description: "Radio jingles, TVC production, and strategic media placement services from Vert Idee in Lagos, Nigeria.",
};

export default function MediaPage() {
  return <MediaServicePage />;
}
