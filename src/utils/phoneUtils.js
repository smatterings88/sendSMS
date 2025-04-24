/**
 * Utility functions for phone number operations
 */

/**
 * Validates if a phone number is in correct international format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
const isValidPhoneNumber = (phoneNumber) => {
  try {
    // Strip any whitespace and special characters
    const cleanNumber = phoneNumber.trim();
    
    // Basic validation for international format
    // Accepts numbers starting with + followed by digits
    // Minimum length of 8 characters (+ and at least 7 digits)
    // Maximum length of 16 characters (+ and up to 15 digits per E.164)
    return /^\+\d{7,15}$/.test(cleanNumber);
  } catch (error) {
    return false;
  }
};

/**
 * Formats a phone number to ensure it's in E.164 format for Twilio
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} Formatted phone number
 */
const formatPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters except the leading +
  return phoneNumber.trim().replace(/[^\d+]/g, '');
};

module.exports = {
  isValidPhoneNumber,
  formatPhoneNumber
};
