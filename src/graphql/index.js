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
