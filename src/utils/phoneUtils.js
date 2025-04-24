/**
 * Utility functions for phone number operations
 */

/**
 * Validates if a phone number is in correct international format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
const isValidPhoneNumber = (phoneNumber) => {
  // More flexible validation for international format
  // Accepts:
  // - Must start with +
  // - Country code (1-3 digits)
  // - Followed by 6-12 digits
  const regex = /^\+[1-9]\d{0,2}\d{6,12}$/;
  return regex.test(phoneNumber);
};

/**
 * Formats a phone number to ensure it's in E.164 format for Twilio
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} Formatted phone number
 */
const formatPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters except the leading +
  return phoneNumber.replace(/[^\d+]/g, '');
};

module.exports = {
  isValidPhoneNumber,
  formatPhoneNumber
};
