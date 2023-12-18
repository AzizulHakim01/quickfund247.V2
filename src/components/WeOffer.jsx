import React from "react";

const WeOffer = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto md:h-[600px] flex flex-col gap-10 uppercase justify-center">
          <h1 className="text-center text-4xl font-bold text-[#00D1A9]">
            What we offer
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-between gap-6 w-full">
            <div className="flex flex-col items-center justify-center">
              <img src="/images/short_term.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">short term loan</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/long_term.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">long term loan</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/sba.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">sba</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/loc.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">line of credit</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/equipment.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">EQUIPMENT FINANCING</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/working_capital.png" alt="" className="w-32" />
              <p className="text-xl font-bold text-zinc-800">WORKING CAPITAL</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOffer;
