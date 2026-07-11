import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Foodsnap",
  description:
    "Review the Terms & Conditions governing your use of Foodsnap's premium food image library.",
  keywords: [
    "Foodsnap",
    "Terms and Conditions",
    "Food Image Library",
    "Service Terms",
    "Delivery App Photos"
  ],
  authors: [
    { name: "Foodsnap", url: "https://Foodsnap.in" },
  ],
  openGraph: {
    title: "Terms & Conditions | Foodsnap",
    description:
      "Review the Terms & Conditions governing your use of Foodsnap's premium food image library.",
    url: "https://Foodsnap.in/terms-and-conditions",
    siteName: "Foodsnap",
    type: "website",
  },
};

const cardData = [
  {
    title: "Usage Rights & Licensing",
    description: "Images are licensed for delivery platforms, not for resale.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By purchasing access to the Foodsnap Pro Library, you are granted a non-exclusive, 
        royalty-free license to use the provided food images strictly for your restaurant menus 
        on delivery platforms (such as DoorDash, Uber Eats, Grubhub) and your own website. <br /> <br />
        You may not resell, redistribute, or repackage these images as stock photography 
        or standalone assets under any circumstances.
      </>
    ),
  },
  {
    title: "Independent Image Library",
    description:
      "We are an independent provider of high-quality food photography.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Foodsnap operates as an independent private image library. We are not officially 
        affiliated with, endorsed by, or directly partnered with DoorDash, Uber Eats, 
        Grubhub, or any other third-party delivery application. <br /> <br />
        While our images are formatted and created to meet the general approval standards 
        of these platforms, we do not control their internal approval processes.
      </>
    ),
  },
  {
    title: "Non-Refundable Digital Goods",
    description: "All sales of digital image bundles are final.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Because the Foodsnap Pro Library consists of instantly downloadable digital 
        assets, all sales are considered final and non-refundable once access has been 
        granted or files have been downloaded. <br /> <br />
        We do not offer refunds if a third-party platform updates their image policies 
        or rejects an image, though we constantly strive to provide content that meets 
        current industry standards.
      </>
    ),
  },
  {
    title: "Termination & Misuse",
    description: "Access may be revoked for violating licensing terms.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We reserve the right to immediately suspend or terminate your access to the 
        library without refund if you:
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Attempt to resell or illegally distribute our copyrighted images.</li>{" "}
          <li>Use the images for illegal, defamatory, or fraudulent purposes.</li>{" "}
          <li>Violate these Terms & Conditions in any manner.</li>{" "}
        </ul>{" "}
        <br />
        Service termination due to misuse does not create eligibility for a refund.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About These Terms?",
  description: "We're happy to clarify any aspect of our licensing or terms.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        By accessing or purchasing the Foodsnap Pro Library, you legally agree to 
        these Terms & Conditions and licensing agreements.{" "}
      </p>
      <p className="mb-2">
        Support Inquiries:{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Foodsnap.in
        </a>
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
      title="Terms & Conditions"
      heading={
        <div>
          Terms & Conditions <br className="hidden sm:block" />
          For Customers{" "}
        </div>
      }
      description="Please review the terms governing your use of the Foodsnap image library and digital asset licenses."
      ctaDescription="By downloading our images, you agree to these Terms & Conditions, ensuring proper use of our licensed assets."
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
