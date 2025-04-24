/**
 * Utility to handle async route handlers and propagate errors to the error middleware
 */

/**
 * Wraps async route handlers to automatically catch and forward errors
 * @param {Function} fn - Async route handler function
 * @returns {Function} Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = {
  asyncHandler
};