import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookingButton from "@/components/MobileBookingButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru"),
  title: {
    default: "Студия бровей Avgust Brow Bar в Хамовниках | Оформление бровей Москва",
    template: "%s | Avgust Brow Bar",
  },
  description:
    "Профессиональное оформление бровей и ламинирование ресниц в Хамовниках. 5 мин от м. Фрунзенская. Онлайн-запись, бесплатная парковка.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Avgust Brow Bar",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Avgust Brow Bar",
  description:
    "Профессиональное оформление бровей и ламинирование ресниц в Хамовниках",
  url: "https://avgustbrows.ru",
  telephone: "+7 (995) 895-75-80",
  email: "shubletovabrows@yandex.ru",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Москва",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.7282,
    longitude: 37.578,
  },
  priceRange: "₽₽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {process.env.NEXT_PUBLIC_YM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${process.env.NEXT_PUBLIC_YM_ID},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
            }}
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="font-body bg-bg-main text-text-main min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <MobileBookingButton />
      </body>
    </html>
  );
}
