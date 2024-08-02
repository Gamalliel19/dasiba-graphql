import { sql } from "../db/index.js";

export const resolvers = {
	Query: {
		clients: async () => {
			const clients = await sql`SELECT * FROM client`;
			return clients;
		},
	},
};
