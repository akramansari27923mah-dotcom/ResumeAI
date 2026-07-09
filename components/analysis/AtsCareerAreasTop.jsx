import React from "react";
import RecommendationCard from "./AtsRecommend";
import { FileSearch, Briefcase, Sparkles, Tags } from "lucide-react";

const AtsCareerAreasTop = ({
  ats_recommendations,
  career_recommendations,
  improvements,
  top_missing_skills,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <RecommendationCard
        title="ATS Recommendations"
        icon={FileSearch}
        items={ats_recommendations}
        color="text-blue-600"
      />

      <RecommendationCard
        title="Career Recommendations"
        icon={Briefcase}
        items={career_recommendations}
        color="text-green-600"
      />

      <RecommendationCard
        title="Suggested Improvements"
        icon={Sparkles}
        items={improvements}
        color="text-orange-600"
      />

      <RecommendationCard
        title="Top Missing Skills"
        icon={Tags}
        items={top_missing_skills}
        color="text-purple-600"
      />
    </div>
  );
};

export default AtsCareerAreasTop;
