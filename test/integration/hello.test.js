const { ApolloServer } = require('apollo-server')
const typeDefs = require('../../src/typeDefs/typeDefs')
const resolvers = require('../../src/resolvers/resolvers')

jest.useFakeTimers()

describe('Say Hello', () => {
  test('should say Hello', async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    const res = await server.executeOperation({
      query: `
        query HelloQuery {
          sayHi
        }
      `,
    })
    expect(res.errors).toBeUndefined()
    expect(res.data.sayHi).toBe('Hello')
  })
})
