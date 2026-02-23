"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const client_logos = [
  { src: "/assets/img/portfolio/about/1.jpg", alt: "Satnam Investment" },
  { src: "/assets/img/portfolio/about/2.jpg", alt: "TopwideCare" },
  { src: "/assets/img/portfolio/about/3.jpg", alt: "AAVA Brands" },
  { src: "/assets/img/portfolio/about/4.jpg", alt: "Dabur" },
  { src: "/assets/img/portfolio/about/5.jpg", alt: "Worldwide Healthcare" },
  { src: "/assets/img/portfolio/about/6.jpg", alt: "Sovereign Trust Insurance" },
  { src: "/assets/img/portfolio/about/7.jpg", alt: "X-Pression" },
  { src: "/assets/img/portfolio/about/8.jpg", alt: "Nigeria Distilleries Limited" },
  { src: "/assets/img/portfolio/about/9.jpg", alt: "The Promise" },
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={60}
        loop={0}
        className="brand-wrapper"
        gradient={true}
        gradientWidth={50}
      >
        {client_logos.map((logo, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "80px", width: "180px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 30px" }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={70}
              style={{ objectFit: "contain", height: "auto", maxHeight: "70px" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
