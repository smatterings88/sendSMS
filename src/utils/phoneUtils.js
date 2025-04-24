/**
 * Utility functions for phone number operations
 */

/**
 * Validates if a phone number is in correct international format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
const isValidPhoneNumber = (phoneNumber) => {
  // Basic validation for international format (starts with + followed by digits)
  const regex = /^\+[1-9]\d{1,14}$/;
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