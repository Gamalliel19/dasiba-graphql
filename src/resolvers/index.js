import { query } from "./query.js";

export const resolvers = {
	Query: query.Query,
	Transaction: query.Transaction,
	TransactionDetail: query.TransactionDetail,
};
