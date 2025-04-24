/**
 * SMS route handling
 */
const express = require('express');
const router = express.Router();
const { sendSms } = require('../services/twilioService');
const { validatePhoneNumber } = require('../middleware/validation');
const { asyncHandler } = require('../utils/asyncHandler');

/**
 * @route GET /api/sms/send
 * @desc Send SMS message via Twilio
 * @access Public
 * @param {string} phoneNumber - Target phone number in international format
 * @param {string} message - Optional custom message (defaults to configured message)
 * @returns {object} Success/failure response
 */
router.get('/send', validatePhoneNumber, asyncHandler(async (req, res) => {
  const { phoneNumber } = req.query;
  // Get custom message or use default from config
  const message = req.query.message || process.env.DEFAULT_SMS_MESSAGE || 'Hello from Twilio SMS Service';
  
  const result = await sendSms(phoneNumber, message);
  
  res.status(200).json({
    success: true,
    message: 'SMS sent successfully',
    data: {
      sid: result.sid,
      to: result.to,
      status: result.status
    }
  });
}));

module.exports = router;