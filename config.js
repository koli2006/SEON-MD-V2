const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=fRcXwKbC#a5-SrbqtkMUzvg4078ZXEZPZbJeOyAzTnQ3b0Biqopk' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'koli2006': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
