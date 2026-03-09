import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Us Narrative */}
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Our Story
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                Vert Id&eacute;e Limited has evolved over the past thirteen years
                in capabilities, culture and KPIs. We opened our doors for
                business in February, 2013 and since then we have not rested on
                our oars to give our clients their deserved best.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-60">
          <div className="col-xl-9">
            <div className="ab-about-content tp_fade_bottom">
              <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "25px" }}>
                We don&apos;t just plan with a large brush stroke effect, we feel
                your brands, analyse your audience and we channel your spend into
                every aspect of your media strategy. What&apos;s right for your
                brand is right for us, not the other way round. With over 3
                decades collective experience, we know which media works and we
                can plan your campaign with the knowledge that your campaign will
                hit your target. No matter how lean your budget is, we assign
                each client and job equal respect.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy */}
        <div className="row mb-80">
          <div className="col-xl-9">
            <div className="tp_fade_bottom">
              <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Our Strategy
              </h4>
              <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
                Today&apos;s consumers are the most distracted in history and what
                we do is to create brand communication ideas that cut through the
                noise by travelling through different media to get the attention
                of your target consumers with adverts/contents that are involving.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
                If you&apos;re looking for an advertising agency that works for
                you, then look no further &mdash; VERT ID&Eacute;E LIMITED is it.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="row mb-80">
          <div className="col-xl-6 col-lg-6 mb-40">
            <div className="tp_fade_bottom" style={{ padding: "40px", background: "#f8f9fa", borderRadius: "12px", height: "100%" }}>
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px", color: "#61A706" }}>
                Our Vision
              </h4>
              <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
                To be the Nigerian most trusted creative partner, transforming
                brands and experiences through culturally smart strategy, human
                centered creativity and measurable business outcomes.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-40">
            <div className="tp_fade_bottom" style={{ padding: "40px", background: "#f8f9fa", borderRadius: "12px", height: "100%" }}>
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px", color: "#61A706" }}>
                Our Mission
              </h4>
              <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
                To craft memorable brand experiences and integrated campaigns that
                connect people and purpose. Combining deep local insight, design
                led thinking and data-driven discipline, we help clients grow
                market share, build lasting brand equity and create socially
                relevant impact.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="tp_fade_bottom">
              <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "40px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Our Core Values
              </h4>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                Integrity
              </h5>
              <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                We build trust by being transparent and keeping our word with
                clients, partners, within our team.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                Creativity with Purpose
              </h5>
              <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                Every idea must not just look good but work hard to drive real
                impact.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                Collaboration
              </h5>
              <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                We believe great ideas thrive in collective energy, so we foster
                open communication and shared ownership.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                Excellence
              </h5>
              <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                We don&apos;t settle for average; every brief is an opportunity to
                raise the bar.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
              <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                Empathy
              </h5>
              <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                Understanding people, clients, audiences, communities is central
                to how we design and deliver experiences.
              </p>
            </div>
          </div>
        </div>

        {/* How we live these values */}
        <div className="row mb-80">
          <div className="col-xl-9">
            <div className="tp_fade_bottom">
              <p style={{ fontSize: "17px", lineHeight: "1.8", fontStyle: "italic", padding: "30px", borderLeft: "4px solid #61A706", background: "#f8f9fa", borderRadius: "0 12px 12px 0" }}>
                We integrate them into our processes; from how we brainstorm and
                brief, to how we review work and celebrate wins. We hold regular
                creative check-ins to ensure our output aligns with these
                standards; our internal culture encourages accountability and
                mutual respect. In essence, our values aren&apos;t just
                statements, they&apos;re the lens through which we make every
                decision.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Our Services <br />
                    <span>WHAT WE DO</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Creative &amp; Branding</li>
                        <li>Media Planning &amp; Buying</li>
                        <li>Outdoor Advertising</li>
                        <li>Experiential Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Brand Implementation</li>
                        <li>Production &amp; Printing</li>
                        <li>Digital Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
