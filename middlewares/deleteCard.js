const Card = require('../models/card');
const validationError = require('../errors');

module.exports = (req, res, next) => {
  Card.findById({ _id: req.params.cardId })
    .then((card) => {
      if (!card) {
        return next(
          new validationError.NotFoundError('Карточки с указанным id не существует'),
        );
      }
      if (card.owner.toHexString() !== req.user._id) {
        return next(
          new validationError.ForbiddenError('У вас нет прав на удаление чужой карточки'),
        );
      }
      return next();
    })
    .catch(next);
};
