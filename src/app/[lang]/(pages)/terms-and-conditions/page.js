'use client';
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import TermsAndConditionsContent from "@/components/Terms/TermsAndConditions";
import { HeaderOneHome, termsAndConditions } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function TermsAndConditions() {
  const { lang } = useParams();
  const breadcrumb = {
    title: termsAndConditions.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: termsAndConditions.title[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <TermsAndConditionsContent />
      </main>
      <FooterOne />
    </>
  );
}
