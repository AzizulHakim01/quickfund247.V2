import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";
const WorkingCap = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                Working Capital / Payroll
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                For any business purpose <b className="text-green-500">.</b>
              </h1>
              <p className="text-xl font-bold text-slate-600">
                An unsecured working capital loan from Quick Funds 247 can help
                capture an opportunity or cover unforeseen expenses.
              </p>
            </div>
            <div className="h-[80%] overflow-hidden rounded-md ">
              <img
                src="/images/miki.jpeg"
                alt=""
                className="hover:opacity-100 opacity-80 transition-all "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-16">
            <h1 className="text-4xl font-bold text-[#00d1a9] md:w-[600px] text-center">
              A working capital loan can help your business .
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-16">
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
                  Use working capital to get large order discounts, buy out a
                  partner, or win a contract over your competition.
                </p>
              </div>
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
                  Use working capital to hire employees, open a new location,
                  purchase equipment, or buy inventory.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Unforeseen_Expenses.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Unforeseen Expenses
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use working capital to help cushion day-to-day cash flow, make
                  payroll, pay taxes or vendors if the need arises.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Bridge_Cash_Flow.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Bridge Cash Flow
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Additional working capital comes in handy to bridge cash flow
                  gaps or get through the slow season.
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
              <img
                src="/images/chef.jpg"
                alt=""
                className="rounded-md opacity-80 hover:opacity-100 transition-all"
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

export default WorkingCap;
