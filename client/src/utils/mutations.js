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
        shoppingCart
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
        shoppingCart
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

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($id: ID, $itemId: ID) {
    removeFromCart(_id: $id, itemID: $itemId) {
      _id
      firstName
      lastName
      email
      shoppingCart
    }
  }
`;
