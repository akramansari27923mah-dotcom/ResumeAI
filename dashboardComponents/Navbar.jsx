"use client";

import { dashboardLink } from "@/util/links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState("0px");

  return (
    <>
      {isOpen === "0px" && (
        <div
          onClick={() => setIsOpen("288px")}
          className="flex justify-center items-center px-3 py-1 fixed top-2 left-2 rounded-2xl bg-gray-800 text-white hover:scale-105 active:scale-100 transition-all duration-300 border border-gray-700 gap-2 cursor-pointer"
        >
          <Menu size={15} />
          <span className="text-sm">Menu</span>
        </div>
      )}

      <aside
        className=" h-screen transition-all duration-300 bg-zinc-950 border-r border-zinc-800 overflow-hidden fixed top-0 left-0"
        style={{ width: `${isOpen}` }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            ResumeAI
          </h1>

          <button className="p-2 rounded-lg hover:bg-zinc-800 transition">
            <X
              className="w-5 h-5 text-zinc-300"
              onClick={() => setIsOpen("0px")}
            />
          </button>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {dashboardLink?.map((item) => {
              const Icon = item?.icon;
              const active = pathname === item?.link;

              return (
                <Link
                  key={item?.name}
                  href={item?.link}
                  className={`group flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />

                  <span className="font-medium">{item?.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
