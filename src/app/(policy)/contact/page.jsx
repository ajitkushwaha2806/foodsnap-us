import Template from "@/components/global/template";
import { Headset, Mail, MapPin, ShieldCheck, FileCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | Foodsnap",
  description:
    "Get in touch with Foodsnap. We provide premium, high-quality food photography for your delivery app menus.",
  keywords: [
    "Foodsnap",
    "Food Image Library",
    "Delivery App Photos",
    "Restaurant Marketing",
    "Contact Foodsnap",
  ],
  openGraph: {
    title: "Contact Us | Foodsnap",
    description:
      "Get in touch with Foodsnap. Enhance your restaurant's digital menus with our premium image library.",
    url: "https://Foodsnap.in/contact",
    siteName: "Foodsnap",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Foodsnap",
    description:
      "Need help with your Foodsnap Pro account? Contact us today.",
  },
};

const cardData = [
  {
    title: "Account Support",
    description:
      "Need help with your account, downloads, or image access?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you need help downloading your premium image bundles, navigating the 
        gallery, or managing your Foodsnap Pro access, our team is here to help. <br /> <br />
        Reach us at{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Foodsnap.in
        </a>{" "}
        and we'll get back to you as soon as possible.
      </>
    ),
  },
  {
    title: "Menu Guidance",
    description: "Looking for specific cuisines or dishes?",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Can't find exactly what you're looking for? Reach out and let us know what 
        dishes or cuisines you need. We are constantly updating our library to help 
        cloud kitchens and restaurants stand out on DoorDash, Uber Eats, and Grubhub.
      </>
    ),
  },
  {
    title: "Global Reach",
    description: "Serving delivery restaurants worldwide.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        {" "}
        <strong>Foodsnap</strong> <br />
        Premium Food Image Library <br /> <br />
        We proudly provide high-quality, app-approved digital food assets to restaurants 
        and cloud kitchens globally.
      </>
    ),
  },
];

const contactData = {
  title: "Boost Your Sales Today",
  description:
    "Questions about our Foodsnap Pro image library?",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        Whether you're launching a new cloud kitchen or upgrading your existing 
        restaurant's digital menu, we're here to provide you with the mouth-watering 
        imagery you need to increase your conversion rates.{" "}
      </p>
      <p>
        Primary Support:{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Foodsnap.in
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get Expert Help With Your <br className="hidden sm:block" />
          Digital Menus{" "}
        </div>
      }
      description="Questions about accessing our food image library? We're here to help."
      ctaDescription="Reach out to our team for support, image requests, and answers to your questions. Whether you're just starting or refreshing your menu, we're happy to assist."
      ctaLink="mailto:support@Foodsnap.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Mail className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
