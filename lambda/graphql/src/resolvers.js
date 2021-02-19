const { todos, todoCreate, todoUpdate } = require('./resolvers/index')

module.exports = {
    Query: {
        todos,
    },

    Mutation: {
        todoCreate,
        todoUpdate,
    },
}
