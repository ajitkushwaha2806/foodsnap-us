import React from "react";
import Template from "@/components/global/template";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Foodsnap",
  description:
    "Understand the scope, limitations, and responsibilities associated with using the Foodsnap Pro image library.",
  keywords: [
    "Foodsnap Disclaimer",
    "Food Image Library",
    "Delivery App Photos",
    "Restaurant Marketing",
    "Image Licensing Disclaimer",
  ],
  authors: [{ name: "Foodsnap", url: "https://Foodsnap.in" }],
  openGraph: {
    title: "Disclaimer | Foodsnap",
    description:
      "Important information regarding the digital assets and library services provided by Foodsnap.",
    url: "https://Foodsnap.in/disclaimer",
    siteName: "Foodsnap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Foodsnap",
    description:
      "Important information regarding the digital assets and library services provided by Foodsnap.",
  },
};

const cardData = [
  {
    title: "Independent Image Provider",
    description:
      "We are a private media company, not affiliated with delivery platforms.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Foodsnap operates as an independent provider of high-quality food photography. 
        We provide digital assets to help restaurants improve their visual presentation. <br /> <br />
        We are <strong>not</strong> officially affiliated with, endorsed by, or partnered 
        with DoorDash, Uber Eats, Grubhub, Zomato, Swiggy, or any other third-party 
        food delivery application.
      </>
    ),
  },
  {
    title: "No Guarantee of Platform Acceptance",
    description:
      "Final approval of menu images rests solely with the delivery platforms.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While our images are specifically shot and formatted to meet the general 
        resolution and quality standards of major delivery apps, Foodsnap does not 
        guarantee that any specific platform will approve your menu uploads. <br /> <br />
        The final decision to accept or reject an image rests strictly with the respective 
        delivery platform's internal review team and their specific, changing policies.
      </>
    ),
  },
  {
    title: "Representation & Usage Responsibility",
    description:
      "You are responsible for ensuring the images represent your food accurately.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Foodsnap provides premium generic food photography. We do not verify if the 
        images identically match the specific ingredients, portion sizes, or presentation 
        of the actual food prepared in your restaurant. <br /> <br />
        You are solely responsible for ensuring that using our images does not mislead 
        your customers. Foodsnap holds no liability for customer complaints or platform 
        penalties arising from misrepresentation.
      </>
    ),
  },
  {
    title: "No Guarantee of Increased Sales",
    description:
      "We provide visual assets, not guaranteed marketing results.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        While high-quality imagery is statistically shown to improve conversion rates 
        on delivery apps, Foodsnap does not guarantee any specific financial outcome, 
        sales increase, or return on investment from using our library. <br /> <br />
        Your restaurant's success depends on many factors including food quality, pricing, 
        and customer service, which are entirely outside of our control.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About This Disclaimer?",
  description:
    "We're happy to clarify any concerns regarding our image library services.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions regarding this disclaimer or the scope of
        services provided through Foodsnap, please contact us at{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Foodsnap.in
        </a>
        .{" "}
      </p>
      <p>
        Foodsnap
        <br />
        Premium Food Image Library
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />& Important
          Information{" "}
        </div>
      }
      description="Please review the limitations, responsibilities, and terms associated with using the Foodsnap Pro image library."
      ctaDescription="Our mission is to help food entrepreneurs elevate their digital menus with stunning photography. Please note that we are an independent provider and do not guarantee third-party platform approval."
      ctaLink="mailto:support@Foodsnap.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Headset className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
