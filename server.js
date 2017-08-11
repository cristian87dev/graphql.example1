const express = require('express');
const expressGraphQL = require('express-graphql');
const graphQL = require('graphql');
const _ = require('lodash');

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Listen at PORT: 4000'));
