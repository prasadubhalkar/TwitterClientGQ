import * as express from "express";
import * as ejs from "ejs";
import clientRoutes from "./routes/client";
import graphQlRoutes from "./routes/graphql";
const app = express();

app.engine("html", ejs.renderFile);
app.set("views", ".");
app.set("view engine", "html");
app.use(express.static("."));

app.use('/client', clientRoutes);
app.use('/graphql', graphQlRoutes);
const port = process.env.npm_config_port || 3000;

app.listen(port, () => {
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
	else {
		console.log("Server start at port", port);
	}
});
