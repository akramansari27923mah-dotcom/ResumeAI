"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuths } from "@/contexts/auth.context";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuths();
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
            R
          </div>

          <span className="text-xl font-bold text-gray-900">ResumeAI</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks?.map((item) => (
            <Link
              key={item?.name}
              href={item?.href}
              className="text-sm font-medium text-gray-600 transition hover:text-violet-600"
            >
              {item?.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">

           <Link
            href={user ? "/dashboard" : "/signup"}
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Deshboard
          </Link>

           <Link
            href={user ? "/dashboard/upload-resume" : "/signup"}
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            Get Started
          </Link>

          {user === null ? (
            <Link
              href="/login"
              className="text-base font-medium px-4 py-2 bg-violet-600 hover:bg-violet-500 transition text-white rounded-xl"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="text-white border border-red-500/30 cursor-pointer hover:scale-105 active:scale-100 duration-300 transition-all px-4 py-2 rounded-2xl bg-red-500/50 "
            >
              Logout
            </button>
          )}

         
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-5 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-violet-600"
              >
                {item.name}
              </Link>
            ))}

            <hr />

            {user === null ? (
            <Link
              href="/login"
              className="text-base font-medium px-6 py-3 bg-violet-600 hover:bg-violet-500 transition text-white rounded-xl w-full text-center"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="text-white border w-full border-red-500/30 cursor-pointer hover:scale-105 active:scale-100 duration-300 transition-all px-4 py-2 rounded-2xl bg-red-500/50 "
            >
              Logout
            </button>
          )}

           <Link
              href={`${user ? "/dashboard" : "/signup"}`}
              className="block rounded-xl bg-violet-600 mt-5 py-3 text-center font-medium text-white"
            >
              Dashboard
            </Link>

            <Link
              href={`${user ? "/dashboard/upload-resume" : "/signup"}`}
              className="block rounded-xl bg-violet-600 py-3 text-center font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
