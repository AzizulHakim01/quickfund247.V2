import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Thanks = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center md:h-[60vh]">
        <div className="p-4 rounded shadow-lg ring ring-indigo-600/50">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">
              Thank You for being with us !
            </h1>
            <p>
              Thank you for your interest! One of our designated person will
              reach to you ASAP.
            </p>
            
              
              <div className="flex gap-8 items-center">
                <Link to={"/"} className="text-sm bg-[#00d1a9] px-6 hover:bg-[#00d1abe0] py-3 rounded-md text-white font-bold">
                  Home
                </Link>
                <Link to={"/view"} className="text-sm text-white font-bold  bg-[#00d1a9] px-6 hover:bg-[#00d1abe0] py-3 rounded-md">
                  View/Print/Download Your Application
                </Link>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thanks;
