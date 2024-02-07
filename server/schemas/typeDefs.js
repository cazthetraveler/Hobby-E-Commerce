const typeDefs = `

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    shoppingCart: [Item]
  }

  type Item { 
    _id: ID
    itemName: String
    itemDescription: String
    category: [String]
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    items: [Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addCart(_id: ID, itemName: String, itemDescription: String, category: [String], price: Int): User
  }
`;

module.exports = typeDefs;
