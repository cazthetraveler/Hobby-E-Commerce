import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
        shoppingCart {
          _id
          itemName
          itemDescription
          category
          price
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
        shoppingCart {
          _id
          category
          itemDescription
          itemName
          price
        }
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation Mutation($id: ID) {
    addCart(_id: $id) {
      _id
      firstName
      lastName
      email
      shoppingCart
    }
  }
`;
