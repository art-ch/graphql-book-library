const express = require('express');
const cors = require('cors');
const { graphqlHTTP: expressGraphQL } = require('express-graphql');

const schema = require('./graphql/schema');
const { ROUTE, PORT } = require('./constants');

const app = express();

app.use(cors());
app.use(
  ROUTE,
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
