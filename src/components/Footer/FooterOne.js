'use client';
import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/images/logo.png";
import { Categories } from "@/data/videos";
import { useParams } from "next/navigation";
import { Footer } from "@/data/pageTitles";
import service from "@/data/service";

export default function FooterOne() {
  const { lang } = useParams();

  // Convert categories into an array
  const allCategories = Object.values(Categories);

  // Divide categories into two halves
  const firstHalf = allCategories.slice(0, Math.floor(allCategories.length / 2));
  const secondHalf = allCategories.slice(Math.floor(allCategories.length / 2));

  // Ensure AGE8_10 is included in the second half
  const age8_10Category = Categories.AGE8_10;
  if (!secondHalf.includes(age8_10Category)) {
    secondHalf.push(age8_10Category);
  }

  return (
    <footer className="footer-area pt-80">
      <div className="container">
        {/* Footer Top */}
        <div className="row footer-top row-gap-lg-4 row-gap-5">
          <div className="col-md-6 col-xl-4">
            <div className="footer-widget widget-about">
              <Link href="#" className="thumb d-inline-block">
                <Image src={logo} alt="logo" style={{ width: '90px' }} />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-widget">
              <h4 className="widget-title text-uppercase lh-1">
                {Footer.categoriesHeader[lang]}
              </h4>
              <ul className="footer-widget--list d-inline-block">
                {firstHalf.map((category, index) => (
                  <li className="footer-widget--item" key={index}>
                    <Link href={'/' + lang + category.href} className="footer-widget--link">
                      {category.name[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="footer-widget--list d-inline-block ms-5">
                {secondHalf.map((category, index) => (
                  <li className="footer-widget--item" key={index}>
                    <Link href={'/' + lang + category.href} className="footer-widget--link">
                      {category.name[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget">
              <h4 className="widget-title text-uppercase lh-1">{Footer.helpHeader[lang]}</h4>
              <ul className="footer-widget--list">
                <li className="footer-widget--item">
                  <Link href={'/' + lang + "/about"} className="footer-widget--link">
                    {Footer.aboutUs[lang]}
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href={'/' + lang + "/terms-and-conditions"} className="footer-widget--link">
                    {Footer.termsAndConditions[lang]}
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href={'/' + lang + "/privacy-policy"} className="footer-widget--link">
                    {Footer.privacyPolicy[lang]}
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href={'/' + lang + "/faq"} className="footer-widget--link">
                    {Footer.faq[lang]}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="row footer-bottom row-gap-3">
          <div className="col-sm-6 text-sm-start order-4 order-sm-0">
            <p className="mb-0">{service.name} © SecondProft 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
