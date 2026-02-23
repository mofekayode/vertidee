"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image from "next/image";
import Link from "next/link";

type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: string;
  title: string;
  category: string;
};

const project_data: IProject[] = [
  {
    id: 1,
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: "/assets/img/portfolio/activation-sampling/IMG_3450.JPG",
    title: "Product Sampling",
    category: "Activation",
  },
  {
    id: 2,
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: "/assets/img/portfolio/outdoor/1.jpg",
    title: "Billboard Campaign",
    category: "Outdoor",
  },
  {
    id: 3,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: "/assets/img/portfolio/event-management/1.jpg",
    title: "Corporate Events",
    category: "Events",
  },
  {
    id: 4,
    cls: "",
    cls_2: "height-4",
    img: "/assets/img/portfolio/modern-trade/3.jpg",
    title: "Modern Trade",
    category: "Retail",
  },
  {
    id: 5,
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: "/assets/img/portfolio/other-jobs/Enchanteur_1.jpg",
    title: "Brand Activation",
    category: "Branding",
  },
  {
    id: 6,
    cls: "",
    cls_2: "height-6",
    img: "/assets/img/portfolio/training/4.jpg",
    title: "Team Training",
    category: "Training",
  },
];

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Project"
      >
        <Link className="cursor-hide" href="/portfolio">
          <Image
            data-speed=".8"
            src={item.img}
            alt={item.title}
            width={800}
            height={600}
            style={{ height: "auto", objectFit: "cover" }}
          />
        </Link>
      </div>
    </div>
  );
}

type IProps = {
  style_2?: boolean;
};
const ProjectOne = ({ style_2 = false }: IProps) => {
  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {project_data.slice(0, 3).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {project_data.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/activation-sampling/IMG_3502.JPG)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
