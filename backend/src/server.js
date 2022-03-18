const express = require('express');
const { graphqlHTTP: expressGraphQL } = require('express-graphql');

const schema = require('./graphql/schema');
const { PORT } = require('./constants');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
