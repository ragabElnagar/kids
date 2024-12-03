"use client";

import Link from "next/link";
import Image from "next/image";

import { useThemeContext } from "@/context//ThemeContext";

import { menuOneData as data } from "@/data/menu";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMounted } from "../useMounted";
import LanguageDropdown from "../langSwitcher/langSwitcher";

export default function MenuOne() {
  const { toggleMobileMenu } = useThemeContext();
  const [showBox, setShowBox] = useState(false);
  const pathName = usePathname();
  const routePath = pathName;
  const { lang } = useParams();

  useEffect(() => {
    const closeSearch = () => {
      setShowBox(false);
    };

    window.addEventListener("click", closeSearch);

    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, []);

  const mounted = useMounted()
  if (!mounted) return null

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href == routePath)
        ? "active"
        : "";
    }

    return routePath == '/' + lang + menu.href ? "active" : "";
  };

  const toggleSearchBox = (e) => {
    e.stopPropagation();
    setShowBox(!showBox);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // check if kids-portal cookie is set
  const cookie = document.cookie;

  const isLoggedIn = cookie.includes('kids-portal');

  return (
    <div className="container nav-container position-absolute top-0 start-50 translate-middle-x lh-1">
      <div className="d-flex align-items-center justify-content-between pt-lg-0 pb-lg-0 pt-4 pb-4">
        <Link href={`/${lang}/`} className="main-logo me-lg-5 flex-shrink-0">
          <Image src={data.logo} alt="img" style={{width: '90px'}} />
        </Link>
        <nav className="navbar-nav m-auto d-lg-inline-block d-none">
          {data.menus && data.menus.length > 0 && (
            <ul className="main-menu d-flex">
              {data.menus.map((menu, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    menu.subMenus &&
                    menu.subMenus.length > 0 &&
                    "menu-item-has-children"
                  }`}
                >
                  <Link
                    href={'/' + lang + menu.href}
                    className={`menu-link ${checkActiveMenu(menu)}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.57373 12.3083H11.4266"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 10.3704C1 5.8656 1.51241 6.18 4.27061 3.728C5.47737 2.7968 7.35509 1 8.97662 1C10.5973 1 12.5126 2.788 13.7302 3.728C16.4884 6.18 17 5.8656 17 10.3704C17 17 15.3651 17 8.99999 17C2.63489 17 1 17 1 10.3704Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{menu.name[lang]}</span>
                    {menu.subMenus && menu.subMenus.length > 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="6"
                        viewBox="0 0 14 6"
                        fill="none"
                        className="mt-03"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.04953 2.42633C1.8325 1.56584 0.67034 1.2 0.113525 1.2V0C1.07338 0 2.51122 0.534159 3.84003 1.47367C4.86479 2.19822 5.87815 3.19989 6.61353 4.48107C7.3489 3.19989 8.36226 2.19822 9.38702 1.47367C10.7158 0.534159 12.1537 0 13.1135 0V1.2C12.5567 1.2 11.3946 1.56584 10.1775 2.42633C9.03311 3.23547 7.92033 4.42834 7.30175 6H6.61353L6.61353 6L6.61352 6H5.9253C5.30672 4.42834 4.19394 3.23547 3.04953 2.42633Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </Link>
                  {/* {menu.subMenus && menu.subMenus.length > 0 && (
                    <ul className="sub-menu">
                      {menu.subMenus.map((subMenu, key) => (
                        <li
                          key={key}
                          className={`sub-menu--item ${
                            subMenu.subMenus &&
                            subMenu.subMenus.length > 0 &&
                            "menu-item menu-item-has-children"
                          }`}
                        >
                          <Link
                            href={subMenu.href}
                            className={`sub-menu--link ${
                              routePath == subMenu.href ? "active" : ""
                            }`}
                          >
                            {subMenu.name}
                          </Link>
                          {subMenu.subMenus && subMenu.subMenus.length > 0 && (
                            <ul className="sub-menu">
                              {subMenu.subMenus.map((subMenuItem, i) => (
                                <li key={i} className="sub-menu--item">
                                  <Link
                                    href={subMenuItem.href}
                                    className={`sub-menu--link ${
                                      routePath == subMenuItem.href
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    {subMenuItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="nav-right-part nav-right-part-desktop d-inline-flex align-item-center ps-md-5 ps-3">
          <LanguageDropdown />
          <Link
            href={isLoggedIn ? '/' + lang + "/account" : '/' + lang + "/login"}
            className="hl-btn btn-base text-uppercase d-xl-inline-block d-none"
          >
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
          </Link>
          <button
            id="navigation-button"
            className="menu-button menu menu_btn d-lg-none border-0 bg-transparent"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M0 0H16V1.77778H0V0ZM0 6.22222H10.6667V8H0V6.22222ZM0 12.4444H16V14.2222H0V12.4444Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
