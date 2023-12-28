const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(express.json({ limit: '100mb' })); // Increase payload limit
app.use(cors());

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 100, // Example: 100 MB for field size
  },
});

const corsOptions = {
  origin: '*', // Update this to the appropriate origin in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const PORT = 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sheikhmunna887@gmail.com',
    pass: 'vfqv qndn iext daeq',
  },
});

app.post('/send-email', upload.array('files', 10), async (req, res) => {
  try {
    const files = req.files;
    const pdfDataUrl = req.body.pdfDataUrl;
    const formData = JSON.parse(req.body.formData);
    const pdfBuffer = Buffer.from(pdfDataUrl.split(',')[1], 'base64');
    const mailOptions = {
      from: 'sheikhmunna887@gmail.com',
      to: 'azizulhakimgps@gmail.com',
      subject: `Merchant Funding Request Received for ${formData.business_name}.`,
      text: `Check the Attachments for ${formData.business_name}. They are looking for ${formData.amount_asking} and their monthly revenue is ${formData.monthly_revenue}`,
      attachments: [],
    };

    // Attach PDF
    const fileName = `Application_${formData.business_name}_${formData.date}.pdf`;
    mailOptions.attachments.push({
      filename: fileName,
      content: pdfBuffer,
    });

    // Attach at least 4 files
    for (let i = 0; i < Math.min(4, files.length); i++) {
      if (files[i]) {
        const fileBuffer = files[i].buffer;
        console.log(fileBuffer)
        const attachmentName = files[i].originalname;
        mailOptions.attachments.push({
          filename: attachmentName,
          content: fileBuffer,
        });
      }
    }
    res.setHeader('Content-Type', 'application/pdf');

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
