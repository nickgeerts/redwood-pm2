export const schema = gql`
  type Framework {
    id: Int!
    name: String!
    claps: Int!
    createdAt: DateTime!
  }

  type Query {
    frameworks: [Framework!]! @skipAuth
    framework(id: Int!): Framework @skipAuth
  }

  type Mutation {
    clapFramework(id: Int!): Framework @skipAuth
  }
`
