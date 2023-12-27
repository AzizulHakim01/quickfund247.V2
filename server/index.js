const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '100mb' })); // Increase payload limit
app.use(cors());

const corsOptions = {
  origin: '*', // Update this to the appropriate origin in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sheikhmunna887@gmail.com',
    pass: 'vfqv qndn iext daeq',
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const { pdfDataUrl, formData } = req.body;

    // Convert Data URL to Buffer
    const pdfBuffer = Buffer.from(pdfDataUrl.split(',')[1], 'base64');

    // Create a unique file name
    const fileName = `Applcation_${formData.bussiness_name}_${Date.now()}.pdf`;

    const mailOptions = {
      from: 'sheikhmunna887@gmail.com',
      to: 'azizulhakimgps@gmail.com',
      subject: `Merchant Funding Request Received for ${formData.bussiness_name}.`,
      text: `Chech the Attachments for ${formData.bussiness_name}.`,
      attachments: [
        {
          filename: fileName,
          content: pdfBuffer,
        },
      ],
    };

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
