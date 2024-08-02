export const typeDefs = `

type Client {
    client_id: ID!
    client_name: String!
    client_phone: Int!
    client_address: String!
}

type Query {
    clients: [Client]
}
`;
