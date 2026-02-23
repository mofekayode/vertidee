import React from "react";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    title: "CREATIVE",
    desc: "Logo creation, brand implementation & roadmap, event programs and visual identity that sets your brand apart.",
    link: "/services/creative",
    num: "01",
  },
  {
    id: 2,
    title: "MEDIA",
    desc: "Strategic radio jingles and TVC production that amplify your brand message to millions across Nigeria.",
    link: "/services/media",
    num: "02",
  },
  {
    id: 3,
    title: "OUTDOOR",
    desc: "Out-of-home advertising solutions including billboards, signage, and transit advertising for maximum visibility.",
    link: "/services/outdoor",
    num: "03",
  },
  {
    id: 4,
    title: "EXPERIENTIAL MARKETING",
    desc: "Modern trade activations, market activations, road shows, and product sampling that create lasting impressions.",
    link: "/services/experiential",
    num: "04",
  },
  {
    id: 5,
    title: "BRANDING",
    desc: "Complete branding solutions for showrooms, offices, uniforms, and corporate gift items that reinforce your identity.",
    link: "/services/branding",
    num: "05",
  },
  {
    id: 6,
    title: "PRODUCTION",
    desc: "High-quality printing of calendars, journals, jotters, banners, signage and all marketing collateral.",
    link: "/services/production",
    num: "06",
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle tp-char-animation" style={{ display: "block", marginBottom: "15px" }}>What We Do</span>
              <h4 className="tp-section-title tp-char-animation">
                Our<br />
                <span>Services</span>
              </h4>
            </div>

            <div className="tp-service-left-btn tp-btn-bounce" style={{ marginTop: "40px" }}>
              <Link className="tp-btn-border" href="/services">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <span style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      fontFamily: "var(--tp-ff-heading)",
                      opacity: 0.15,
                      display: "block",
                      minWidth: "60px",
                    }}>
                      {s.num}
                    </span>
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href={s.link}>{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
