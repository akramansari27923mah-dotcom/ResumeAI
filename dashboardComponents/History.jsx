"use client";

import React from "react";
import { useResume } from "@/contexts/resume.context";
import {
  FileUser,
  History,
  LoaderCircle,
  CalendarDays,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { dateFormatter } from "@/util/datFormater";

const HistoryPage = () => {
  const { history, loading } = useResume();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center gap-3">
        <LoaderCircle className="animate-spin text-indigo-600" size={30} />
        <span className="text-lg font-medium text-gray-600">
          Loading history...
        </span>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-indigo-100 p-4">
          <History size={40} className="text-indigo-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Resume History
          </h1>
          <p className="text-gray-500">
            View all your previously generated resumes.
          </p>
        </div>
      </div>

      {/* Empty State */}
      {history?.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white py-20">
          <FileUser size={70} className="text-gray-300" />
          <h2 className="mt-5 text-2xl font-semibold">
            No Resume Found
          </h2>
          <p className="mt-2 text-gray-500">
            Generate your first resume to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-5 bg-white  rounded-2xl p-3 grid grid-cols-3 justify-center gap-5 items-center">
          {history?.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
             <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 shadow-md">
                  <FileUser className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                    {item?.resume?.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Professional Resume
                  </p>
                </div>
              </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              
                  <div className="flex items-center gap-2 rounded-xl bg-indigo-100 px-3 py-1 text-indigo-700">
                    <Sparkles className="h-4 w-4" />
                    <span>{item?.resume?.description}</span>
                  </div>

              
                  <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700">
                    <BadgeCheck className="h-4 w-4" />
                    <span className="font-semibold">
                      {item?.resume?.ats_score}%
                    </span>
                  </div>

                 
                  <div className="flex items-center gap-2 text-gray-500">
                    <CalendarDays className="h-4 w-4" />
                    <span>{dateFormatter(item?.createdAt)}</span>
                  </div>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;