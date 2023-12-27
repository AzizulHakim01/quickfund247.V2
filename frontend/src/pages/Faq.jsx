import React from "react";
import Layout from "../components/Layout";
import FaqComponent from "./FaqComponent";

const Faq = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <FaqComponent
                header="What is a line of credit, and how does it work?"
                text="A line of credit is a flexible borrowing arrangement that allows you to access funds up to a predetermined limit. You only pay interest on the amount you use, and as you repay, the funds become available again for future use."
              />
              <FaqComponent
                header="Who can apply for a line of credit?"
                text=" Individuals and businesses with good credit and a stable financial history are eligible to apply for a line of credit. Lenders typically assess creditworthiness and may consider factors like income, debt, and business performance."
              />
              <FaqComponent
                header="What can I use a line of credit for??"
                text="A line of credit can be used for various purposes, including covering unexpected expenses, managing cash flow, financing projects, or addressing short-term financial needs. It provides flexibility for both personal and business financial requirements."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <FaqComponent
                header="Is collateral required for a line of credit?"
                text="Depending on the type (secured or unsecured), a line of credit may or may not require collateral. Secured lines of credit are backed by assets, while unsecured lines rely on the borrower's creditworthiness. Terms vary among lenders."
              />
              <FaqComponent
                header="How do I repay a line of credit?"
                text="Repayment terms vary, but generally, you'll make monthly payments based on the outstanding balance and accrued interest. You have the flexibility to pay off the full amount or make minimum payments, as long as you stay within the agreed terms."
              />
              <FaqComponent
                header="How do I apply for a line of credit?"
                text="To apply, visit our website and fill out the online application. You'll need to provide information about your financial situation, credit history, and the purpose of the line of credit. Our team will then review your application and contact you with the next steps."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.36" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
