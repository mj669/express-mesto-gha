const JWT_SECRET = 'some-secret-key';
const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const allowedCors = [
  'https://mj669.nomoredomains.monster',
  'http://mj669.nomoredomains.monster',
  'localhost:3000',
];

module.exports = {
  regex,
  JWT_SECRET,
  allowedCors,
};
