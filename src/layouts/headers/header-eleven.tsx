'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";

// prop type
type IProps = {
  transparent?: boolean;
  cls?: string;
}
export default function HeaderEleven({ transparent = false, cls = '' }: IProps) {
  const { isSticky, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height z-index-5">
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${transparent ? 'transparent' : 'tp-inner-header-style-2'} tp-inner-header-mob-space ${isSticky ? "header-sticky" : ""}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  <Link className={`${transparent ? 'ab-logo-1' : 'logo-1'}`} href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/img/logo/vertidee-logo.svg"
                      alt="Vert Idee"
                    />
                  </Link>
                  <Link className={`${transparent ? 'ab-logo-2' : 'logo-2'}`} href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/img/logo/vertidee-logo.svg"
                      alt="Vert Idee"
                      style={{ filter: transparent ? "none" : "brightness(0) invert(1)" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      <HeaderMenus />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <ul>
                    <li>
                      <div className="tp-inner-bar tp-header-bar">
                        <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
