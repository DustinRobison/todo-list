const { ApolloServer } = require('apollo-server-lambda')
const resolvers = require('./src/resolvers')
const typeDefs = require('./src/schema')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (res) => {
        return res.context.clientContext.user
    },
    playground: true,
})

exports.handler = server.createHandler()
