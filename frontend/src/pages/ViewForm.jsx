import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { clearFiles, selectFormData } from "../reducers/formDataReducer";
import { useNavigate } from "react-router-dom";
import { html2pdf } from "html2pdf.js";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import axios from "axios";
import {message} from "antd"
import Loader from "./Loader";

const ViewForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formData = useSelector(selectFormData);
  const navigate = useNavigate();
  const contentRef = useRef(null)
  const dispatch = useDispatch();
  const selectedFiles = useSelector((state) => state.form.formData.files);

  


  const handlePrint = useReactToPrint({
    content: () => document.getElementById('print-content'),
  });

  const handleDownload = () => {
    const input = document.getElementById('print-content');
  
    // Ensure that the input element exists
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          unit: 'mm',
          format: 'a4',
        });
  
        // Calculate the width and height to fit the PDF page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = canvas.width / canvas.height;
        const imgWidth = pdfWidth;
        const imgHeight = pdfWidth / ratio;
  
        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
        // Save the PDF with a specific filename
        pdf.save(`${formData.business_name}_Fund_Request_Application.pdf`);
      });
    } else {
      console.error("Element with id 'print-content' not found");
    }
  };
///Handle submit
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setIsLoading(true);

    // Generate PDF and convert to Base64
    const pdfDataUrl = await generatePdf();

    // Send PDF data to the server
    const response = await axios.post('http://localhost:3000/send-email', {
      pdfDataUrl,
      formData,
    },{
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    console.log(response.data);
    message.success('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    message.error('Failed to send email');
  } finally {
    setIsLoading(false);
  }
};

// Function to generate PDF and return as Base64 Data URL
const generatePdf = () => {
  return new Promise((resolve, reject) => {
    const input = document.getElementById('print-content');

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          unit: 'mm',
          format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = canvas.width / canvas.height;
        const imgWidth = pdfWidth;
        const imgHeight = pdfWidth / ratio;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfDataUrl = pdf.output('dataurlstring');
        resolve(pdfDataUrl);
      });
    } else {
      reject(new Error("Element with id 'print-content' not found"));
    }
  });
};


  const handleEdit = () => {
    navigate("/contact");
  };
  return (
    <Layout>
    {isLoading && <Loader />}
      <div className="px-4">
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
    </Layout>
  );
};

export default ViewForm;
