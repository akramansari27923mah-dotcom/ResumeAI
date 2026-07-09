import HomePage from "@/components/Home";

export const metadata = {
  title: {
    default: "ResumeAI | AI-Powered Resume Analyzer",
    template: "%s | ResumeAI",
  },
  description:
    "ResumeAI is an AI-powered resume analyzer that helps job seekers improve their resumes with ATS scoring, AI-generated feedback, and personalized suggestions to increase interview success.",

  keywords: [
    "ResumeAI",
    "Resume Analyzer",
    "AI Resume Analyzer",
    "ATS Resume Checker",
    "Resume Score",
    "Resume Review",
    "Resume Feedback",
    "Resume Builder",
    "CV Analyzer",
    "AI Career Tool",
    "Next.js",
    "Groq AI",
    "Resume Optimization",
  ],

  authors: [
    {
      name: "Akram Ansari",
    },
  ],

  creator: "Akram Ansari",
  publisher: "ResumeAI",

  metadataBase: new URL("https://your-domain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ResumeAI | AI-Powered Resume Analyzer",
    description:
      "Upload your resume, receive an ATS score, and get AI-powered suggestions to improve your chances of landing interviews.",
    url: "https://your-domain.com",
    siteName: "ResumeAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeAI",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ResumeAI | AI Resume Analyzer",
    description:
      "AI-powered resume analysis with ATS scoring and personalized feedback.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Technology",
};

export default function Home() {
  return (
  <HomePage /> 
  );
}
