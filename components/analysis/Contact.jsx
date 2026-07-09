import {
  CircleUserRound,
  LocationEdit,
  Mail,
  Phone,
  User,
  Globe,
  SquareArrowOutUpRight,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Contact = ({
  name,
  email,
  phone,
  location,
  linkedin,
  portfolio,
  gitHub,
}) => {
  const info = [
    {
      user: name,
      icon: CircleUserRound,
    },
    {
      user: email,
      icon: Mail,
    },
    {
      user: phone,
      icon: Phone,
    },
    {
      user: location,
      icon: LocationEdit,
    },
  ];

  const links = [
    {
      link: linkedin,
      icon: FaLinkedinIn,
      name: "Linkedin",
    },
    {
      link: portfolio,
      icon: Globe,
      name: "Portfolio",
    },
    {
      link: gitHub,
      icon: FaGithub,
      name: "GigHub",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow border border-indigo-100/50 p-3">
      <div className="flex items-center gap-2">
        <User size={25} className="text-indigo-500" />
        <span className="text-gray-800 font-bold text-lg">
          Contact Information
        </span>
      </div>

      <div className="mt-6 flex justify-center gap-2 flex-col">
        {info?.map((item, ind) => {
          const Icon = item?.icon;
          return (
            <div key={ind} className="flex items-center gap-3">
              <Icon className="text-indigo-500" />
              <span className="font-bold text-gray-900">{item?.user}</span>
            </div>
          );
        })}
        <div className="flex justify-center gap-2 flex-col">
          {links?.map((item, ind) => {
            const Icon = item?.icon;
            return (
              <div key={ind} className="flex items-center gap-3">
                <Icon
                  size={item?.icon === "Globe" ? 20 : 22}
                  className={`text-indigo-500`}
                />
                <Link
                  href={item?.link ? item?.link : ""}
                  className="text-blue-500 font-bold flex justify-center items-center gap-5"
                >
                  {item?.name}
                  <SquareArrowOutUpRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
