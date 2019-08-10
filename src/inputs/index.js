const PostInput = `
  input PostInput {
    content: String!
    tags: [String]!
  }
`;

module.exports = `
  ${PostInput}
`;
