import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";

const Loc = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                Line Of Credit
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Fast and Flexible.
              </h1>
              <p className="text-xl font-bold text-slate-600">
                A business line of credit can offer the flexibility of having
                available funds when you need it.
              </p>
            </div>
            <div className="">
              <img
                src="/images/beautiful-stylish-woman-white-shirt-pink-skirt-dreamily-l.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-16">
            <h1 className="text-4xl font-bold text-[#00d1a9] md:w-[600px] text-center">
              A line of credit can help your business.
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-16">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/cash_flow_management.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Cash Flow Management
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  A business line of credit can help even out cash flow when
                  fluctuations are predictable or seasonal
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Emergency_Funds.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Emergency Funds
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  A business line of credit can act as a buffer during
                  short-term cash crunches or the slow season.
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
                  Tap into your business line of credit to add a location, hire
                  employees or acquire a competitor.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Protect_Personal_Finances.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Protect Personal Finances
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  A business line of credit can help to avoid using personal
                  funds for business expenses
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 mb-4 mt-16 ">
            <div className="flex flex-col gap-8 order-last">
              <h2 className="text-slate-700 text-xl font-semibold">
                Line Of Credit
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Financial flexibility for evolving opportunities and
                challenges.
              </h1>
              <p className="text-xl font-bold text-slate-600">
                A line of credit is a financial tool that can be beneficial for
                businesses across various industries. Different industries may
                have unique needs and reasons for seeking a line of credit
              </p>
            </div>
            <div className="">
              <img
                src="/images/smiley-man-holding-clothes-front-view.jpg"
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

export default Loc;
