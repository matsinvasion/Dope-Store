const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/mutation");
const Query = require("./resolvers/query.js");
const db = require("./db");

// create yoga server

function createServer(){
    return new GraphQLServer({
        typeDefs:"./schema.graphql",
        reslovers:{
            Mutation,
            Query
        },
        resolverValidationOptions:{
            requireResolversForResolveType:false,
        },
        context:req => ({...req,db}),


    });
};

module.exports = createServer;