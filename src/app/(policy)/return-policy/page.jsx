import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Service Delivery & Cancellation Policy | Foodsnap",
  description:
    "Learn about digital delivery timelines, access, and cancellation policies for the Foodsnap Pro image library.",
  keywords: [
    "Foodsnap",
    "Refund Policy",
    "Cancellation Policy",
    "Digital Delivery",
    "Image Library Access",
    "No Refund Policy",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Instant Digital Delivery",
    description: "Access to image bundles is granted immediately upon purchase.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Foodsnap provides instant access to premium digital food photography and 
        restaurant marketing assets. <br /> <br />
        Service delivery begins immediately upon successful payment. You will be 
        granted access to download your purchased image bundles directly from our 
        platform or via a secure email link. <br /> <br />
        Because delivery is instant and digital, you can begin using your assets 
        right away.
      </>
    ),
  },
  {
    title: "No Cancellation or Returns",
    description: "Digital goods cannot be returned or cancelled once accessed.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Because the Foodsnap Pro Library consists of instantly downloadable digital 
        goods, orders cannot be cancelled, returned, or exchanged once the transaction 
        is complete. <br /> <br />
        Unlike physical goods, a digital image file cannot be "returned" to us once 
        it has been downloaded to your device. Therefore, we do not accept return 
        requests for any digital bundle.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy",
    description: "Refunds are only considered when the billing mistake is on our side.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All purchases made through Foodsnap are final and non-refundable. <br /> <br />
        Refunds will not be provided because:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>You changed your mind after purchase.</li>{" "}
          <li>You do not have the software or technical ability to upload images to delivery apps.</li>{" "}
          <li>A delivery platform rejects your menu update.</li>{" "}
          <li>You decided not to use the images.</li>{" "}
        </ul>{" "}
        <br />
        Refunds may only be considered in exceptional situations where:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>A duplicate payment was processed.</li>{" "}
          <li>A verified technical billing error occurred on our platform preventing access.</li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of Foodsnap
        after reviewing the circumstances.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Access?",
  description:
    "Contact our team if you experience a billing issue or download problem.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe a payment issue occurred, or experienced a service delivery
        problem caused directly by our technical systems, please contact our
        support team with your transaction information.{" "}
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
      title="Delivery & Cancellation Policy"
      heading={
        <div>
          Delivery, Cancellation <br className="hidden sm:block" />& Return
          Policy{" "}
        </div>
      }
      description="Please review our policies regarding digital delivery, cancellations, and returns before purchasing an image bundle."
      ctaDescription="All Foodsnap digital assets are delivered instantly upon payment. Purchases are final and refunds/returns are only considered in rare situations where a billing error is caused by our systems."
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
