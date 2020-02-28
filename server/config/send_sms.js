const accountSid = 'ACc6207249551c3dd897e9cacbe1d01407';
const authToken = 'dc8ce0a8f5e81e0fc803a420ae4a7270';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hola desde mi backend',
     from: '+18159458081',
     to: '+525591902990'
   })
  .then(message => console.log(message.sid));