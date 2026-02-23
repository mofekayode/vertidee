"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceDetailArea, { ServiceDetailData } from "@/components/service/service-detail-area";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import { charAnimation, fadeAnimation } from "@/utils/title-animation";

export default function ServiceDetailPage({ data }: { data: ServiceDetailData }) {
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
            <ServiceDetailArea data={data} />
            <BigText />
          </main>
          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
}
