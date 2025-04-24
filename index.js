/**
 * Main entry point for the Twilio SMS Service
 */
require('dotenv').config();
const server = require('./src/server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`SMS service running on port ${PORT}`);
});