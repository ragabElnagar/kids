"use client";

import Link from "next/link";
import Image from "next/image";
import { menuOneData as data } from "@/data/menu";
import socials from "@/data/social";
import { useThemeContext } from "@/context/ThemeContext";
import { useParams, usePathname } from "next/navigation";
import { useMounted } from "../useMounted";

export default function OffscreenMenu() {
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
  } = useThemeContext();
  const pathName = usePathname();
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");
  const { lang } = useParams();

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href == routePath)
        ? "active"
        : "";
    }

    return routePath == '/' + lang + menu.href ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };

  const mounted = useMounted()
  if (!mounted) return null

  const cookie = document.cookie;

  const isLoggedIn = cookie.includes('kids-portal');

  return (
    <div id="sidebar-menu" className="popup_mobile_menu">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <div className="menu">
        <div className="menu__top">
          <div className="menu_header d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link className="main-logo me-lg-5 me-4" href={data.href}>
                <Image src={data.logo} alt="img" style={{width: '90px'}} />
              </Link>
            </div>
            <div
              className="close_button d-flex align-items-center justify-content-center"
              onClick={toggleMobileMenu}
            >
              <button className="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="menu__content mobile_menu_nav">
          <div className="d-block">
            <div className="menu-main-menu-container">
              {data.menus && data.menus.length > 0 && (
                <ul id="menu-main-menu" className="menu_list">
                  {data.menus.map((menu, index) => (
                    <li
                      key={index}
                      className={`${
                        menu.subMenus && menu.subMenus.length > 0
                          ? "menu-item-has-children"
                          : ""
                      } ${
                        openSubMenuIndex === index ? "show" : ""
                      } nav-home menu-item`}
                    >
                      <Link
                        href={
                          menu.subMenus && menu.subMenus.length > 0
                            ? "#"
                            : '/' + lang + menu.href
                        }
                        onClick={(event) =>
                          menu.subMenus && menu.subMenus.length > 0
                            ? toggleSubMenu(index, event)
                            : hideMobileMenu(null)
                        }
                        className={`${checkActiveMenu(menu)}`}
                      >
                        {menu.name[lang]}
                      </Link>
                      {menu.subMenus && menu.subMenus.length > 0 && (
                        <ul
                          className={`sub-menu ${
                            openSubMenuIndex === index ? "open" : ""
                          }`}
                        >
                          {menu.subMenus.map((subMenu, key) => (
                            <li
                              key={key}
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2315"
                            >
                              <Link
                                href={subMenu.href}
                                className={`${
                                  routePath == subMenu.href ? "current" : ""
                                }`}
                                onClick={() => hideMobileMenu(index)}
                              >
                                {subMenu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* <!-- social sharea area --> */}
        <div className="social_share mt-auto">
        <Link
            href={isLoggedIn ? '/' + lang + "/account" : '/' + lang + "/login"}
            className="hl-btn btn-base text-uppercase d-xl-inline-block"
            >
            <button>
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0918 0.681633C9.49771 -0.227206 8.14931 -0.227215 7.55522 0.681633L4.55572 5.27005L2.26304 3.97109C1.11443 3.32031 -0.266602 4.34018 0.0445324 5.6094L1.60213 11.9633C1.67226 12.2494 1.93203 12.4509 2.23065 12.4509H15.4163C15.715 12.4509 15.9748 12.2494 16.0449 11.9633L17.6025 5.6094C17.9137 4.34017 16.5326 3.32032 15.384 3.97109L13.0913 5.27005L10.0918 0.681633ZM9.00466 1.3719C8.91986 1.24207 8.72716 1.24207 8.64236 1.3719L5.30994 6.46957C5.12341 6.75493 4.74268 6.84607 4.4441 6.67693L1.61851 5.07604C1.45442 4.98308 1.25713 5.12877 1.30158 5.31008L2.73965 11.1764H14.9074L16.3455 5.31008C16.3898 5.12877 16.1926 4.98308 16.0285 5.07604L13.2029 6.67693C12.9043 6.84607 12.5236 6.75493 12.3371 6.46957L9.00466 1.3719Z"
                fill="currentColor"
              ></path>
              <path
                d="M2.7884 13.7254C2.43128 13.7254 2.14178 14.0108 2.14178 14.3628C2.14178 14.7147 2.43128 15 2.7884 15H14.8584C15.2155 15 15.505 14.7147 15.505 14.3628C15.505 14.0108 15.2155 13.7254 14.8584 13.7254H2.7884Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>{isLoggedIn ? data.btnText[lang] : data.buttonTextTwo[lang]}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
