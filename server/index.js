const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3000;

// Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sheikhmunna887@gmail.com', // replace with your Gmail address
    pass: 'vfqv qndn iext daeq', // replace with your Gmail password
  },
});

// Express middleware to handle file uploads
app.post('/upload', upload.array('files', 10), async (req, res) => {
    try {
      const pdfBuffer = req.files.find((file) => file.fieldname === 'pdf').buffer;
      const { name } = req.body; // Extract 'business_name' from the request body
  
      // Construct a unique filename based on the business name
      const pdfFilename = `${name}_Funding_Request_Application.pdf`;
  
      // Send email
      await transporter.sendMail({
        from: 'sheikhmunna887@gmail.com', // replace with your Gmail address
        to: 'azizulhakimgps@gmail.com', // replace with recipient email
        subject: 'Merchant Funding Request Application Received',
        text: 'Please find attached files.',
        attachments: [
          {
            filename: pdfFilename,
            content: pdfBuffer,
          },
          // Add other files
          ...(req.files
            .filter((file) => file.fieldname !== 'pdf')
            .map((file) => ({
              filename: file.originalname,
              content: file.buffer,
              encoding: 'base64', // specify encoding
            }))),
        ],
      });
  
      res.status(200).send('Email sent successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
