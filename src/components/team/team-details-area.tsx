"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// images
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";
import { IdProps } from "@/types/custom-d-t";
import Link from "next/link";

interface MemberData {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export default function TeamDetailsArea({ id }: IdProps) {
  const [item, setItem] = useState<MemberData | null>(null);

  useEffect(() => {
    fetch(`/api/team/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return null;

  return (
    <div className="tm-details-wrapper p-relative">
      <div className="tm-details-shape-1">
        <Image src={shape_1} alt="shape" />
      </div>
      <div className="tm-details-shape-2">
        <Image src={shape_2} alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center align-items-xxl-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="tm-details-content-wrap z-index-5">
              <div className="tm-details-title-box mb-20">
                <span className="tm-hero-subtitle">{item.designation}</span>
                <h4 className="tm-details-title">{item.name}</h4>
              </div>
              <div className="tm-details-text">
                <p>{item.description}</p>
              </div>
              <div className="tm-details-social">
                <span className="tm-details-social-title">Follow:</span>
                <Link href="https://facebook.com/vertidee" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="https://twitter.com/vertidee" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="https://linkedin.com/company/vertidee" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5">
            <div className="tm-details-thumb">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={600}
                style={{ height: "auto", width: "100%", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
