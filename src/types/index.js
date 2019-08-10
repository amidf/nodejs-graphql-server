const Post = `
  type Post {
    id: ID!
    content: String!
    tags: [String]!
    rating: Int!
  }
`;

module.exports = `
  ${Post}
`;
