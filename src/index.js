const express = require('express');
const graphqlHttp = require('express-graphql');

const schema = require('./schema');
const rootValue = require('./root');
const { PORT } = require('./constants');

const app = express();

app.use(
  '/graphql',
  graphqlHttp({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT} port.`);
});
