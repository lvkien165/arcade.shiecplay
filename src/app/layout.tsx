import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GPTAd from "@/components/GPTAd";
import { Analytics } from "@vercel/analytics/react"; // ← dùng /react và để trong body

export const metadata: Metadata = {
    title: "ShiecPlay - Your Ultimate Gaming Hub",
    icons: { icon: "/logo.png" },
    description:
        "Play free online games instantly. No downloads required. Experience the best collection of arcade, puzzle, action, and strategy games.",
    keywords:
        "free games, online games, browser games, arcade games, puzzle games, action games, strategy games, no download games",
    authors: [{ name: "ShiecPlay Team" }],
    openGraph: {
        title: "ShiecPlay - Your Ultimate Gaming Hub",
        description: "Play free online games instantly. No downloads required.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "ShiecPlay - Your Ultimate Gaming Hub",
        description: "Play free online games instantly. No downloads required.",
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

const GA_ID = "G-P7S4CFYZDH";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                {/* Google Analytics (gtag) */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
                </Script>

                {/* <script
                    async
                    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
                    crossOrigin="anonymous"
                ></script> */}
                {/* banner 1 */}
                {/* <Script>
                    {`window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/55237200,23313244994/travelhalong/travelhalong_banner1', [300, 250], 'div-gpt-ad-1760350143693-0').addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();
  });`}
                </Script> */}

                {/* banner 2 */}
                {/* <Script>
                    {`window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/55237200,23313244994/travelhalong/travelhalong_banner2', [320, 100], 'div-gpt-ad-1760351216806-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });`}
                </Script> */}

                {/* ANCHOR chính chủ Google */}
                {/* <Script id="gpt-anchor">
                    {`
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function() {
    // Định nghĩa Anchor Ad (out-of-page)
    var anchorSlot = googletag.defineOutOfPageSlot(
      '/55237200,23313244994/travelhalong/travelhalong_anchor',
      googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
    );

    if (anchorSlot) {
      anchorSlot.addService(googletag.pubads());
    }

    // Cấu hình hiển thị
    googletag.pubads().setCentering(true);
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().enableSingleRequest();

    // Kích hoạt GPT
    googletag.enableServices();
  });
`}
                </Script> */}

                {/* INTERSTITIAL chính chủ Google */}
                {/* <Script id="gpt-interstitial">
                    {`
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function() {
    // Định nghĩa Interstitial Ad (out-of-page)
    var interstitialSlot = googletag.defineOutOfPageSlot(
      '/55237200,23313244994/travelhalong/travelhalong_interstitial',
      googletag.enums.OutOfPageFormat.INTERSTITIAL
    );

    if (interstitialSlot) {
      interstitialSlot.addService(googletag.pubads());
    }

    googletag.pubads().setCentering(true);
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
`}
                </Script> */}
            </head>
            <body className="antialiased bg-gradient-to-br from-gray-50 to-gray-100">
                <Header />

                {/* Banner 1 - Top banner */}
                {/* <div className="mt-20">
                    <div
                        id="div-gpt-ad-1760350143693-0"
                        className="min-w-[300px] min-h-[250px]"
                    >
                        <Script>
                            {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1760350143693-0'); });`}
                        </Script>
                    </div>
                </div> */}

                <main className="pt-20">{children}</main>

                <Footer />

                {/* Vercel Analytics phải đặt trong body */}
                <Analytics />
            </body>
        </html>
    );
}
