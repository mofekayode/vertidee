import React from "react";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                Full-Service <br /> Advertising Solutions.
              </h4>
              <p className="tp_fade_bottom">
                From creative strategy to production, we deliver end-to-end advertising services that drive results for your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src="/assets/img/portfolio/activation-sampling/IMG_3484.JPG"
                  alt="Vertidee Services"
                  width={1400}
                  height={600}
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
