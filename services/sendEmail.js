const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "SendFiles<sendFiles@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    attachments: options.attachements,
  };
 
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
