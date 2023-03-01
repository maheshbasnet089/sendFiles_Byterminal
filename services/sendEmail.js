const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,

    auth: {
      user: "sendfilespackage@gmail.com",
      pass: "ycofdfiucdulfrdg",
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
