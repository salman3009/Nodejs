const nodemailer = require("nodemailer");

const smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "salman444g@gmail.com",
      pass: "msngknitrbvicngu",
    },
  })
);

let mailOptions = {
  from: "your.gmail.account@gmail.com",
  to: "salman444g@gmail.com",
  subject: "Test",
  text: "Hello World!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message);
  }
  console.log("success");
});