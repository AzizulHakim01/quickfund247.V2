import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";

const SbaLoan = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                SBA Loans
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Longer terms at lower rates <b>.</b>
              </h1>
              <p className="text-xl font-bold text-slate-600">
                Opting for an SBA loan can assist you in obtaining a more
                substantial funding amount, coupled with extended repayment
                terms.
              </p>
            </div>
            <div className="">
              <img
                src="/images/i-m-waiting-delivery-fresh-ingredients.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-16">
            <h1 className="text-4xl font-bold text-[#00d1a9] md:w-[900px] text-center">
              A business term loan can provide valuable financial support for
              your enterprise.
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-16">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Business_Expansion.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Business Expansion
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use an SBA loan to hire employees, open a new location, run a
                  marketing campaign, or buy inventory.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/idea_3532167.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Refinance Debt
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use an SBA loan to pay off high interest debt and increase
                  your monthly cash flow.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Purchase_Equipment.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Purchase Equipment
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use an SBA loan to purchase new or used equipment to help your
                  business operations.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Opportunities.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capture Opportunities
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use an SBA loan to get large order discounts, buy out a
                  partner, or win a contract over your competition.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 mb-4 mt-16 ">
            <div className="flex flex-col gap-8 order-last">
              <h2 className="text-slate-700 text-xl font-semibold">
                Industries
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                We are proud to work with a wide variety of small businesses{" "}
                <b>.</b>
              </h1>
              <p className="text-xl font-bold text-slate-600">
                Quick Funds 247 provides solutions for most industry types from
                restaurants to construction companies. There’s a good chance we
                have a solid track record of funding businesses within your
                industry.
              </p>
            </div>
            <div className="">
              <img src="/images/medium-shot-man-repairing-fashion-goods.jpg" alt="" />
            </div>
          </div>
        </div>
        <Process />
        <YouAreCoverd />
      </div>
    </Layout>
  );
};

export default SbaLoan;
