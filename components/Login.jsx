"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LoaderCircle, } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useAuths } from "@/contexts/auth.context";

export default function LoginForm() {
  const model = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(model);
  const { login, loginWithGoogle } = useAuth();
  const { error, loading,googleLoading } = useAuths();

  const handelInput = (e) => {
    const { value, name } = e?.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    try {
      login(formData);
    } catch (err) {
      console.log(err.message);
    } finally {
      setFormData(model);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-white to-violet-50 px-6 py-10">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back 👋</h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue analyzing your resume.
          </p>
        </div>

        <div className="space-y-3">
          <button onClick={loginWithGoogle} className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 transition hover:bg-gray-100 text-gray-500 cursor-pointer">
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className={`h-5 w-5 ${googleLoading && 'animate-spin'}`}
              width={100}
              height={100}
            />
            {
              googleLoading ? (
                 <span className="font-semibold animate-pulse">
                   Signing...
                 </span>
              )
               : "Continue with Google"
            }
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handelSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                onChange={handelInput}
                value={formData.email}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-violet-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                name="password"
                onChange={handelInput}
                value={formData.password}
                className="w-full rounded-xl border text-black border-gray-300 py-3 pl-12 pr-12 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {error && <span className="text-xs text-red-600">{error}</span>}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="h-4 w-4 accent-violet-600" />
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            className="
              w-full
              rounded-xl
              bg-linear-to-r
              from-violet-600
              to-indigo-600
              py-3
              font-semibold
              text-white
              transition
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
            "
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <LoaderCircle className="animate-spin" />
                Signing...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don`t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-violet-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
}
