import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <span className="block mb-2 text-xs font-medium tracki text-center uppercase dark:text-violet-400">
          How it works
        </span>
        <h2 className="text-5xl font-bold text-center dark:text-gray-50 text-[#00D1a9]">
          Our 3 Step Process:
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 items-center">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
              <img src="/images/step_1.png" alt="" className="" />
            </div>
            <h1 className="text-2xl font-bold text-[#00d1a9]">1. Apply</h1>
            <p className="text-center text-zinc-800 font-semibold">
              Fill out our Quick Apply application.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 items-center">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
              <img src="/images/step_2.png" alt="" className="" />
            </div>
            <h1 className="text-2xl font-bold text-[#00d1a9]">
              2. Application under review
            </h1>
            <p className="text-center text-zinc-800 font-semibold">
              We review your goals and present you with programs matching your
              needs, getting an offer in 24 hours.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 items-center">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
              <img src="/images/step_1.png" alt="" className="" />
            </div>
            <h1 className="text-2xl font-bold text-[#00d1a9]">
              3. Receive funding
            </h1>
            <p className="text-center text-zinc-800 font-semibold">
              Choose the program that fits you best and receive funding within
              48 hours.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/apply"}
            className="hover:text-[#ffffff] bg-blue-950 text-3xl text-[#00D1A9] rounded-full px-4 py-2 font-bold"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
