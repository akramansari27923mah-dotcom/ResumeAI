"use client";

import { FileUp, Upload } from "lucide-react";
import React, { useRef } from "react";
import ScoreCards from "@/components/analysis/ScoreCards";
import SummaryCard from "@/components/analysis/SummaryCard";
import Strength from "@/components/analysis/Strength";
import Weakness from "@/components/analysis/Weakness";
import { BadgeCheck } from "lucide-react";
import Contact from "@/components/analysis/Contact";
import SkillOverview from "@/components/analysis/SkillOverview";
import Experience from "@/components/analysis/Experience";
import Education from "@/components/analysis/Education";
import Projects from "@/components/analysis/Project";
import AtsCareerAreasTop from "@/components/analysis/AtsCareerAreasTop";
import ResumeFeedback from "@/components/analysis/ResumeFeedBack";
import Suggestion from "@/components/analysis/Suggestion";
import FinalVerdict from "@/components/analysis/Verdict";
import { useResume } from "@/contexts/resume.context";
import Link from "next/link";

const AnalysisDetails = ({reportRef, handelPrint}) => {
  const { result } = useResume();
  const {
    overall_score,
    ats_score,
    summary,
    strengths,
    weaknesses,
    missing_information,
    contact,
    skills,
    experience,
    education,
    projects,
    resume_feedback,
    ats_recommendations,
    career_recommendations,
    improvements,
    keyword_suggestions,
    top_missing_skills,
    final_verdict,
  } = result || {};
  const { confidence } = result?.final_verdict || {};
  const { technical, soft, tools, languages } = skills || {};
 

  if (!result) {
    return (
      <div  className="flex h-152 flex-col items-center justify-center rounded-2xl border-gray-300 bg-linear-to-br from-gray-50 to-gray-100 p-8 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <FileUp className="h-10 w-10 text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          No Resume Analysis Yet
        </h2>

        <p className="mt-3 max-w-md text-gray-600">
          Upload your resume to receive an AI-powered analysis, ATS
          compatibility score, strengths, weaknesses, and personalized
          improvement suggestions.
        </p>

        <div className="mt-8 rounded-xl border bg-white px-6 py-3 shadow-sm">
          <p className="font-medium text-gray-700">
            📄 Upload your resume to generate your report
          </p>
        </div>

        <div className="mt-5 px-4 py-2 bg-indigo-600 text-white transition-all duration-300 hover:scale-105 active:scale-100 flex justify-center items-center gap-2">
          <Upload />
          <Link href={'/dashboard/upload-resume'} >
            Upload Resume
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-6 report">
      <ScoreCards
        overall_score={overall_score}
        ats_score={ats_score}
        confidence={confidence}
        handelPrint={handelPrint}
        reportRef={reportRef}
      />

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          <SummaryCard summary={summary} />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                  <BadgeCheck className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">
                    Strengths
                  </h2>
                  <p className="text-sm text-gray-500">
                    What your resume does well.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {strengths?.map((item, index) => (
                  <Strength key={index} strength={item} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <Weakness
                weaknesses={weaknesses}
                missing_information={missing_information}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Experience experience={experience} />
            <Education education={education} />
          </div>
        </div>

        <div className="space-y-6">
          <Contact
            name={contact?.name}
            email={contact?.email}
            phone={contact?.phone}
            location={contact?.location}
            linkedin={contact?.linkedin}
            portfolio={contact?.portfolio}
            gitHub={contact?.github}
          />

          <SkillOverview
            technical={technical}
            soft={soft}
            tools={tools}
            languages={languages}
          />
        </div>
      </div>

      <div className="mt-6">
        <Projects projects={projects} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <ResumeFeedback resume_feedback={resume_feedback} />

        <AtsCareerAreasTop
          ats_recommendations={ats_recommendations}
          career_recommendations={career_recommendations}
          improvements={improvements}
          top_missing_skills={top_missing_skills}
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Suggestion keyword_suggestions={keyword_suggestions} />
        <FinalVerdict final_verdict={final_verdict} />
      </div>
    </div>
  );
};

export default AnalysisDetails;
