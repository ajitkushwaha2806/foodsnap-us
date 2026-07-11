import React from "react";
import Home from "@/components/global/Home";

export const metadata = {
  title: {
    absolute: "Foodsnap Pro Library | Premium Food Images",
  },
  description: "Get instant access to our premium food image library for just $10. Perfect for DoorDash, Uber Eats, and more.",
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Foodsnap Pro Library",
    url: "https://foodsnap.in",
    description: "Get instant access to our premium food image library for just $10.",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Foodsnap Pro Image Library",
    description: "Premium digital food photography bundles for restaurant delivery apps.",
    brand: {
      "@type": "Brand",
      name: "Foodsnap",
    },
    offers: {
      "@type": "Offer",
      price: "10.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What do I get in the Foodsnap Pro Library?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get instant access to hundreds of high-quality, app-ready food photos covering a variety of cuisines, perfect for DoorDash, Uber Eats, and Grubhub menus.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full access to the library is just $10.",
        },
      },
      {
        "@type": "Question",
        name: "Are the images royalty-free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can use them freely on your restaurant menus and website, though you may not resell the images.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://foodsnap.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Foodsnap Pro Library",
        item: "https://foodsnap.in/#pricing",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-white dark:bg-[#0a0a1a] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full mx-auto px-2 md:px-4">
          <Home />
        </div>
      </div>
    </>
  );
}
