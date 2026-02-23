"use client";
import React from "react";
import Image from "next/image";

const highlights_data = [
  {
    id: 1,
    img: "/assets/img/portfolio/activation-sampling/IMG_3382.JPG",
    subtitle: "100+",
    title: "Successful Activations & Product Sampling Campaigns",
    date: "Nationwide",
  },
  {
    id: 2,
    img: "/assets/img/portfolio/outdoor/5.jpg",
    subtitle: "50+",
    title: "Outdoor & Billboard Campaigns Across Nigeria",
    date: "Lagos & Beyond",
  },
  {
    id: 3,
    img: "/assets/img/portfolio/event-management/3.jpg",
    subtitle: "30+",
    title: "Corporate Events & Brand Experiences Managed",
    date: "Major Cities",
  },
  {
    id: 4,
    img: "/assets/img/portfolio/modern-trade/1.jpg",
    subtitle: "40+",
    title: "Modern Trade & Retail Branding Projects",
    date: "Retail Chains",
  },
  {
    id: 5,
    img: "/assets/img/portfolio/other-jobs/NDL1.jpg",
    subtitle: "20+",
    title: "Brand Partners Across Multiple Industries",
    date: "FMCG & More",
  },
  {
    id: 6,
    img: "/assets/img/portfolio/training/1.jpg",
    subtitle: "500+",
    title: "Trained Brand Ambassadors & Field Teams",
    date: "Professional",
  },
];

type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Our Impact <br /> <span>& Achievements</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  Our Highlights
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {highlights_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {highlights_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
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

export default AwardOne;
