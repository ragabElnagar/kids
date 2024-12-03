import BootstrapClient from "@/components/Client/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "glightbox/dist/css/glightbox.min.css";
import "@/../../public/assets/scss/style.scss";

import { Dosis, Jost, Big_Shoulders_Display } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/context/ThemeContext";
import service from "@/data/service";
import languages from "@/data/lang";
import { Categories } from "@/data/videos";

const lowball = localFont({
  src: [
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueThin-2OM6o.ttf",
      weight: "100",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueExtraLight-vmBpL.ttf",
      weight: "200",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueLight-BWlAw.ttf",
      weight: "300",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueRegular-rglJB.ttf",
      weight: "400",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueMedium-8MmAn.ttf",
      weight: "500",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueSemiBold-MVv5P.ttf",
      weight: "600",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "../../../../webfonts/lowball-neue/LowballNeueBold-w18A6.ttf",
      weight: "700",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
  ],
  variable: "--heading-font",
});

const dosisSecondary = Dosis({
  subsets: ["latin"],
  variable: "--secondary-font",
  display: "swap",
  adjustFontFallback: false,
});

const dosisBody = Dosis({
  subsets: ["latin"],
  variable: "--body-font",
  display: "swap",
  adjustFontFallback: false,
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--jost-font",
  display: "swap",
  adjustFontFallback: false,
});

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--bigShoulder-font",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: service.name,
  description: service.description,
};

export function generateStaticParams() {
  const categories = Object.values(Categories).map((category) => category.id);
  return languages.flatMap((lang) =>
    categories.map((category) => ({ lang: lang.code, category }))
  );
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {children}
      <BootstrapClient />
    </ThemeProvider>
  );
}
