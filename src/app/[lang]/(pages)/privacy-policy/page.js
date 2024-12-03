'use client';
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PrivacyPolicyContent from "@/components/Privacy/PrivacyPolicyContent";
import { HeaderOneHome, privacyPolicy } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function PrivacyPolicy() {
  const { lang } = useParams();
  const breadcrumb = {
    title: privacyPolicy.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: privacyPolicy.title[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <PrivacyPolicyContent />
      </main>
      <FooterOne />
    </>
  );
}
