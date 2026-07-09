"use client";

import Navbar from "@/dashboardComponents/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex bg-white">
      <div className="fixed top-0 left-0 z-40">
        <Navbar />
      </div>
      <div
        className={`p-4 overflow-scroll ${pathname === "/dashboard/upload-resume" ? "flex justify-center items-center bg-black" : pathname === "/dashboard/analysis-report" ? "bg-gray-50" : ""}  w-full hide-scroll`}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
