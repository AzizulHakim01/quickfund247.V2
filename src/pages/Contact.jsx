import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { message } from "antd";
import axios from "axios";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    dba: "",
    email: "",
    number: "",
    amount: "",
    date: "",
    address: "",
    city: "",
    state: "",
    industry: "",
    revenue: "",
    fico: "",
    cMonth: "",
    lMonth: "",
    bMonth: "",
    history: "",
  });
  const {
    name,
    dba,
    email,
    number,
    amount,
    date,
    address,
    city,
    state,
    industry,
    revenue,
    fico,
    cMonth,
    lMonth,
    bMonth,
    history,
  } = formData;


  const [showTextArea, setShowTextArea] = useState(false);

  const handleRadioChange = (event) => {
    setShowTextArea(event.target.value === "yes");
  };

  const todayDate = new Date().toLocaleDateString("en-US");

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const selectedFile = files[0];

      const base64Data = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split("base64,")[1]);
        reader.readAsDataURL(selectedFile);
      });

      const axiosConfig = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbyDIp7uQ98tetpZv9efGhApuhRxYJ5U_R4cpXhy8gDh-rIHpVFBnV4d6eTJFNn8u3oV/exec",
        {
          base64: base64Data,
          type: selectedFile.type,
          name: selectedFile.name,
          createDate: todayDate,
          data: formData,
        },
        axiosConfig
      );

      console.log(response.data);
      message.success("Data updated Successfully");
    } catch (error) {
      console.error("Error:", error);
      console.error("There is an error", error);
    }
  };

  return (
    <Layout>
      <div className="">
        <form
          className="max-w-screen-xl mx-auto flex flex-col gap-16"
          onSubmit={handleSubmit}
        >
          <div className="">
            <h1 className="text-4xl font-bold text-[#00d1a9] text-center">
              MERCHANT FUNDING REQUEST FORM
            </h1>
            <p className="text-center text-xl text-zinc-600">
              Thank you for placing your trust in us.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-900">
              BUSINESS DETAILS
            </h1>
            <p>All fields marked by an asterisk (*) are mandatory.</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 items-center grid-cols-1 gap-4 px-6 md:px-0 lg:px-0">
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Legal Business Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"legalBusinessName"}
                  value={name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  DBA (Doing Business As){" "}
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"dba"}
                  value={dba}
                  onChange={(e) => setFormData({ ...formData, dba: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Email <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"email"}
                  value={email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"number"}
                  value={number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Funding Amount Required{" "}
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="$0.00 - $5,000,000"
                  name="amount"
                  value={amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Start Date<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="MM/DD/YYYY"
                  name="startDate"
                  value={date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Address <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"address"}
                  value={address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"city"}
                  value={city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name="state"
                  value={state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>

              <div>
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Industry<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="Eg. Retail, Manufacturing etc."
                  name={"industry"}
                  value={industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-900">
              ECONOMIC PROFILE
            </h1>
            <p>All fields marked by an asterisk (*) are mandatory.</p>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-4 px-6 md:px-0 lg:px-0">
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Average Monthly Gross Income{" "}
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="$0 - $15M"
                  name={"revenue"}
                  value={revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Credit Score <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"fico"}
                  value={fico}
                  onChange={(e) => setFormData({ ...formData, fico: e.target.value })}
                />
              </div>
              <div className=""></div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Month
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"cMonth"}
                  value={cMonth}
                  onChange={(e) => setFormData({ ...formData, cMonth: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Month <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"lMonth"}
                  value={lMonth}
                  onChange={(e) => setFormData({ ...formData, lMonth: e.target.value })}
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Month before Last <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  name={"bMonth"}
                  value={bMonth}
                  onChange={(e) => setFormData({ ...formData, bMonth: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="">
                  Current Cash Advances <span className="text-red-700">*</span>
                </label>
                <div className="flex gap-6">
                  <div className="flex items-center border border-gray-200 rounded dark:border-gray-700 px-4">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value="yes"
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="bordered-radio-1"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center px-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-2"
                      type="radio"
                      value="no"
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
                {showTextArea && (
                  <div className="col-span-3">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your MCA history
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your MCA history like how many positions/ daily, weekly or monthly.."
                      name={"history"}
                      value={history}
                      onChange={(e) => setFormData({ ...formData, history: e.target.value })}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center col-span-3">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Only pdf formate is supported
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    multiple
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p>
                You Selected These Files:{" "}
                <span className="text-red-700 font-bold">
                  N:B: Please Upload Statements 1 by 1.
                </span>
                <span>
                  {
                    <ul className="list-disc text-sm text-gray-900 dark:text-gray-300">
                      {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  }
                </span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
