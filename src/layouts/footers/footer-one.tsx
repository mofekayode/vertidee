"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerOneAnimation } from "@/utils/footer-anim";

const footer_links = [
  { link: "/portfolio", title: "Portfolio" },
  { link: "/services", title: "Services" },
  { link: "/team", title: "Our Team" },
  { link: "/blog", title: "Blog" },
  { link: "/contact", title: "Contact" },
];
export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  }, [])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">{"Let's"} Talk!</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href="mailto:Vertideelimited@gmail.com">
                              Vertideelimited@gmail.com
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-phone tp_fade_bottom">
                            <Link href="tel:+23418003425740">
                              01-3425740
                            </Link>
                            {" / "}
                            <Link href="tel:+2348033483009">
                              0803 348 3009
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <Link
                              href="https://www.google.com/maps/place/45c+Sobo+Arobiodu+St,+Ikeja+GRA,+Ikeja+101233,+Lagos"
                              target="_blank"
                            >
                              45C Sobo Arobiodu Street, <br /> Ikeja GRA, Lagos
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Follow Us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link href="https://www.instagram.com/vertidee/" target="_blank">Instagram</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://www.facebook.com/vertidee/" target="_blank">Facebook</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://twitter.com/vertidee" target="_blank">Twitter</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://www.linkedin.com/company/vertidee/" target="_blank">LinkedIn</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/vertidee-logo.svg"
                      alt="Vert Idee Logo"
                      width={240}
                      height={100}
                      style={{ width: "200px", height: "auto", filter: "brightness(0) invert(1)" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} Vert Idee. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
