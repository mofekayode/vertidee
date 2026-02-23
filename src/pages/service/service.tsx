"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceHero from "@/components/service/service-hero";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Creative",
    description: "Logo creation, brand implementation & roadmap, event programs, visual identity, and creative strategy that sets your brand apart in a competitive marketplace.",
    image: "/assets/img/portfolio/other-jobs/Enchanteur_1.jpg",
    link: "/services/creative",
  },
  {
    id: 2,
    title: "Media",
    description: "Strategic radio jingles and TVC production that amplify your brand message to millions. We handle media planning, buying, and placement across Nigeria.",
    image: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(4).mpeg",
    link: "/services/media",
    noImage: true,
  },
  {
    id: 3,
    title: "Outdoor",
    description: "Out-of-home advertising solutions including billboards, signage, transit advertising, and environmental branding for maximum visibility and brand presence.",
    image: "/assets/img/portfolio/outdoor/5.jpg",
    link: "/services/outdoor",
  },
  {
    id: 4,
    title: "Experiential Marketing",
    description: "Modern trade activations, market activations, road shows, and product sampling campaigns that create memorable brand interactions and lasting impressions.",
    image: "/assets/img/portfolio/activation-sampling/IMG_3450.JPG",
    link: "/services/experiential",
  },
  {
    id: 5,
    title: "Branding",
    description: "Complete branding solutions for showrooms, offices, uniforms, and corporate gift items. We ensure your brand identity is consistently represented everywhere.",
    image: "/assets/img/portfolio/modern-trade/3.jpg",
    link: "/services/branding",
  },
  {
    id: 6,
    title: "Production",
    description: "High-quality printing and production of calendars, journals, jotters, banners, signage, and all marketing collateral with attention to detail and quality.",
    image: "/assets/img/portfolio/other-jobs/NDL1.jpg",
    link: "/services/production",
  },
];

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderEleven />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceHero />

            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <h4 className="tp-service-5-title">
                        We deliver comprehensive advertising solutions that <br />
                        drive real results for your brand across Nigeria.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {services.map((service) => (
                    <div key={service.id} className="col-xl-6 col-lg-6 mb-60">
                      <div className="tp_fade_bottom">
                        {!service.noImage && (
                          <div className="mb-25" style={{ overflow: "hidden", borderRadius: "8px", height: "300px" }}>
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={600}
                              height={300}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </div>
                        )}
                        <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                          <Link href={service.link}>{service.title}</Link>
                        </h4>
                        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#666", marginBottom: "15px" }}>
                          {service.description}
                        </p>
                        <Link href={service.link} style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                          Learn More &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <BigText />
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
