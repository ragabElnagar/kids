'use client';
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import AboutOne from "@/components/About/AboutOne";
import { aboutUs, HeaderOneHome } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function About() {
  const { lang } = useParams();
  const breadcrumb = {
    title: aboutUs.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: aboutUs.title[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb: breadcrumb }} />
      <main className="main">
        <AboutOne />
      </main>
      <FooterOne />
    </>
  );
}
