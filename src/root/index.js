const uuid = require('uuidv4');

const {
  toArray,
  toObject,
  getPosts: getPostsFromDb,
  setPosts: setPostsToDb
} = require('../db');
const { POSTS_PATH } = require('../constants');

const getPosts = () => toArray(getPostsFromDb(POSTS_PATH));

const getPost = ({ id }) => {
  const posts = getPostsFromDb(POSTS_PATH);

  return posts[id] ? posts[id] : null;
};

const addPost = ({ post }) => {
  const posts = getPostsFromDb(POSTS_PATH);

  const postId = uuid();
  const updatedPost = {
    id: postId,
    rating: 0,
    ...post
  };

  const updatedPosts = {
    ...posts,
    [postId]: updatedPost
  };

  setPostsToDb(POSTS_PATH, updatedPosts);

  return updatedPost;
};

const deletePost = ({ id }) => {
  const posts = toArray(getPostsFromDb(POSTS_PATH));

  const updatedPosts = posts.filter(post => post.id !== id);

  setPostsToDb(POSTS_PATH, toObject(updatedPosts));

  return 'post was deleted';
};

const updatePostRating = ({ id, rating }) => {
  const posts = getPostsFromDb(POSTS_PATH);

  const updatedPost = {
    ...posts[id],
    rating
  };

  const updatedPosts = {
    ...posts,
    [id]: updatedPost
  };

  setPostsToDb(POSTS_PATH, updatedPosts);

  return updatedPost;
};

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePostRating
};
