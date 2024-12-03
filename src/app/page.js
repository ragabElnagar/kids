'use client';

function LangRedirect() {
  if (typeof window === 'undefined') {
    return "loading...";
  }
  const cookie = document.cookie;

  const langMatch = cookie.match(/lang=(\w+)/);
  const lang = langMatch ? langMatch[1] : 'en';

  window.location.href = `/${lang}`;
}

export default LangRedirect