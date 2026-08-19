const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/navidu-hab/SIVON-BOT/blob/main/images/WhatsApp%20Image%202026-08-18%20at%2011.44.08%20PM.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*HEY BABY👋 SIVON-V1 IS ALIVE NOW 😍*",
BOT_OWNER: '94726755185',  // Replace with the owner's phone number



};
