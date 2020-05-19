import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($email: String!) {
    login(email: $email) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export const PRODUCTS = gql`
  query Products {
    products {
      id
      name
      description
      image
      price
    }
  }
`;
