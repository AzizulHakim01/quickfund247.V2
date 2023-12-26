import React, { useState } from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectFormData } from "../reducers/formDataReducer";
import { useNavigate } from "react-router-dom";
import { html2pdf } from "html2pdf.js";
import jsPDF from "jspdf";

const ViewForm = () => {
  const formData = useSelector(selectFormData);
  const navigate = useNavigate();
  const handlePrint = () => {
    // Implement print functionality here

    console.log("PDF Print");
  };

  const handleDownload = () => {
    console.log(formData);
  };

  const handleSubmit = () => {
    // Implement submit functionality here
    navigate("/thank")
  };

  const handleEdit = () => {
    navigate("/contact");
  };
  return (
    <Layout>
      <div className="">
        <div className="max-w-screen-xl  mx-auto" id="print-content">
          <img src="/images/logo.png" alt="" className="w-24 mx-auto" />
          <h1 className="text-[#00d1a9] text-center uppercase font-bold text-2xl">
            Merchant Funding Request Form
          </h1>
          <p className="text-center font-medium text-zinc-600">
            Thanks for being with us
          </p>
          <div className="border-2 border-[#00d1a9] p-2 rounded-md mt-2">
            <div className="grid grid-cols-3 text-center items-center">
              <div className=""></div>
              <h1 className="text-xl font-bold text-slate-700 text-center">
                Business Details
              </h1>
              <p className="font-bold text-md">
                <span>Application date: </span>
                {formData.date}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4  text-md font-medium text-slate-700">
              <p>
                Name of the merchant : <span>{formData.business_name}</span>
              </p>
              <p>
                Doing Business As: <span>{formData.business_type}</span>
              </p>
              <p>
                Business Email: <span>{formData.business_email}</span>
              </p>
              <p>
                Business Number: <span>{formData.business_number}</span>
              </p>
              <p>
                Funding Amount Required: <span>{formData.amount_asking}</span>
              </p>
              <p>
                Business Start Date : <span>{formData.business_date}</span>
              </p>
              <p>
                Adress : <span>{formData.address}</span>
              </p>
              <p>
                City : <span>{formData.city}</span>
              </p>
              <p>
                State : <span>{formData.state}</span>
              </p>
              <p>
                Business Industry : <span>{formData.industry}</span>
              </p>
            </div>
            <h1 className="text-xl font-bold text-slate-700 text-center capitalize">
              Economic profile
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-4 text-md font-medium text-slate-700">
              <p>
                Average Monthly Gross Income :{" "}
                <span>{formData.monthly_revenue}</span>
              </p>
              <p>
                Credit Score: <span>{formData.fico}</span>
              </p>
              <p>
                Current Month Revenue: <span>{formData.current_month}</span>
              </p>
              <p>
                Last Month Revenue : <span>{formData.last_month}</span>
              </p>
              <p>
                Month before Last Revenue :{" "}
                <span>{formData.before_last_month}</span>
              </p>
              <p>
                Current Cash Advances :
                {formData.history !== "" ? <span>Yes</span> : <span>No</span>}
              </p>
              <p className={`${formData.history === "" ? "hidden" : ""}`}>
                History : <span>{formData.history}</span>
              </p>
              <p>
                State : <span>{formData.state}</span>
              </p>
              <p>
                Purpose of the Capital : <span>{formData.purpose_capital}</span>
              </p>
              <p>
                Files Attactched :{" "}
                {formData.files.map((file) => {
                  return (
                    <div className="text-slate-700 lowercase">{file.name}</div>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-8">
            <button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold transition-all">
              Print
            </button>
            <button onClick={handleDownload} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold transition-all">
              Download
            </button>
            <button onClick={handleSubmit} className="bg-[#00d1a9] hover:bg-[#3cad99] px-4 py-2 rounded-md text-white font-semibold transition-all">
              Submit
            </button>
            <button onClick={handleEdit} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold transition-all">
              Edit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewForm;
