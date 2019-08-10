const fs = require('fs');

const toArray = posts => Object.entries(posts).map(([, value]) => value);

const toObject = posts => {
  const normalizedData = {};

  posts.forEach(post => {
    normalizedData[post.id] = post;
  });

  return normalizedData;
};

const getPosts = path => {
  const posts = fs.readFileSync(path, 'utf-8');

  return JSON.parse(posts);
};

const setPosts = (path, posts) => {
  fs.writeFileSync(path, JSON.stringify(posts, null, 2));

  return posts;
};

module.exports = {
  toArray,
  toObject,
  getPosts,
  setPosts
};
