'use client'

import { Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useAuths } from '@/contexts/auth.context'
import { useResume } from '@/contexts/resume.context'
import { CheckCircle2, AlertCircle, Trophy } from "lucide-react";
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'

const DashboardPage = () => {
  const route = useRouter()
  const {user} = useAuths()
  const {result} = useResume()
  const {logout} = useAuth()

  const { overall_score, ats_score, strengths, missing_information, keyword_suggestions} = result || {}

  const getScoreColor = (score, type) => {
    if (type === "bgColor") {
      if (score >= 90) return "bg-green-500";
      if (score >= 80) return "bg-emerald-500";
      if (score >= 70) return "bg-yellow-500";
      if (score >= 60) return "bg-orange-500";
      return "bg-red-500";
    }
    if (type === "score") {
      if (score >= 90) return "text-green-500";
      if (score >= 80) return "text-emerald-500";
      if (score >= 70) return "text-yellow-500";
      if (score >= 60) return "text-orange-500";
      return "bg-red-500";
    }
  };

  
  return (
    <div className='h-152 w-full max-w-6xl mx-auto'>
      {/* nav */}
     <div className='flex justify-between items-center border relative border-gray-100 p-2 bg-white shadow'>
       <div className='text-black font-bold text-2xl'> Dashboard</div>

       <div className="flex justify-center items-center gap-3">
        <div className='flex justify-center items-center gap-2 px-3 py-1.5 font-semibold bg-indigo-500 text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-indigo-400'>
          <Upload size={18} />
          <Link href={'/dashboard/upload-resume'}>
          Upload Resume
          </Link>
        </div>

      <DropdownMenu>
  <DropdownMenuTrigger className={'cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300'}>
    <Avatar>
      <AvatarFallback className={'uppercase overflow-hidden'}>
          {user?.image  ? (
            <Image 
              src={user?.image}
              alt={user?.name}
              width={100}
              height={100}
              className=''
            />
          ) : user?.username[0]}
      </AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end" className="w-60">
  <DropdownMenuGroup>
    <DropdownMenuLabel>
      <p>{user?.username}</p>
      <p className="text-muted-foreground text-xs">
        {user?.email}
      </p>
    </DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem onClick={() => route.push('/')} >
     Home
    </DropdownMenuItem>
  </DropdownMenuGroup>

  <DropdownMenuSeparator />

  <DropdownMenuItem onClick={logout} className="text-red-500">
      Logout
  </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
       </div>

     </div>

    {/* user details */}
     <div className='py-8'>
        <h1 className='text-black text-3xl mb-2'>Hello, {user && user?.username}! 👋</h1>
        <p className='text-gray-400 text-sm'>Here`s your resume analysis overview.</p>
     </div>

  
    {
      result && (
        <div className='flex flex-col gap-5'>

          {/* Ats Rating */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  
                <div>
                <h3 className="text-sm text-gray-500">ATS Rating</h3>

                <span
                  className={`inline-flex items-center gap-2 mt-2 rounded-full px-4 py-2 text-sm font-semibold ${getScoreColor(
                    ats_score,
                    "score"
                  )}`}
                >
                  {ats_score > 89 ? (
                    <>
                      🏆 Excellent
                    </>
                  ) : ats_score > 69 ? (
                    <>
                      🌟 Very Good
                    </>
                  ) : ats_score > 49 ? (
                    <>
                      👍 Good
                    </>
                  ) : (
                    <>
                      ⚠️ Needs Improvement
                    </>
                  )}
                </span>
                </div>

                <div className="text-right">
                  <p className={`text-3xl font-bold ${getScoreColor(ats_score, 'score')}`}>{ats_score}%</p>
                  <p className="text-xs text-gray-500">ATS Score</p>
                </div>

            </div>

                {/* overall Score */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div>
        <h3 className="text-sm text-gray-500">Overall Grade</h3>

        <span
          className={`inline-flex items-center gap-2 mt-2 rounded-full px-4 py-2 text-sm font-semibold ${getScoreColor(
            ats_score,
            "score"
          )}`}
        >
          {overall_score > 89 ? (
            <>
              🏆 Excellent
            </>
          ) : overall_score > 69 ? (
            <>
              🌟 Very Good
            </>
          ) : overall_score > 49 ? (
            <>
              👍 Good
            </>
          ) : (
            <>
              ⚠️ Needs Improvement
            </>
          )}
        </span>
      </div>

      <div className="text-right">
        <p className={`text-3xl font-bold ${getScoreColor(overall_score, 'score')}`}>{overall_score}%</p>
        <p className="text-xs text-gray-500">Overall Grade</p>
      </div>
            </div>
        </div>
      )
    }

      {
        result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">

          {/* Strengths */}
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-50 to-green-100 p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-300/20 group-hover:scale-125 transition-transform duration-500" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Strengths</p>
                      <h2 className="mt-2 text-4xl font-bold text-green-700">
                        {strengths?.length}
                      </h2>
                    </div>

                    <div className="rounded-full bg-green-500 p-3 text-white group-hover:rotate-12 transition-transform">
                      <CheckCircle2 size={28} />
                    </div>
                  </div>
                </div>

                {/* Issues */}
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-red-50 to-orange-100 p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-300/20 group-hover:scale-125 transition-transform duration-500" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Issues Found</p>
                      <h2 className="mt-2 text-4xl font-bold text-red-600">
                        {missing_information?.length}
                      </h2>
                    </div>

                    <div className="rounded-full bg-red-500 p-3 text-white group-hover:rotate-12 transition-transform">
                      <AlertCircle size={28} />
                    </div>
                  </div>
                </div>

          {/* Overall */}
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-50 to-blue-100 p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-300/20 group-hover:scale-125 transition-transform duration-500" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Keywords</p>
                      <h2 className="mt-2 text-4xl font-bold text-indigo-700">
                        {keyword_suggestions?.length}
                      </h2>
                    </div>

                    <div className="rounded-full bg-indigo-500 p-3 text-white group-hover:rotate-12 transition-transform">
                      <Trophy size={28} />
                    </div>
                  </div>
                </div>
          </div>
        )
      }

    </div>
  )
}

export default DashboardPage