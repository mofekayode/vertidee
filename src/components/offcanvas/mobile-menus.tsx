import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li
            key={menu.id}
            className={menu.dropdown_menus ? "has-dropdown" : ""}
          >
            {menu.dropdown_menus ? (
              <>
                <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                  {menu.title}
                  <button className="dropdown-toggle-btn">
                    <i className="fa-light fa-plus"></i>
                  </button>
                </a>
                <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  {menu.dropdown_menus.map((dm, i) => (
                    <li key={i}>
                      <Link href={dm.link}>{dm.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={menu.link}>{menu.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
