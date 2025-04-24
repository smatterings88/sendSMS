/**
 * Twilio service for SMS functionality
 */
const twilio = require('twilio');
const { TwilioError } = require('../utils/customErrors');
const { formatPhoneNumber } = require('../utils/phoneUtils');

// Initialize Twilio client
const initTwilioClient = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  if (!accountSid || !authToken) {
    throw new Error('Twilio credentials not configured. Please set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN environment variables.');
  }
  
  return twilio(accountSid, authToken);
};

/**
 * Send SMS using Twilio
 * @param {string} phoneNumber - Target phone number
 * @param {string} messageBody - SMS message content
 * @returns {Promise<object>} Twilio response
 */
const sendSms = async (phoneNumber, messageBody) => {
  try {
    const client = initTwilioClient();
    const formattedNumber = formatPhoneNumber(phoneNumber);
    
    // Get the Twilio phone number from environment variables
    const from = process.env.TWILIO_PHONE_NUMBER;
    
    if (!from) {
      throw new Error('Twilio phone number not configured. Please set TWILIO_PHONE_NUMBER environment variable.');
    }
    
    const message = await client.messages.create({
      body: messageBody,
      from,
      to: formattedNumber
    });
    
    return message;
  } catch (error) {
    if (error.code) {
      // This is a Twilio error
      throw new TwilioError(
        `Twilio error: ${error.message}`,
        error.code,
        error.status
      );
    }
    throw error;
  }
};

module.exports = {
  sendSms
};