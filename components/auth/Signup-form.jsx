"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useAuths } from "@/contexts/auth.context";

export default function SignupForm() {
  const model = {
    username: "",
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(model);
  const { signup, loginWithGoogle } = useAuth();
  const { error, loading, googleLoading } = useAuths();

  const handelInput = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      signup(formData);
    } catch (err) {
      console.log(err.message);
    } finally {
      if (!error) {
        setFormData(model);
      }
    }
  };

  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

          <p className="mt-2 text-gray-500">Join thousands of job seekers.</p>
        </div>

        <div className="space-y-3">
          <button onClick={loginWithGoogle} className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 transition text-gray-800 hover:bg-gray-100 cursor-pointer">
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

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <form className="space-y-5" onSubmit={handelSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handelInput}
                placeholder="Akram Ansari"
                className="w-full rounded-xl border text-gray-800 py-3 pl-12 pr-4 outline-none transition focus:border-violet-600"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                onChange={handelInput}
                value={formData.email}
                placeholder="you@example.com"
                className="w-full rounded-xl border text-gray-800 py-3 pl-12 pr-4 outline-none transition focus:border-violet-600"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Password
            </label>

            <div className="relative">
              <Lock
                className={`absolute left-4 ${error ? "top-1/3" : "top-1/2"} -translate-y-1/2 text-gray-400`}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handelInput}
                value={formData.password}
                placeholder="********"
                className="w-full rounded-xl border text-gray-800 py-3 pl-12 pr-12 outline-none transition focus:border-violet-600"
              />
              {error && <span className="text-xs text-red-600">{error}</span>}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>


          <label className="flex items-center gap-3 text-sm text-gray-600">
            <input type="checkbox" className="h-4 w-4 accent-violet-600" />I
            agree to the
            <Link href="/terms" className="text-violet-600 hover:underline">
              Terms
            </Link>
          </label>

          <button
            className=" w-full rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl
            "
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <LoaderCircle className="animate-spin" />
                Creating...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-violet-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
