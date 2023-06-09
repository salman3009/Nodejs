const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "6e821dfa",
  apiSecret: "23uTBjOCIZZIwcMm"
})

const from = "Vonage APIs"
const to = "918015234250"
const text = 'I love you';

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();