const withCSS = require("@zeit/next-css");
require("dotenv").config();
module.exports = withCSS({ cssModules: true });
module.exports.env = {
  // Reference a variable that was defined in the .env file and make it available at Build Time
  API_URL: process.env.API_URL || undefined,
  API_KEY: process.env.API_KEY || undefined
};
