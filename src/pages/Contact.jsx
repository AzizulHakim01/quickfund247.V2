import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { message } from "antd";

const Contact = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState("");
  const [dba, setDba] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [industry, setIndustry] = useState("");
  const [revenue, setRevenue] = useState("");
  const [fico, setFico] = useState("");
  const [cMonth, setCMonth] = useState("");
  const [lMonth, setLMonth] = useState("");
  const [bMonth, setBMonth] = useState("");
  const [history, setHistory] = useState("");

  const data = {
    name: name,
    dba: dba,
    email: email,
    number: number,
    amount: amount,
    date: date,
    address: address,
    city: city,
    state: state,
    industry: industry,
    revenue: revenue,
    fico: fico,
    c_month: cMonth,
    l_month: lMonth,
    b_month: bMonth,
    history: history,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleOpenPicker();
  };

  const [showTextArea, setShowTextArea] = useState(false);

  const handleRadioChange = (event) => {
    setShowTextArea(event.target.value === "yes");
  };

  // const handleFileChange = (e) => {
  //   const files = e.target.files;
  //   setSelectedFiles([...files]);
  // };

  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();

  const today = `${todayDate}/${todayMonth}/${todayYear}`;

  // Upload handle

  const [file, setFile] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile([...file, selectedFile]);

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;
      const base64Data = result.split("base64,")[1];

      const formData = {
        base64: base64Data,
        type: selectedFile.type,
        name: selectedFile.name,
        businessName: name,
        dba: dba,
        email: email,
        number: number,
        amount: amount,
        date: date,
        address: address,
        city: city,
        state: state,
        industry: industry,
        revenue: revenue,
        fico: fico,
        c_month: cMonth,
        l_month: lMonth,
        b_month: bMonth,
        history: history,
      };

      // Assuming you have an API endpoint for the upload
      fetch("Api_Endpoint_Url", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
    };

    reader.readAsDataURL(selectedFile);
  };

  //https://www.youtube.com/watch?v=17GhfZsCfac&ab_channel=CodeWithSundeep

  return (
    <Layout>
      <div className="">
        <form className="max-w-screen-xl mx-auto flex flex-col gap-16">
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setDba(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setNumber(e.target.value)}
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
                    setAmount(parseFloat(e.target.value).toFixed(2))
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
                  onChange={(e) => setDate(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setCity(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
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
                  onChange={(e) => setIndustry(e.target.value)}
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
                  onChange={(e) => setRevenue(e.target.value)}
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
                  onChange={(e) => setFico(e.target.value)}
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
                  onChange={(e) => setCMonth(e.target.value)}
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
                  onChange={(e) => setLMonth(e.target.value)}
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
                  onChange={(e) => setBMonth(e.target.value)}
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
                      onChange={(e) => setHistory(e.target.value)}
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
                <span>
                  {
                    <ul className="list-disc text-sm text-gray-900 dark:text-gray-300">
                      {file.map((file, index) => (
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
