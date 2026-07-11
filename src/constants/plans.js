export const PLANS = {
  "fssai-food-license": {
    _id: "fssai-food-license", // Keeping _id for compatibility with existing code
    title: "Foodsnap Pro Library",
    slug: "foodsnap-pro",
    description: "Get full access to our premium, app-approved food image library.",
    currency: "USD",
    price: 10, 
    badge: "100 Photos Bundle",
    ctaText: "Sign Up Now",
    features: [
      "100 High-Resolution Photos",
      "Instant Download Access",
      "Approved for Major Delivery Apps",
      "Royalty-Free Usage",
      "US Cuisine Specific",
      "Secure & Encrypted Processing"
    ],
    plans: [
      {
        licenseType: "100 Photos Bundle",
        description: "One-time payment for 100 high-quality images.",
        pricing: [
          {
            duration: "Lifetime",
            price: 10,
            originalPrice: 50,
            popular: true
          }
        ]
      }
    ],
    includedServices: [
      "Instant Access",
      "High-Res Downloads",
      "App-Approved Formats",
      "Royalty Free",
      "No Watermarks",
      "24/7 Support"
    ],
    documentsRequired: [
      "Email ID",
      "Business Name"
    ],
    isActive: true,
    whatsappSupportLink: "https://wa.me/918826073117"
  }
};
