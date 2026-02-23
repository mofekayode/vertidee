import React from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    palette: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
    radio: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/>
        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
      </svg>
    ),
    billboard: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="12" rx="2"/>
        <path d="M8 21V15"/>
        <path d="M16 21V15"/>
        <path d="M12 15v6"/>
      </svg>
    ),
    event: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    brand: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
        <path d="M11 3l1 6-4 0"/>
        <path d="M13 3l-1 6 4 0"/>
        <path d="M2 9h20"/>
      </svg>
    ),
    print: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

const HeaderMenus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className={menu.services_mega_menu || menu.dropdown_menus ? "has-dropdown" : ""}>
          <Link href={menu.link}>{menu.title}</Link>
          {menu.services_mega_menu ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-megamenu-wrapper">
                <div className="row gx-50">
                  <div className="col-xl-12">
                    <div className="tp-megamenu-list-box">
                      <div className="row">
                        {menu.services_mega_menu.services.map((service, i) => (
                          <div key={i} className="col-xl-4 col-lg-6">
                            <Link href={service.link} className="tp-service-menu-item d-flex align-items-start mb-25">
                              <div className="tp-service-menu-icon" style={{ marginRight: "15px", minWidth: "24px", marginTop: "3px" }}>
                                <ServiceIcon type={service.icon} />
                              </div>
                              <div className="tp-service-menu-content">
                                <h5 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                                  {service.title}
                                </h5>
                                <p style={{ fontSize: "13px", color: "#777", margin: 0, lineHeight: "1.5" }}>
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="row mt-15">
                        <div className="col-12">
                          <div style={{ borderTop: "1px solid #eee", paddingTop: "15px" }}>
                            <Link href="/services" style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                              View All Services &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link href={mm.link}>{mm.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
