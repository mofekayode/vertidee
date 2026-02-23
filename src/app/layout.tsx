import type { Metadata } from "next";
import {
  Syne,
  Aladin,
  Marcellus,
} from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
// const big_shoulders = Big_Shoulders_Display({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--tp-ff-shoulders",
// });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "Vert Idee - Creative Advertising Agency in Lagos, Nigeria",
  description: "Full-service advertising agency in Lagos, Nigeria specializing in creative strategy, experiential marketing, outdoor advertising, branding, and media production.",
  keywords: "advertising agency Lagos, creative agency Nigeria, experiential marketing, outdoor advertising, branding, media production, Vert Idee",
  openGraph: {
    title: "Vert Idee - Creative Advertising Agency",
    description: "Full-service advertising agency in Lagos, Nigeria. We bring brands to life.",
    type: "website",
    locale: "en_NG",
    url: "https://vertidee.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vert Idee - Creative Advertising Agency",
    description: "Full-service advertising agency in Lagos, Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: "Vert Idee",
    description: "Full-service advertising agency in Lagos, Nigeria specializing in creative strategy, experiential marketing, outdoor advertising, branding, and media production.",
    url: "https://vertidee.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45C Sobo Arobiodu Street",
      addressLocality: "Ikeja GRA, Lagos",
      postalCode: "101233",
      addressCountry: "NG",
    },
    telephone: "+234-1-3425740",
    email: "Vertideelimited@gmail.com",
    areaServed: "Nigeria",
    serviceType: [
      "Creative Design",
      "Media Production",
      "Outdoor Advertising",
      "Experiential Marketing",
      "Branding",
      "Print Production",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="light">
          <VideoProvider>
            {children}
          </VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

