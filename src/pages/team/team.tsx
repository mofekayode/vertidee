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
import TeamArea from "@/components/team/team-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";

const TeamMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">Vert Id&eacute;e</span>
                      <h4 className="tm-hero-title tp-char-animation">
                        About Us
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        Vert Id&eacute;e is a Nigerian integrated marketing
                        communications agency with an incredible turn-around time
                        for briefs; blending cultural insight and performance
                        marketing to help organisations build brand relevance and
                        market penetration experiences from awareness to conversion
                        and long-term loyalty, for great impact on ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hero */}

            {/* about narrative */}
            <div className="container" style={{ paddingBottom: "80px" }}>
              <div className="row">
                <div className="col-xl-9">
                  <div className="tp_fade_bottom">
                    <h4 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "25px" }}>
                      Our Story
                    </h4>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
                      Vert Id&eacute;e Limited has evolved over the past thirteen
                      years in capabilities, culture and KPIs. We opened our doors
                      for business in February, 2013 and since then we have not
                      rested on our oars to give our clients their deserved best.
                    </p>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
                      We don&apos;t just plan with a large brush stroke effect, we
                      feel your brands, analyse your audience and we channel your
                      spend into every aspect of your media strategy. What&apos;s
                      right for your brand is right for us, not the other way
                      round. With over 3 decades collective experience, we know
                      which media works and we can plan your campaign with the
                      knowledge that your campaign will hit your target. No matter
                      how lean your budget is, we assign each client and job equal
                      respect.
                    </p>
                  </div>
                </div>
              </div>

              {/* strategy */}
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col-xl-9">
                  <div className="tp_fade_bottom">
                    <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>
                      Our Strategy
                    </h4>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
                      Today&apos;s consumers are the most distracted in history
                      and what we do is to create brand communication ideas that
                      cut through the noise by travelling through different media
                      to get the attention of your target consumers with
                      adverts/contents that are involving.
                    </p>
                    <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
                      If you&apos;re looking for an advertising agency that works
                      for you, then look no further &mdash; VERT ID&Eacute;E
                      LIMITED is it.
                    </p>
                  </div>
                </div>
              </div>

              {/* vision & mission */}
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-xl-6 col-lg-6" style={{ marginBottom: "30px" }}>
                  <div className="tp_fade_bottom" style={{ padding: "40px", background: "#f8f9fa", borderRadius: "12px", height: "100%" }}>
                    <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px", color: "#61A706" }}>
                      Our Vision
                    </h4>
                    <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
                      To be the Nigerian most trusted creative partner,
                      transforming brands and experiences through culturally smart
                      strategy, human centered creativity and measurable business
                      outcomes.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6" style={{ marginBottom: "30px" }}>
                  <div className="tp_fade_bottom" style={{ padding: "40px", background: "#f8f9fa", borderRadius: "12px", height: "100%" }}>
                    <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px", color: "#61A706" }}>
                      Our Mission
                    </h4>
                    <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
                      To craft memorable brand experiences and integrated campaigns
                      that connect people and purpose. Combining deep local
                      insight, design led thinking and data-driven discipline, we
                      help clients grow market share, build lasting brand equity
                      and create socially relevant impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* core values */}
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col-xl-12">
                  <div className="tp_fade_bottom">
                    <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "40px", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Our Core Values
                    </h4>
                  </div>
                </div>
                {[
                  { title: "Integrity", desc: "We build trust by being transparent and keeping our word with clients, partners, within our team." },
                  { title: "Creativity with Purpose", desc: "Every idea must not just look good but work hard to drive real impact." },
                  { title: "Collaboration", desc: "We believe great ideas thrive in collective energy, so we foster open communication and shared ownership." },
                  { title: "Excellence", desc: "We don\u2019t settle for average; every brief is an opportunity to raise the bar." },
                  { title: "Empathy", desc: "Understanding people, clients, audiences, communities is central to how we design and deliver experiences." },
                ].map((v, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: "25px" }}>
                    <div className="tp_fade_bottom" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "12px", height: "100%" }}>
                      <h5 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#61A706" }}>
                        {v.title}
                      </h5>
                      <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* how we live values */}
              <div className="row" style={{ marginTop: "20px", marginBottom: "40px" }}>
                <div className="col-xl-9">
                  <div className="tp_fade_bottom">
                    <p style={{ fontSize: "17px", lineHeight: "1.8", fontStyle: "italic", padding: "30px", borderLeft: "4px solid #61A706", background: "#f8f9fa", borderRadius: "0 12px 12px 0" }}>
                      We integrate them into our processes; from how we brainstorm
                      and brief, to how we review work and celebrate wins. We hold
                      regular creative check-ins to ensure our output aligns with
                      these standards; our internal culture encourages
                      accountability and mutual respect. In essence, our values
                      aren&apos;t just statements, they&apos;re the lens through
                      which we make every decision.
                    </p>
                  </div>
                </div>
              </div>

              {/* meet the team heading */}
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-xl-12">
                  <div className="tp_fade_bottom">
                    <h4 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "15px" }}>
                      Meet Our Team
                    </h4>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", maxWidth: "700px", marginBottom: "40px" }}>
                      A passionate team of advertising professionals dedicated to
                      delivering exceptional results across creative design, media
                      strategy, and experiential marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end about narrative */}

            {/* team area */}
            <TeamArea />
            {/* team area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" whiteFooter={true} />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamMain;
