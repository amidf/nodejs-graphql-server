const GetPostsQuery = `
  getPosts: [Post]!
`;

const GetPostQuery = `
  getPost(id: ID!): Post
`;

module.exports = `
  type Query {
    ${GetPostsQuery}
    ${GetPostQuery}
  }
`;
