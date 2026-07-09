import Link from "next/link";
import {
  FileText,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

const productLinks = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQ", href: "#faq" },
  { title: "Testimonials", href: "#testimonials" },
];

const companyLinks = [
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Careers", href: "/careers" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-600 p-3">
                <FileText className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                ResumeAI
              </h2>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Analyze your resume with AI, improve your ATS score,
              and land more interviews with confidence.
            </p>

            {/* <div className="mt-6 flex gap-4">

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <Twitter size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <Mail size={20} />
              </Link>
            </div> */}
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="transition hover:text-violet-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="transition hover:text-violet-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="transition hover:text-violet-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}