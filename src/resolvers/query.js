import { sql } from "../db/index.js";

export const query = {
	Query: {
		clients: async () => {
			try {
				const clients = await sql`SELECT * FROM client`;
				if (!clients) {
					throw new Error("No Data Found!");
				}
				return clients;
			} catch (error) {
				console.error("Error fetching clients:", error);
				throw new Error("Error fetching clients.");
			}
		},
		client: async (_, { id }) => {
			try {
				const result = await sql`SELECT * FROM client WHERE client_id = ${id}`;
				const client = result[0];
				if (!client) {
					throw new Error(`Client with ID ${id} not found.`);
				}
				return client;
			} catch (error) {
				console.error("Error fetching client:", error);
				throw new Error("Error fetching client.");
			}
		},
		products: async () => {
			try {
				const products = await sql`SELECT * FROM product`;
				if (!products) {
					throw new Error("No Data Found!");
				}
				return products;
			} catch (error) {
				console.error("Error fetching products:", error);
				throw new Error("Error fetching products.");
			}
		},
		product: async (_, { id }) => {
			try {
				const result =
					await sql`SELECT * FROM product WHERE product_id = ${id}`;
				const product = result[0];
				if (!product) {
					throw new Error(`Product with ID ${id} not found!`);
				}
				return product;
			} catch (error) {
				console.error("Error fetching product:", error);
				throw new Error("Error fetching product.");
			}
		},
		transactions: async () => {
			try {
				const transactions = await sql`SELECT * FROM transaction`;
				if (!transactions) {
					throw new Error("No Data Found!");
				}
				return transactions;
			} catch (error) {
				console.error("Error fetching transactions:", error);
				throw new Error("Error fetching transactions.");
			}
		},
		transaction: async (_, { id }) => {
			try {
				const transactions =
					await sql`SELECT * FROM transaction WHERE transaction_id = ${id}`;
				const transaction = transactions[0];
				if (!transaction) {
					throw new Error("No Data Found!");
				}
				return transaction;
			} catch (error) {
				console.error("Error fetching transactions:", error);
				throw new Error("Error fetching transactions.");
			}
		},
	},
	Transaction: {
		client: async (parent) => {
			try {
				const client =
					await sql`SELECT * FROM client WHERE client_id = ${parent.client_id}`;
				return client[0] || null; // Return null if no client found
			} catch (error) {
				console.error("Error fetching client:", error);
				return null;
			}
		},
		transaction_detail: async (parent) => {
			try {
				const details =
					await sql`SELECT * FROM transaction_detail WHERE transaction_id = ${parent.transaction_id}`;
				return details[0] || null; // Return the first detail or null if none found
			} catch (error) {
				console.error("Error fetching transaction details:", error);
				return null;
			}
		},
	},
	TransactionDetail: {
		products: async (parent) => {
			try {
				const products =
					await sql`SELECT p.*, td.transaction_qty FROM transaction_detail td inner join product p on p.product_id = td.product_id where td.transaction_id = ${parent.transaction_id}`;
				return products; // Assuming parent.product_id is correct
			} catch (error) {
				console.error("Error fetching products:", error);
				return null;
			}
		},
	},
};
