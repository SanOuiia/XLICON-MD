const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2250150886213"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '2250150886213' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tId2EzaU1kMmtwa3UvSkRSVk4rekxIb2J2YnFpN2dZYkJvY3lBTWoyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBpNUhVc1VQUG9IWFRUQXJHTG80WjV2VUNsSGE1NlFwSWQ2SnFCVFZqWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTXRhQURlQnEzV3ZIcFZNcGFHZEhDNGhZM29TWjlrUjJCSGVFZGM1UGtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtU3drRGNMNDFlOEtKTUF4WXhVWjdZTS9QbUNsS1M5NXBNSlFLWU9VQlVVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDK29ER0NENCtoOUU4dlEyM2dZTTh5a0tMd1pIbWZYZjlINU9QMklTRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4WGIyOHN4a3c5dDc3OUtKZ1o1bmcyQmJCT3BpTm1kOSsxVk1nalhsQnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4N3ZDbTljMjZKUTduRkVVWjBKTWVSek5TQVJEeE9uNmt2U21rVDIvWnRubDUwb2dVKytXZEZJL2RKRmlvVVYzQ1NYYVIwUFN5N2tET1NXZHk4Rjlqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM0LCJhZHZTZWNyZXRLZXkiOiJNNmNXZjJsZ3N3QjRabEEwNFV1Qm5OOVYwTzdUV0FlOUUvQm9XRkNobExFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZeFhtNS12TFNMVzB6UksybUxRYUhBIiwicGhvbmVJZCI6IjEyZDZjMDJmLTkyZWUtNGU2ZC04MDA1LTc0ZjE2MGQyZjA4NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydmJGSEhvSXcyYkxpNS9mQ053Z0d3eEhCd009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Yc3pSV2tVUXA4UnJzYWVldDRDNXNxOEJNaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ydTAva0dFSmV3OWNJR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndrMWphUEM3VnpEU1EyRDB6RlFhenYwWUk3RzBVdklYMHFPZXlqZVIxRTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9idGx3TWFCVk93OEwwREFVMElKVVQ0am1DSFhXZUVtS01EWmhyMnUrazFXR2VIVnd2Mm5kVXQwbitabnlPR09EaHBxaUhzVnUyOC81amV5QVBTdENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvRFpRb3JKcVhYM1NaYmFqWVVaRXptTXBUZHQwTlRRZzR2OTNxb0tZTXFyTCtaTEU0R3V2VGJWYTI3SnNnRk5ocDhCZUJIanRXTVRuNGUvT2tsRjFndz09In0sIm1lIjp7ImlkIjoiMjI1NTA4ODYyMTM6OUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU1MDg4NjIxMzo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNKTlkyand1MWN3MGtOZzlNeFVHczc5R0NPeHRGTHlGOUtqbnNvM2tkUk4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA5NDc4NjZ9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'liame',
  packname:  process.env.PACK_NAME || 'liame',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'liame' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
