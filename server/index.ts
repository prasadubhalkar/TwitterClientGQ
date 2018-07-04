import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import TwitterRestClient from "./TwitterApi";
import QueryType from "./schema";

const app = express();

app.post("/graphql", graphqlHTTP({
    schema: QueryType,
    graphiql: false
}));

app.get("/graphql", graphqlHTTP({
    schema: QueryType,
    graphiql: true
}));

app.listen(process.env.npm_config_port || 3000, () => {
	let allParamsExists = true;
	if(!process.env.npm_config_consumerKey) {
		console.log("consumerKey is missing");
		allParamsExists = false;
	} else if(!process.env.npm_config_consumerSecret) {
		console.log("consumerSecret is missing");
		allParamsExists = false;
	} else if(!process.env.npm_config_accessTokenKey) {
		console.log("accessTokenKey is missing");
		allParamsExists = false;
	} else if(!process.env.npm_config_accessTokenSecret) {
		console.log("accessTokenSecret is missing");
		allParamsExists = false;
	}
	if(!allParamsExists) {
		throw new Error("Parameters missing");
	}
});
