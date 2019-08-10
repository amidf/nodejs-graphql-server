const { buildSchema } = require('graphql');

const types = require('../types');
const inputs = require('../inputs');
const mutations = require('../mutations');
const queries = require('../queries');

module.exports = buildSchema(`
  ${types}
  ${inputs}
  ${mutations}
  ${queries}
`);
