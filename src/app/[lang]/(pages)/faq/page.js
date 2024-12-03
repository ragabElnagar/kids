'use client';
import FaqOne from "@/components/Faq/FaqOne";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import { faqPage, HeaderOneHome } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function Faq() {
  const { lang } = useParams();
  const breadcrumb = {
    title: faqPage.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: faqPage.title[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <FaqOne />
      </main>
      <FooterOne />
    </>
  );
}
