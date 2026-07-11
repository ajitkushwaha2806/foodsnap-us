import Template from "@/components/global/template";
import { Bug, Headset, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Support & Issue Reporting | Foodsnap",
  description:
    "Need help with your image downloads, account access, or payments? Contact the Foodsnap support team.",
  keywords: [
    "Foodsnap Support",
    "Service Support",
    "Image Download Help",
    "Account Support",
    "Payment Issue",
  ],
  openGraph: {
    title: "Support & Issue Reporting | Foodsnap",
    description:
      "Need help with your Foodsnap Pro account, image downloads, or payments? Contact our support team.",
    url: "https://Foodsnap.in/report-issue",
    siteName: "Foodsnap",
    locale: "en_US",
    type: "website",
  },
};

const cardData = [
  {
    title: "Download & Access Issues",
    description: "Unable to download your premium image bundles?",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <>
        If you're unable to download images, encountering broken links, or having 
        trouble logging into your Foodsnap Pro account, our team is ready to help. <br /> <br />
        Please email your registered phone number, email address, and issue details to{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Foodsnap.in
        </a>
        .
      </>
    ),
  },
  {
    title: "Payment & Billing Support",
    description: "Facing payment confirmation or billing-related issues?",
    icon: <Mail className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If your payment was successful but you did not receive a confirmation receipt,
        or if you believe a billing error occurred, please contact our support team with
        your transaction details. <br /> <br />
        We will investigate and resolve legitimate billing issues as quickly as
        possible.
      </>
    ),
  },
  {
    title: "Library Requests",
    description: "Looking for specific images or cuisines?",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Can't find the perfect image for your restaurant menu? Send us a request! 
        We are constantly updating our library based on customer feedback to ensure 
        we have the best selection for all types of food businesses. <br /> <br />
        Foodsnap serves cloud kitchens and restaurants worldwide.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help? We're Here For You",
  description:
    "Whether it's account access, payment concerns, or image requests, our team is ready to assist.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you're facing any issue related to our image library, downloads, 
        or payments, please reach out with complete details so we can assist 
        you efficiently.{" "}
      </p>
      <p>
        📧 Support Email:{" "}
        <a
          href="mailto:support@Foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Foodsnap.in
        </a>
        <br />
        🛡️ Foodsnap – Premium Food Image Library
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Support & Issue Reporting"
      heading={
        <div>
          Need Help? <br className="hidden sm:block" />
          Contact Our Support Team{" "}
        </div>
      }
      description="Facing an issue with your account, downloads, or payments? Let us know and we'll help resolve it."
      ctaDescription="Our team is committed to providing a smooth experience. If you encounter any technical or billing issues, we're just an email away."
      ctaLink="/contact"
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
