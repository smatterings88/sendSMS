/**
 * Validation middleware for API requests
 */
const { ValidationError } = require('../utils/customErrors');
const { isValidPhoneNumber } = require('../utils/phoneUtils');

/**
 * Validates that the phone number is present and in a valid format
 */
const validatePhoneNumber = (req, res, next) => {
  try {
    const { phoneNumber } = req.query;
    
    if (!phoneNumber) {
      throw new ValidationError('Phone number is required');
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      throw new ValidationError(
        'Invalid phone number format. Please use international format (e.g. +1234567890)'
      );
    }
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validatePhoneNumber
};
