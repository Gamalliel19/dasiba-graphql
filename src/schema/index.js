export const typeDefs = `

scalar Date

type Product {
    product_id: ID!
    product_name: String!
    product_type: String!
    product_ply: Int!
    product_price: Float!
    product_stock: Int!
    transaction_qty: Int
}

type Client {
    client_id: ID!
    client_name: String!
    client_phone: String!
    client_address: String!
}

type TransactionDetail {
    transaction_detail_id: ID!
    transaction_id: Int!
    product_id: Int!
    products: [Product]
}

type Transaction {
    transaction_id: ID!
    transaction_date: Date!
    total_bayar: Int!
    tipe_bayar: String!
    client: Client
    transaction_detail: TransactionDetail
}

type Query {
    clients: [Client]
    products: [Product]
    transactions: [Transaction]

    client(id: ID!): Client
    product(id: ID!): Product
    transaction(id: ID!): Transaction
}
`;
