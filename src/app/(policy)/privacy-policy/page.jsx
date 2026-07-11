import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Foodsnap",
  description:
    "Learn how Foodsnap collects, uses, and protects your personal information when you use our premium food image library.",
  keywords: [
    "Foodsnap Privacy Policy",
    "Food Image Library",
    "Data Protection",
    "Personal Information",
    "Delivery App Photos",
  ],
  openGraph: {
    title: "Privacy Policy | Foodsnap",
    description:
      "Learn how Foodsnap collects, uses, and protects your personal information.",
    url: "https://Foodsnap.in/privacy-policy",
    siteName: "Foodsnap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Foodsnap",
    description:
      "Learn how Foodsnap collects, uses, and protects your personal information.",
  },
};

const cardData = [
  {
    title: "Information We Collect",
    description:
      "We collect information required to deliver our digital products and support services.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        When you register for access to the Foodsnap Pro Library, we collect 
        basic contact information such as your name and WhatsApp number. <br /> <br />
        We may also collect standard website analytics, device information, and usage
        data (via trusted platforms like PostHog and Facebook Pixel) to improve your 
        browsing experience and our platform performance.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us deliver downloads and improve our services.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use your information to grant access to the image library, process your 
        requests, track lead conversions, and respond to support inquiries. <br /> <br />
        We may occasionally send important updates, new image bundle alerts, and 
        promotional content that may benefit your restaurant delivery business.
      </>
    ),
  },
  {
    title: "Data Security & Protection",
    description:
      "We take reasonable measures to protect your personal information.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We implement industry-standard security practices and access controls to
        protect your personal information from unauthorized access, misuse, or
        disclosure. <br /> <br />
        We do not sell your personal information to third parties. Information
        may only be shared with trusted service providers such as analytics 
        partners when necessary to operate our website effectively.
      </>
    ),
  },
  {
    title: "Your Rights & Data Requests",
    description:
      "You may request access, correction, or deletion of your information.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You may contact us at any time to request access to your information,
        update inaccurate details, unsubscribe from marketing communications, or
        request deletion of your personal data where legally permitted. <br />{" "}
        <br />
        To submit a privacy-related request, email us at{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Foodsnap.in
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Your Privacy?",
  description:
    "We're committed to transparency and protecting your personal information.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions about this Privacy Policy, your personal data, or
        how we handle information collected through our image library and website, 
        please contact us.{" "}
      </p>
      <p className="mb-2">
        Email:{" "}
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
      title="Privacy Policy"
      heading={
        <div>
          Your Privacy. <br className="hidden sm:block" />
          Our Commitment.{" "}
        </div>
      }
      description="Learn how Foodsnap collects, uses, stores, and protects your personal information."
      ctaDescription="We respect your privacy and are committed to protecting your information. This policy explains what data we collect, why we collect it, and how we keep it secure."
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
