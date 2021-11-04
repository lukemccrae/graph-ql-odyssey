const resolvers = {
  //these corrospond to whats defined in the schema query
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, {id}, {dataSources}) => {
      //i believe this method corrosponds to whats inside my express route
      //this is the "integration" where graphQL is hooking into my node api
      return dataSources.trackAPI.getTrack(id)
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    //here the id is in the parent object because it is called in a resolver chain ??
    //parent has the data from the previous resolver in the chain
    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  },
};

module.exports = resolvers;
