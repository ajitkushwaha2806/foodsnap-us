import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/global/AppShell";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";

// import { PostHogProvider } from "@/components/PostHogProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://foodsnap.in"),

  title: {
    default: "Foodsnap Pro Library | Premium Food Images",
    template: "%s | Foodsnap",
  },

  description:
    "Get instant access to our premium food image library for just $10. Perfect for DoorDash, Uber Eats, and more.",

  keywords: [
    "Food Images",
    "Delivery App Photos",
    "Foodsnap Pro",
    "Restaurant Marketing",
    "Food Photography",
    "Cloud Kitchen Photos",
  ],

  alternates: {
    canonical: "https://foodsnap.in",
  },

  icons: {
    icon: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Foodsnap",
    url: "https://foodsnap.in",
    logo: "https://foodsnap.in/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8826073117",
      contactType: "customer service",
      email: "support@foodsnap.in",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Foodsnap Pro Library",
    url: "https://foodsnap.in",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDS53PBB');`,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDS53PBB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <PostHogProvider> */}

        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        {/* </PostHogProvider> */}

        {/* <Analytics />
        <SpeedInsights /> */}
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
