import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans text-stone-900">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-red-50 rounded-full">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-black">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-stone-700">
          Page not found
        </h2>
        <p className="mb-8 text-stone-500 max-w-sm mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#0F67CA] px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors shadow-sm"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
