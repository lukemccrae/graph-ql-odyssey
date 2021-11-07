const { gql } = require('apollo-server');


const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track!
  }

  # define the mutation: what arguments does it take, what will it return? 
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  # mutations are a way to get specific properties from objects, thus "mutating" them, copying them incompletely
  # here we are defining what the mutation is returning 
    # this is serverland, and we need to define the ways that objects will be "mutated", or copied incompletely
    # why is the word "mutation" used to desxribe this? 
      # my guess is because the needs of front end systems (users) represent the environment and the demand they place on the data needs to be described 
        # so then here, we're describing what we know of how what the users/environment need from our data
          # or rather, which organization of the data is "fit" for this particular environment
            # so then this process is only partly analogous to the natural way
              # data is not dynamically mutating, it could be copied the same forever
                # we have to understand the ways that the environment is changing, and describe the forces that it is placing on the organism, the data
                  # and then rationally alter our data into the shape that our environnemt wants
                    # does this process constitute a positive feedback loop?
                      # where does it stop?
                        #which signals do we listen to?
  type IncrementTrackViewsResponse {
    "similar to HTTP status,. represents state of mutation"
    code: Int!
    "was it successful?"
    success: Boolean!
    "human-readable message for the UI"
    message: String!
    "this can be null because the mutation could fail"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length in minutes"
    length: Int
  }
`;

module.exports = typeDefs;
