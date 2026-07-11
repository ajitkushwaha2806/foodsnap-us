import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Foodsnap",
  description:
    "Read the refund policy for the Foodsnap Pro image library.",
  keywords: [
    "Foodsnap Refund Policy",
    "No Refund Policy",
    "Digital Goods Refund",
    "Image Library Refund",
  ],
  openGraph: {
    title: "Refund Policy | Foodsnap",
    description:
      "Foodsnap follows a strict no-refund policy for digital downloads, except in cases where a billing error occurred on our side.",
    url: "https://Foodsnap.in/refund-policy",
    siteName: "Foodsnap",
    type: "website",
  },
};

const cardData = [
  {
    title: "Strict No Refund Policy",
    description: "All sales of digital images are final.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Foodsnap provides instant access to premium digital food photography. <br /> <br />
        Due to the nature of digital goods, which can be immediately downloaded and 
        stored by the user upon purchase, all sales are considered final and 
        non-refundable once access is granted. <br /> <br />
        By completing your purchase, you acknowledge and agree to this no-refund
        policy for digital assets.
      </>
    ),
  },
  {
    title: "Non-Refundable Scenarios",
    description:
      "Refunds are not issued for platform rejections or change of mind.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refunds will not be provided under any of the following circumstances:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You changed your mind after making the payment.</li>{" "}
          <li>You are unable to use the images because your restaurant changed its menu.</li>{" "}
          <li>A delivery platform (e.g., DoorDash, Uber Eats) rejects the images based on their own criteria.</li>{" "}
          <li>You did not like the aesthetic of the provided image bundles.</li>{" "}
        </ul>{" "}
        <br />
        Third-party platform approval decisions are entirely outside our control.
      </>
    ),
  },
  {
    title: "Refunds Only for Our Errors",
    description: "Exceptions apply only when a billing issue is caused by us.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refund requests may only be considered if:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You were charged multiple times for the exact same purchase.</li>{" "}
          <li>A verified technical or payment processing error occurred on our end preventing you from accessing the library.</li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of Foodsnap
        after reviewing the circumstances. If approved, the refund will be processed
        back to the original payment method within 5-7 business days.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Billing?",
  description:
    "Contact us if you believe a payment issue occurred due to our mistake.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe you were charged incorrectly or experienced a billing
        issue caused by our systems, please contact us with your payment details
        and transaction reference.{" "}
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
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />& Payment Terms{" "}
        </div>
      }
      description="Please review our refund policy before purchasing access to the Foodsnap Pro library."
      ctaDescription="All digital purchases made through Foodsnap are final. Refunds are only considered in rare cases where the issue was caused by a billing error on our end."
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
