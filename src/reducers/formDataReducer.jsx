// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    // Your existing form fields here
    application_date:"",
    business_name: "",
    business_type: "",
    business_email: "",
    business_number: "",
    amount_asking: "",
    business_date: "",
    address: "",
    city: "",
    state: "",
    industry: "",
    monthly_revenue: "",
    fico: "",
    current_month: "",
    last_month: "",
    before_last_month: "",
    history: "",
    date: "",
    purpose_capital: "",

    // New field for storing filenames
    files:[],
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addFile: (state, action) => {
      state.formData.files.push({ id: action.payload.id, name: action.payload.name });
    },
    removeFile: (state, action) => {
      state.formData.files = state.formData.files.filter((file) => file.id !== action.payload);
    },
  },
});

export const { updateFormData, addFile, removeFile } = formSlice.actions;
export const selectFormData = (state) => state.form.formData;

export default formSlice.reducer;
