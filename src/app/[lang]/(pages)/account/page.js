'use client';
import Account from "@/components/Auth/account";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import operators from "@/data/operators";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useRouter } from 'next/navigation'
import { HeaderOneHome, myAccount } from "@/data/pageTitles";

export default function AccountPage() {
  const [msisdn, setMsisdn] = useState({});
  const [operator, setOperator] = useState(operators[0].prefix);
  const [loading, setLoading] = useState(false);
  const { lang } = useParams();

  const router = useRouter()

  useEffect(() => {
    const cookie = document.cookie;

    const isLoggedIn = cookie.includes('kids-portal');

    if (!isLoggedIn) {
      router.push('/' + lang + '/login');
    }

    const token = cookie.split(';').find(row => row.includes('kids-portal')).split('=')[1];

    const decodedToken = atob(token);

    const tokenData = JSON.parse(decodedToken);

    setMsisdn(tokenData);
  }, [])

  const cancelSubscription = async () => {
    // send cancel to vas
    setLoading(true);

    // clear cookie
    document.cookie = 'kids-portal=; path=/; max-age=0';

    // redirect to login

    setLoading(false);
    router.push('/' + lang + '/login');
  }


  const breadcrumb = {
    title: myAccount.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: myAccount.title[lang], href: "#" },
    ],
  };

  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main class="main">
        <Account msisdn={msisdn} cancelSubscription={cancelSubscription} loading={loading} lang={lang} />
      </main>
      <ToastContainer />
      <FooterOne />
    </>
  );
}
