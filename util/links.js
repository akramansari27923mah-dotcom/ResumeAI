import {
  LayoutDashboard,
  ChartColumn,
  History,
  Upload,
} from "lucide-react";

export const dashboardLink = [
  {
    name: "Home",
    link: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload Resume",
    link: "/dashboard/upload-resume",
    icon: Upload,
  },
  {
    name: "Analysis Report",
    link: "/dashboard/analysis-report",
    icon: ChartColumn,
  },
  {
    name: "History",
    link: "/dashboard/history",
    icon: History,
  },
];
