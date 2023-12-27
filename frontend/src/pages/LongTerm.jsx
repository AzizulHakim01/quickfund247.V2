import React from "react";
import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";

const LongTerm = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                Business Term Loans
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Low rates and flexible repayment <b>.</b>
              </h1>
              <p className="text-xl font-bold text-slate-600">
                A business term loan can help your business with a low rate and
                flexible, fixed monthly payments.
              </p>
            </div>
            <div className="">
              <img src="/images/small_business.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-16">
            <h1 className="text-4xl font-bold text-[#00d1a9] md:w-[600px] text-center">
              A business term loan can help your business .
            </h1>
            <div className="grid md:md:grid-cols-2 grid-cols-1 gap-24 mt-16">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/cap_inj.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capital Injection
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  A business term loan provides a significant infusion of
                  capital, enabling your business to fund expansion, purchase
                  equipment, or meet other financial needs.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Predictable_Repayment.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Predictable Repayment
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Unlike some forms of financing, term loans come with fixed
                  repayment schedules, making it easier for businesses to plan
                  and budget for repayments.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Long-Term_Planning.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Long-Term Planning
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  With extended repayment periods, term loans are suitable for
                  long-term projects or investments, offering flexibility for
                  businesses to implement strategic initiatives without
                  immediate financial strain.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Building_Credit_History.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Building Credit History
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Consistent and timely repayment of a term loan can positively
                  impact your business credit score, potentially opening doors
                  to better financing options in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 mb-4 mt-16 ">
            <div className="flex flex-col gap-8 order-last">
              <h2 className="text-slate-700 text-xl font-semibold">
                Business Term Loans
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Competitive rates and adaptable repayment options. <b>.</b>
              </h1>
              <p className="text-xl font-bold text-slate-600">
                A term loan for your business offers favorable interest rates
                and provides the convenience of flexible yet stable monthly
                payments.
              </p>
            </div>
            <div className="">
              <img
                src="/images/small-business-manager-her-workshop.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Process />
        <YouAreCoverd />
      </div>
    </Layout>
  );
};

export default LongTerm;
