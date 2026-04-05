import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookingButton from "@/components/MobileBookingButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru"),
  title: {
    default: "Август — Студия бровей и ресниц в Хамовниках, Москва",
    template: "%s | Август",
  },
  description:
    "Оформление бровей, ламинирование ресниц, наращивание. 5 мин от м. Фрунзенская. Онлайн-запись, бесплатная парковка.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Август",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Август",
  description: "Студия бровей и ресниц в Хамовниках, Москва",
  url: "https://avgustbrows.ru",
  telephone: "+7 (999) 563-76-12",
  email: "shubletovabrows@yandex.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Фрунзенская набережная 30с5",
    addressLocality: "Москва",
    addressRegion: "Москва",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.7282,
    longitude: 37.578,
  },
  openingHours: "Mo-Su 12:00-21:00",
  priceRange: "₽₽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${nunito.variable}`}>
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
      <body className="font-body bg-cream text-ink-soft min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <MobileBookingButton />
      </body>
    </html>
  );
}
