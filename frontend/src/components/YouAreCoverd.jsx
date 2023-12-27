import React from "react";

const YouAreCoverd = () => {
  return (
    <div className="bg-zinc-200">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center md:py-16 py-8 gap-16">
        <div className="flex justify-center">
          <h1 className="text-6xl text-[#00D1a9] font-bold uppercase">
            No matter who you are,<br />we’ve got you covered.
          </h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="bg-white px-6 py-6 flex flex-col items-start gap-8 rounded-md">
            <h2 className="text-3xl font-bold text-zinc-600">Small Business</h2>
            <div className="flex justify-center w-full">
              <img
                src="/images/small_business.jpg"
                alt=""
                className="rounded-md opacity-75 hover:opacity-100 transition-all"
              />
            </div>
            <p className="text-justify text-xl font-semibold text-zinc-500">
              “The attention to our needs that we get from QuickFunds247 is second
              to none”
            </p>
            <p className="text-zinc-700 ">
              <b>Laura Meadows,</b> M&M Construction
            </p>
          </div>
          <div className="bg-white px-6 py-6 flex flex-col items-start gap-8 rounded-md">
            <h2 className="text-3xl font-bold text-zinc-600">Entrepreneurs</h2>
            <div className="flex justify-center w-full">
              <img
                src="/images/entreprenurs.jpg"
                alt=""
                className="rounded-md opacity-75 hover:opacity-100 transition-all"
              />
            </div>
            <p className="text-justify text-xl font-semibold text-zinc-500">
              “I appreciate the transparency and professionalism that I always
              experience working with them.”
            </p>
            <p className="text-zinc-700 ">
              <b>Dan Billings</b>, Advanced Services
            </p>
          </div>
          <div className="bg-white px-6 py-6 flex flex-col items-start gap-8 rounded-md">
            <h2 className="text-3xl font-bold text-zinc-600">
              Professional Firms
            </h2>
            <div className="flex justify-center w-full">
              <img
                src="/images/professional_firms.jpg"
                alt=""
                className="rounded-md opacity-75 hover:opacity-100 transition-all"
              />
            </div>
            <p className="text-justify text-xl font-semibold text-zinc-500">
              “Their no B.S. approach is a breath of fresh air when working with
              finance companies. ”
            </p>
            <p className="text-zinc-700 ">
              <b>Rachel Park</b>, Park Law Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouAreCoverd;
