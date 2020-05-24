const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/mutation");
const Query = require("./resolvers/query.js");
const db = require("./db");

// create yoga server

function createServer(){
    return new GraphQLServer({
        typeDefs: "src/schema.graphql",
        resolvers:{Query,Mutation},
        //expose db to every request
        context:req => ({...req,db}),


    });
};

module.exports = createServer;