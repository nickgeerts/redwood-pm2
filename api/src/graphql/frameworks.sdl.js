export const schema = gql`
  type Framework {
    id: Int!
    name: String!
    claps: Int!
    createdAt: DateTime!
  }

  type Query {
    frameworks: [Framework!]!
    framework(id: Int!): Framework
  }

  type Mutation {
    clapFramework(id: Int!): Framework
  }
`
