import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";
const Equipment = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                Equipment Financing
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Finance new or used equipment.
              </h1>
              <p className="text-xl font-bold text-slate-600">
                Equipment financing can help you acquire new or used equipment
                at a low payment and rate.
              </p>
            </div>
            <div className="">
              <img src="/images/shutterstock_1031172445.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-16">
            <h1 className="text-4xl font-bold text-[#00d1a9] md:w-[600px] text-center">
              Equipment financing can help your business.
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-16">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Preserve_Cash_Flow.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Preserve Cash Flow
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Equipment financing can help preserve cash flow to allocate
                  towards other areas of your business.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Avoid_Obsolescence.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Avoid Obsolescence
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Equipment financing enables you to acquire modern equipment
                  and technology updates.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Hedge_Against_Inflation.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Hedge Against Inflation
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Equipment financing may hedge inflation risk by delaying your
                  outlay of funds over time.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/TaxIncentives.png"
                    alt=""
                    className="w-16"
                  />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Tax Incentives
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Monthly payments may be deducted as an expense or deduct the
                  full purchase price with Section 179 tax deduction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 mb-4 mt-16 ">
            <div className="flex flex-col gap-8 order-last">
              <h2 className="text-slate-700 text-xl font-semibold">
                Equipment Financing
              </h2>
              <h1 className="text-5xl font-bold text-[#00d1a9]">
                Empowering growth, one machine at a time.
              </h1>
              <p className="text-xl font-bold text-slate-600">
                Equipment financing is a type of business financing that
                specifically focuses on helping businesses acquire the equipment
                they need to operate. This can be particularly beneficial for
                companies that rely on expensive machinery, vehicles,
                technology, or other types of equipment.
              </p>
            </div>
            <div className="">
              <img
                src="/images/6155e080258cd3d84909abc1_1100w Equipment leasing vs Equipment FInancing Agreements.jpeg"
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

export default Equipment;
