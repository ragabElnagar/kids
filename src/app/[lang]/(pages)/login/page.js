'use client';
import Login from "@/components/Auth/Login";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import operators from "@/data/operators";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useRouter } from 'next/navigation'
import { useMounted } from "@/components/useMounted";
import { HeaderOneHome, loginPageData } from "@/data/pageTitles";

export default function LoginPage() {
  const [msisdn, setMsisdn] = useState('');
  const [loading, setLoading] = useState(false);
  const { lang } = useParams();

  const successfulLogin = () => toast.success("Login Successful!");
  const failedLogin = () => toast.error("Login Failed!");

  const router = useRouter();

  const breadcrumb = {
    title: loginPageData.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: loginPageData.title[lang], href: "#" },
    ],
  };

  const login = async () => {
    setLoading(true);
    console.log(msisdn)
  const res = await fetch(`https://notifications.websites.blue/kids-portal/login?msisdn=${msisdn}`);
    const data = await res.json();

    console.log(data)

    setLoading(false);
    if (data.status === 'success') {
      // set cookie with token from response
      document.cookie = `kids-portal=${data.token}; path=/; max-age=86400`;
      successfulLogin();
      router.push('/' + lang);
    } else {
      failedLogin();
    }
  }

  const mounted = useMounted()
  if (!mounted) return null

  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main class="main">
        <Login msisdn={msisdn} setMsisdn={setMsisdn} login={login} loading={loading} lang={lang} />
      </main>
      <ToastContainer />
      <FooterOne />
    </>
  );
}
