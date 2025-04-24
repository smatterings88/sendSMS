/**
 * Custom error classes
 */

/**
 * Validation error for request data
 */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Twilio-specific error
 */
class TwilioError extends Error {
  constructor(message, twilioCode, statusCode) {
    super(message);
    this.name = 'TwilioError';
    this.twilioCode = twilioCode;
    this.statusCode = statusCode || 500;
  }
}

module.exports = {
  ValidationError,
  TwilioError
};