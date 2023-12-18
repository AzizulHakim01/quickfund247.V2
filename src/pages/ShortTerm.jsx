import Layout from "../components/Layout";
import Process from "../components/Process";
import YouAreCoverd from "../components/YouAreCoverd";

const ShortTerm = () => {
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 md:mb-16">
            <div className="flex flex-col gap-8">
              <h2 className="text-slate-700 text-xl font-semibold">
                Short Term Loans
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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-16">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/loc.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capture Opportunities
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use a business term loan to get large order discounts, buy out
                  a partner, or win a contract over your competition.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/loc.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capture Opportunities
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use a business term loan to get large order discounts, buy out
                  a partner, or win a contract over your competition.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/loc.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capture Opportunities
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use a business term loan to get large order discounts, buy out
                  a partner, or win a contract over your competition.
                </p>
              </div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <img src="/images/loc.png" alt="" className="w-16" />
                  <h1 className="text-2xl font-bold text-slate-700">
                    Capture Opportunities
                  </h1>
                </div>
                <p className="text-slate-900 text-xl text-justify">
                  Use a business term loan to get large order discounts, buy out
                  a partner, or win a contract over your competition.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center py-2 mb-4 mt-16 ">
            <div className="flex flex-col gap-8 order-last">
              <h2 className="text-slate-700 text-xl font-semibold">
                Short Term Loans
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
        </div>
        <Process />
        <YouAreCoverd />
      </div>
    </Layout>
  );
};

export default ShortTerm;
