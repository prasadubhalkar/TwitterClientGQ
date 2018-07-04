import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import TweetType from "./TweetType";
import TwitterApi from "../TwitterApi";

const fetchTweets = async () => {
  let response = await TwitterApi.Instance.search("#WorldCup2018");
  return response.statuses;
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Tweets for Search Result',
  fields: () => ({
    allTweets: {
      type: new GraphQLList(TweetType),
      resolve: root => fetchTweets()
    }
  }),
});

export default QueryType;