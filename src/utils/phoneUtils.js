/**
 * Utility functions for phone number operations
 */

/**
 * Validates if a phone number is in correct international format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
const isValidPhoneNumber = (phoneNumber) => {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return false;
  }

  // Strip any whitespace and ensure it starts with +
  const cleanNumber = (phoneNumber.trim().startsWith('+') ? '' : '+') + phoneNumber.trim();
  
  // Allow any number that:
  // 1. Starts with +
  // 2. Is followed by at least 6 digits
  // 3. Has a maximum of 15 digits (per E.164 standard)
  return /^\+\d{6,15}$/.test(cleanNumber);
};

/**
 * Formats a phone number to ensure it's in E.164 format for Twilio
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} Formatted phone number
 */
const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return '';
  // Add + if not present and keep only digits
  const cleanNumber = phoneNumber.trim();
  return (cleanNumber.startsWith('+') ? '' : '+') + cleanNumber.replace(/\D/g, '');
};

module.exports = {
  isValidPhoneNumber,
  formatPhoneNumber
};
