const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { regex } = require('../utils/utils');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const authDelete = require('../middlewares/deleteCard');

cardsRouter.get('/', getCards);
cardsRouter.post(
  '/',
  celebrate({
    body: Joi.object({
      name: Joi.string()
        .min(2)
        .max(30)
        .messages({
          'string.min': 'Название карточки не должно быть меньше 2 символов',
          'string.max': 'Название карточки не должно быть больше 30 символов',
          'any.required': 'Название карточки не должно быть пустым',
        })
        .required(),
      link: Joi.string()
        .regex(regex)
        .messages({
          'string.dataUri': 'Неверная ссылка',
          'any.required': 'Название не должно быть пустым',
        })
        .required(),
    }),
  }),
  createCard,
);
cardsRouter.delete(
  '/:cardId',
  celebrate({
    params: Joi.object({
      cardId: Joi.string()
        .hex().length(24)
        .messages({
          'string.hex': 'Некорректный id',
        }),
    }),
  }),
  authDelete,
  deleteCard,
);
cardsRouter.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object({
      cardId: Joi.string()
        .hex().length(24)
        .messages({
          'string.hex': 'Некорректный id',
        }),
    }),
  }),
  likeCard,
);
cardsRouter.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object({
      cardId: Joi.string()
        .hex().length(24)
        .messages({
          'string.hex': 'Некорректный id',
        }),
    }),
  }),
  dislikeCard,
);

module.exports = cardsRouter;
