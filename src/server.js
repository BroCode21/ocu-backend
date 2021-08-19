const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs/typeDefs')
const resolvers = require('./resolvers/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen({ port: 5000 })
  .then((res) => console.log(`Server started at ${res.url}`))
