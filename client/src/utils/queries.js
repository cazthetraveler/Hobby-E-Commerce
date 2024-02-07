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
