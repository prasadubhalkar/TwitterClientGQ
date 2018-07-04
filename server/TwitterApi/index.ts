const Twitter = require("twitter");

class TwitterRestClient {
	private twitterClient: any;
	
	private static instance: TwitterRestClient;
	
	private constructor() {
		this.twitterClient = new Twitter({
		  consumer_key: process.env.npm_config_consumerKey,
		  consumer_secret: process.env.npm_config_consumerSecret,
		  access_token_key: process.env.npm_config_accessTokenKey,
		  access_token_secret: process.env.npm_config_accessTokenSecret
		});	
	}
	
	public async search(searchTerm: String) {
		try {
			return await this.twitterClient.get("search/tweets", {q: searchTerm, count: 1});
		}
		catch(error) {
			console.log(error.message);
		}
	}

	public static get Instance() {
		return this.instance || (this.instance = new this());
	}
}

export default TwitterRestClient;
