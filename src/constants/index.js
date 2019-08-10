const path = require('path');

const POSTS_PATH = path.resolve('src/db/posts.json');
const PORT = process.env.PORT || 80;

module.exports = {
  POSTS_PATH,
  PORT
};
