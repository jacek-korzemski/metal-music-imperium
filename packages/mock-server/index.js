const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { buildSchema } = require('graphql');

const app = express();

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define your root resolver
const root = {
  hello: () => 'Hello world!',
};

// Use graphql-http middleware
app.use(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL UI
  })
);

// Start the server
const port = 9928;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/graphql`);
});
