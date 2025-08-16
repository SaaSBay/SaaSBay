// src/data/vendors.js
import DummyImg from "../assets/illustration-saas.jpg";

export const vendors = [
  {
    id: 1,
    name: "LedgerLink",
    logo: "https://dummydata.io/assets/ledgerlink-logo.png",
    bannerImage: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "LedgerLink is a next-gen cloud accounting software tailored for Indian SMEs. It provides real-time financial analytics, AI-powered invoice categorization, native GST filings, and integrations with 50+ Indian banks.",
    categories: ["Accounting", "SME Tools", "Compliance"],
    features: [
      "Real-time ledger insights",
      "GST auto-filing & e-way bill generation",
      "AI-based invoice classification",
      "Integrated payroll & PF/ESIC",
      "Custom chart of accounts",
      "50+ Indian bank sync",
      "Tally, Marg, Busy import/export",
      "Advanced audit trail logging",
      "Multi-device support",
    ],
    pricing: [
      {
        plan: "Basic",
        price: "₹299/month",
        features: [
          "Single user",
          "50 invoices/month",
          "GST-ready reports",
          "Email ticketing support",
        ],
        gstIncluded: true,
      },
      {
        plan: "Growth",
        price: "₹749/month",
        features: [
          "Up to 5 users",
          "Unlimited invoices",
          "Automated GST returns",
          "Bank feeds + payroll",
          "Live chat support",
        ],
        gstIncluded: true,
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited users",
          "API access",
          "Dedicated training & account manager",
          "Custom integrations",
          "24x7 premium support",
        ],
        gstIncluded: false,
      },
    ],
    rating: 4.4,
    reviews: 589,
    reviewBreakdown: { 5: 410, 4: 105, 3: 45, 2: 20, 1: 9 },
    badges: ["Made for India", "AI Enabled", "Top Rated 2025 (SMEs)"],
    integrations: [
      "Tally",
      "Marg ERP",
      "Razorpay",
      "PayU",
      "Yes Bank",
      "Excel",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    faqs: [      {
        q: "Does LedgerLink support GSTR-1 and GSTR-3B filing?",
        a: "Yes, both are supported and filings can be automated based on your transactions.",
      },
      {
        q: "Can I migrate data from other platforms like Marg or Busy?",
        a: "Yes, LedgerLink provides CSV and API-based import tools for Marg, Busy, and Tally.",
      },
      {
        q: "Is payroll management included?",
        a: "Yes, from the Growth plan onward, payroll including PF and ESIC is integrated.",
      },
      {
        q: "Which languages is the app available in?",
        a: "English, Hindi, Marathi, and Bengali are currently supported.",
      },
    ],
    support: {
      email: "support@ledgerlink.in",
      phone: "1800-456-7890",
      whatsapp: "+91-9123456789",
      liveChat: true,
      documentationUrl: "https://ledgerlink.in/docs",
      availableHours: "Mon-Fri 10am-7pm IST",
      languagesSupported: ["English", "Hindi", "Marathi", "Bengali"],
    },
    vendor: {
      companyName: "LedgerLink Technologies Pvt. Ltd.",
      founded: 2019,
      headquarters: "Pune, India",
      website: "https://ledgerlink.in",
      founder: "Anuj Mehta",
      teamSize: 35,
      certifications: ["ISO 9001", "Startup India", "MeitY Recognized"],
      dataServers: "Hosted on AWS India (Mumbai Region)",
    },
    compliance: {
      gstCompliant: true,
      einvoicing: true,
      dataLocalization: "India",
      privacyPolicyUrl: "https://ledgerlink.in/privacy",
    },
    awards: [
      {
        title: "Best SME Accounting App",
        issuer: "SME Chamber of India",
        year: 2024,
      },
      {
        title: "Top 100 SaaS Startups",
        issuer: "YourStory",
        year: 2023,
      },
    ],
    testimonials: [
      {
        text: "LedgerLink cut our monthly accounting time by 60%. It’s an essential tool for any growing SME.",
        client: "Rajesh Iyer, Iyer Foods, Pune",
      },
      {
        text: "Our CA loves LedgerLink’s GST modules. Filing returns has never been this smooth.",
        client: "Suman Verma, Verma Traders, Patna",
      },
    ],
  },
  {
    id: 2,
    name: "FinlyBooks",
    logo: "https://saasbay.in/assets/finlybooks-logo.png",
    bannerImage: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "FinlyBooks is India’s fastest-growing cloud accounting platform designed for MSMEs, offering GST-compliant invoicing, automated e-way bill generation, UPI payment integrations, and multi-language support. Trusted by 10,000+ Indian businesses across 18 states.",
    categories: ["Accounting", "Finance", "GST Compliance"],
    features: [
      "GST-compliant invoicing & e-invoicing",
      "Multi-language UI (English, Hindi, Tamil, Kannada)",
      "UPI, RuPay, and netbanking integrations",
      "Automated TDS/Tax calculations",
      "Vendor & expense management",
      "Indian bank reconciliations",
      "Tally & ZohoBooks integration",
      "Mobile app (Android/iOS)",
      "Role-based access & audit logs",
    ],
    pricing: [
      {
        plan: "Starter",
        price: "₹399/month",
        features: [
          "100 invoices/month",
          "Single GSTIN",
          "UPI payments",
          "Email support",
        ],
        gstIncluded: true,
      },
      {
        plan: "Pro",
        price: "₹899/month",
        features: [
          "Unlimited invoices",
          "Multiple GSTINs",
          "E-invoicing & E-way bill",
          "Tally & Zoho Export",
          "WhatsApp support",
          "Priority onboarding",
        ],
        gstIncluded: true,
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Dedicated account manager",
          "White-label solution",
          "API & custom integrations",
          "On-site training",
        ],
        gstIncluded: false,
      },
    ],
    rating: 4.6,
    reviews: 763,
    reviewBreakdown: { 5: 625, 4: 95, 3: 28, 2: 10, 1: 5 },
    badges: ["GST Ready", "Best for MSMEs", "Top 10 Fintech 2025 (India)"],
    integrations: [
      "Tally ERP",
      "ZohoBooks",
      "Razorpay",
      "Paytm",
      "ICICI Bank",
      "Google Sheets",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    faqs: [
      {
        q: "Is FinlyBooks compliant with GST and e-invoicing norms?",
        a: "Yes! FinlyBooks is 100% compliant with India’s GST and supports e-invoicing/e-way bill as per government regulations.",
      },
      {
        q: "Can I import my data from Tally/ZohoBooks?",
        a: "Absolutely! We have one-click importers for Tally and ZohoBooks.",
      },
      {
        q: "What all Indian payment methods are supported?",
        a: "We support UPI, all major banks for netbanking, RuPay, as well as Razorpay and Paytm gateways.",
      },
      {
        q: "Is there support in Hindi or other languages?",
        a: "Yes, the platform is available in Hindi, Tamil, and Kannada in addition to English. All support channels offer assistance in these languages.",
      },
    ],
    support: {
      email: "care@finlybooks.in",
      phone: "1800-123-4567",
      whatsapp: "+91-9876543210",
      liveChat: true,
      documentationUrl: "https://finlybooks.in/docs",
      availableHours: "Mon-Sat 9am-8pm IST",
      languagesSupported: ["English", "Hindi", "Tamil", "Kannada"],
    },
    vendor: {
      companyName: "Finly Software Solutions Pvt. Ltd.",
      founded: 2017,
      headquarters: "Bangalore, India",
      website: "https://finlybooks.in",
      founder: "Ritu Sharma",
      teamSize: 42,
      certifications: [
        "ISO 27001",
        "CERT-In Certified",
        "Startup India Recognized",
      ],
      dataServers: "Hosted in Mumbai & Chennai (AWS India)",
    },
    compliance: {
      gstCompliant: true,
      einvoicing: true,
      dataLocalization: "India",
      privacyPolicyUrl: "https://finlybooks.in/privacy",
    },
    awards: [
      {
        title: "Top Fintech SaaS for MSMEs",
        issuer: "NASSCOM",
        year: 2024,
      },
      {
        title: "Startup India Recognized",
        issuer: "DPIIT",
        year: 2023,
      },
    ],
    testimonials: [
      {
        text: "Switching to FinlyBooks made GST returns a breeze for our logistics business.",
        client: "Aman Gupta, Gupta Logistics, Jaipur",
      },
      {
        text: "Their Hindi support and UPI integration is a game changer for our Kirana software.",
        client: "Shivani Rao, Ganesh Kirana, Lucknow",
      },
    ],
  },
];
