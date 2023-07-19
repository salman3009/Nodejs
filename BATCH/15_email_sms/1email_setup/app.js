const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(
      smtpTransport({
          service:"gmail",
          host:"smtp.gmail.com",
          port:587,
          secure:false,
          auth:{
            user:"salmang@gmail.com",
            pass:"xyz"
          }
      })
);

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'salman444g@gmail.com', // sender address
    to: "vivek@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world Test?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);