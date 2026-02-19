import React from "react";
import { User, Building, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans text-stone-900">
      <div className="w-full max-w-[420px] text-center">
        {/* Header */}
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-black">
          Login into your workspace
        </h1>

        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"></div>
          </div>
          <span className="relative bg-white px-2 text-sm text-stone-400">
            Log in with
          </span>
        </div>
        {/* OAuth Options */}
        <div className="mb-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white p-2 hover:bg-stone-50 transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-medium text-stone-700">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"></div>
          </div>
          <span className="relative bg-white px-2 text-sm text-stone-400">
            or continue with
          </span>
        </div>

        <div className="text-left">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-stone-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all mb-4"
          />
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-stone-500"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <p className="mt-2 text-xs text-stone-400">
            Do not have an account? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </div>

        {/* Submit Button */}
        <button className="mt-6 w-full rounded-lg bg-[#0F67CA] px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
