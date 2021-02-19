const { gql } = require('apollo-server-lambda')

module.exports = gql`
    type Todo {
        id: ID
        task: String
        done: Boolean
        archived: Boolean
        created_at: Int
        updated: Int
    }

    input TodoUpdate {
        id: ID!
        task: String
        done: Boolean
        archived: Boolean
    }

    type Query {
        todos: [Todo]!
    }

    type Mutation {
        todoCreate(task: String): Todo
        todoUpdate(todo: TodoUpdate): Todo
    }
`
