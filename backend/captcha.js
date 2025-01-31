// const axios = require('axios');

// const verifyCaptcha = async (captchaToken) => {
//   const secretKey = '6LdTwMcqAAAAAPP5qjX_a10yF-nsLL0ttoVgqhch'; // Replace with actual secret key
//   const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

//   try {
//     const response = await axios.post(url);
//     return response.data.success; // Returns true if CAPTCHA is valid
//   } catch (error) {
//     console.error("Error verifying reCAPTCHA:", error);
//     return false;
//   }
// };

// module.exports = { verifyCaptcha };
