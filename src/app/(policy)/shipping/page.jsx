import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Shipping & Digital Delivery Policy | Foodsnap",
  description:
    "Learn how Foodsnap delivers your premium food image bundles and digital assets.",
  keywords: [
    "Foodsnap",
    "Digital Delivery",
    "Service Access",
    "Image Download",
    "Digital Goods Shipping",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "100% Digital Delivery",
    description:
      "All Foodsnap image bundles are delivered online.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Foodsnap provides premium image assets entirely through
        digital channels. We do not sell or ship any physical products. <br />{" "}
        <br />
        Our offerings include:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Instant access to high-resolution food photography</li>{" "}
          <li>Digital delivery of image bundles via email or secure link</li>{" "}
          <li>Online account access to past purchases</li>{" "}
        </ul>{" "}
        <br />
        No physical shipping, courier services, or logistics are involved. You will
        receive your digital files directly via email or on your account dashboard.
      </>
    ),
  },
  {
    title: "Instant Access & Timelines",
    description: "Downloads are available immediately after payment.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        After successful payment, you will immediately be redirected to a download 
        page or dashboard where you can access your purchased Foodsnap Pro Library. <br /> <br />
        Additionally, a confirmation email containing backup download links will be 
        sent to your registered email address within a few minutes of your transaction. <br /> <br />
        There are no shipping delays or transit times to worry about.
      </>
    ),
  },
  {
    title: "Communication & Access Responsibility",
    description:
      "Purchasers are responsible for providing accurate contact details.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Customers are responsible for providing an accurate email address and
        phone number during checkout to ensure smooth delivery of download links 
        and purchase receipts. <br /> <br />
        If you provide an incorrect email address and cannot access your files, 
        please contact our support team to verify your identity and update your details.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help With Your Download?",
  description:
    "Our support team is available to assist with digital delivery questions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have successfully completed a payment but have not received an
        email with your download links, or if you are having trouble accessing 
        your files on the dashboard, please contact our support team.{" "}
      </p>
      <p>
        Support Email:{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Foodsnap.in
        </a>
      </p>
      <p className="mt-3">
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
      title="Shipping & Digital Delivery Policy"
      heading={
        <div>
          Digital Delivery <br className="hidden sm:block" />
          Policy{" "}
        </div>
      }
      description="Learn how Foodsnap instantly delivers your digital image bundles."
      ctaDescription="All Foodsnap products are delivered digitally. Immediately after payment, your download links will be available on-screen and sent to your registered email address."
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
