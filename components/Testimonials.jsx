import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "/1image.jpg",
    review:
      "ResumeAI increased my ATS score from 68 to 94. I received interview calls within two weeks!",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/2image.jpg",
    review:
      "The AI suggestions were incredibly accurate. It helped me rewrite weak bullet points and improve readability.",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "/3image.jpg",
    review:
      "The dashboard is beautiful and the keyword optimization feature helped me tailor my resume for every application.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
      
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Loved by
            <span className="text-violet-600"> Job Seekers</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Thousands of professionals trust ResumeAI to improve their resumes
            and land more interviews.
          </p>
        </div>

        
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

          
              <p className="leading-7 text-slate-600">{item.review}</p>

          
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-20 grid grid-cols-2 gap-8 rounded-3xl bg-violet-600 p-10 text-center text-white md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold">1K+</h3>
            <p className="mt-2 text-violet-100">Users</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">95%</h3>
            <p className="mt-2 text-violet-100">Success Rate</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">1.5K+</h3>
            <p className="mt-2 text-violet-100">Resumes Analyzed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">4.9★</h3>
            <p className="mt-2 text-violet-100">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
