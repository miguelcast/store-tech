import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://psql-products-demo.herokuapp.com/graphql',
});

export default client;
