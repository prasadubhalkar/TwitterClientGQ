import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import QueryType from "../schema";
const router = express.Router();

router.post("/", graphqlHTTP({
    schema: QueryType,
    graphiql: false
}));

router.get("/", graphqlHTTP({
    schema: QueryType,
    graphiql: true
}));

export default router;