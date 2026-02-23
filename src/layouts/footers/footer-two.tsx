import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false, topCls = 'footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${whiteFooter ? "tp-footer-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/vertidee-logo.svg"
                      alt="Vert Idee"
                      width={240}
                      height={100}
                      style={{ width: "200px", height: "auto", filter: whiteFooter ? "none" : "brightness(0) invert(1)" }}
                    />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>
                    Full-service advertising agency <br /> based in Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/team">Our Team</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link
                      href="https://www.google.com/maps/place/45c+Sobo+Arobiodu+St,+Ikeja+GRA,+Ikeja+101233,+Lagos"
                      target="_blank"
                    >
                      45C Sobo Arobiodu St, Ikeja GRA, Lagos
                    </Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="tel:+2348033483009">T: 0803 348 3009</Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="mailto:Vertideelimited@gmail.com">E: Vertideelimited@gmail.com</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow clr={whiteFooter ? "currentcolor" : '#F3F3F4'} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${whiteFooter ? "tp-copyright-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved &mdash; {new Date().getFullYear()} &copy; Vert Idee
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link className="mb-10" href="https://www.linkedin.com/company/vertidee/" target="_blank">Linkedin</Link>
                <Link className="mb-10" href="https://twitter.com/vertidee" target="_blank">Twitter</Link>
                <Link className="mb-10" href="https://www.instagram.com/vertidee/" target="_blank">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
