const AuthError = require('./authError');
const ConflictError = require('./conflictError');
const NotFoundError = require('./notFoundError');
const ValidationError = require('./validationError');
const ForbiddenError = require('./forbiddenError');

module.exports = {
  AuthError,
  ConflictError,
  NotFoundError,
  ValidationError,
  ForbiddenError,
};
