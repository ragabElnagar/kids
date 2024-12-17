// import BootstrapClient from "@/components/Client/BootstrapClient";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/swiper-bundle.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "glightbox/dist/css/glightbox.min.css";
// import "@/../../public/assets/scss/style.scss";

// import { Dosis, Jost, Big_Shoulders_Display } from "next/font/google";
// import localFont from "next/font/local";
// import { ThemeProvider } from "@/context/ThemeContext";
// import service from "@/data/service";
// import languages from "@/data/lang";

// const lowball = localFont({
//   src: [
//     {
//       path: "../webfonts/lowball-neue/LowballNeueThin-2OM6o.ttf",
//       weight: "100",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueExtraLight-vmBpL.ttf",
//       weight: "200",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueLight-BWlAw.ttf",
//       weight: "300",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueRegular-rglJB.ttf",
//       weight: "400",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueMedium-8MmAn.ttf",
//       weight: "500",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueSemiBold-MVv5P.ttf",
//       weight: "600",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//     {
//       path: "../webfonts/lowball-neue/LowballNeueBold-w18A6.ttf",
//       weight: "700",
//       style: "normal",
//       display: "swap",
//       adjustFontFallback: false,
//     },
//   ],
//   variable: "--heading-font",
// });

// const dosisSecondary = Dosis({
//   subsets: ["latin"],
//   variable: "--secondary-font",
//   display: "swap",
//   adjustFontFallback: false,
// });

// const dosisBody = Dosis({
//   subsets: ["latin"],
//   variable: "--body-font",
//   display: "swap",
//   adjustFontFallback: false,
// });

// const jost = Jost({
//   subsets: ["latin"],
//   variable: "--jost-font",
//   display: "swap",
//   adjustFontFallback: false,
// });

// const bigShouldersDisplay = Big_Shoulders_Display({
//   subsets: ["latin"],
//   variable: "--bigShoulder-font",
//   display: "swap",
//   adjustFontFallback: false,
// });

// export const metadata = {
//   title: service.name,
//   description: service.description,
// };

// export function generateStaticParams() {
//   // Define all supported language codes
//   return languages.map((lang) => ({
//     lang: lang.code,
//   }))
// }


// export default function RootLayout({ children }) {
//   return (
//     <ThemeProvider>
//       <html lang="en">
//         <meta charSet="utf-8" />
//         <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//         <meta name="robots" content="noindex, follow" />

//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <link rel="icon" href="favicon.ico" sizes="any" />
//         <body
//           className={`${lowball.variable} ${dosisSecondary.variable} ${dosisBody.variable} ${jost.variable} ${bigShouldersDisplay.variable}`}
//         >
//           {children}
//           <BootstrapClient />
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// }

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

// Configure local fonts
const lowball = localFont({
  src: [
    { path: "../webfonts/lowball-neue/LowballNeueThin-2OM6o.ttf", weight: "100", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueExtraLight-vmBpL.ttf", weight: "200", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueLight-BWlAw.ttf", weight: "300", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueRegular-rglJB.ttf", weight: "400", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueMedium-8MmAn.ttf", weight: "500", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueSemiBold-MVv5P.ttf", weight: "600", style: "normal" },
    { path: "../webfonts/lowball-neue/LowballNeueBold-w18A6.ttf", weight: "700", style: "normal" },
  ],
  variable: "--heading-font",
});

const dosisSecondary = Dosis({ subsets: ["latin"], variable: "--secondary-font" });
const dosisBody = Dosis({ subsets: ["latin"], variable: "--body-font" });
const jost = Jost({ subsets: ["latin"], variable: "--jost-font" });
const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ["latin"], variable: "--bigShoulder-font" });

// Static metadata
export const metadata = {
  title: service.name,
  description: service.description,
};

// Static params generation
export function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code, // Generate for all supported languages
  }));
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="robots" content="noindex, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href="favicon.ico" sizes="any" />
        </head>
        <body
          className={`${lowball.variable} ${dosisSecondary.variable} ${dosisBody.variable} ${jost.variable} ${bigShouldersDisplay.variable}`}
        >
          {children}
          <BootstrapClient />
        </body>
      </html>
    </ThemeProvider>
  );
}
