import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    users {
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
`;

export const GET_ITEMS = gql`
  query Items {
    items {
      _id
      itemName
      itemDescription
      category
      price
    }
  }
`;

export const GET_ONE_ITEM = gql`
  query Item($itemId: ID!) {
    item(itemId: $itemId) {
      _id
      category
      itemDescription
      itemName
      price
    }
  }
`;
