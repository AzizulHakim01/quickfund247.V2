// Redux slice setup
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pdfFiles: [], // Store PDF blobs here
};

const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    addPDF: (state, action) => {
      state.pdfFiles.push(action.payload);
    },
    clearPDFs: (state) => {
      state.pdfFiles = [];
    },
  },
});

export const { addPDF, clearPDFs } = pdfSlice.actions;
export const selectPDFs = (state) => state.pdf.pdfFiles;

export default pdfSlice.reducer;
