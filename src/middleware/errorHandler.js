/**
 * Global error handling middleware
 */
const { ValidationError, TwilioError } = require('../utils/customErrors');

/**
 * Central error handler for the application
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  // Handle validation errors
  if (err instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  
  // Handle Twilio-specific errors
  if (err instanceof TwilioError) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      code: err.twilioCode
    });
  }
  
  // Rate limiting errors
  if (err.statusCode === 429) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later'
    });
  }
  
  // Default error response
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = {
  errorHandler
};