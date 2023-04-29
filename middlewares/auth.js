const jwt = require('jsonwebtoken');
const { AuthError } = require('../errors');
const { JWT_SECRET } = require('../utils/utils');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Необходимо авторизоваться'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthError('Необходимо авторизоваться'));
  }
  req.user = payload;

  return next();
};
