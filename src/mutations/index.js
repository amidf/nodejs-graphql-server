const AddPostMutation = `
  addPost(post: PostInput): Post
`;

const DeletePostMutation = `
  deletePost(id: ID!): String
`;

const UpdatePostRatingMutation = `
  updatePostRating(id: ID!, rating: Int!): Post
`;

module.exports = `
  type Mutation {
    ${AddPostMutation}
    ${DeletePostMutation}
    ${UpdatePostRatingMutation}
  }
`;
