import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const TweetType: any = new GraphQLObjectType({
  name: 'Tweet',
  description: 'Somebody that you used to know',
  fields: () => ({
    text: {
      type: GraphQLString,
      resolve: tweet => tweet.text,
    },
    userName: {
      type: GraphQLString,
      resolve: tweet => tweet.user.screen_name,
    },
    location: {
      type: GraphQLString,
      resolve: tweet => tweet.user.location
    }
  })
});

export default TweetType;