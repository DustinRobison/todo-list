const {
    queryTodos,
    insertTodo,
    updateTodo,
} = require('../dataSources/fauna/todo')

const todos = async (root, args, context) => {
    const todoDbObject = await queryTodos()
    return todoDbObject.data.map((todo) => todo.data)
}

const todoCreate = async (root, args, context) => {
    const { task } = args
    return await insertTodo({
        task,
        done: false,
        archived: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    })
}

const todoUpdate = async (root, args, context) => {
    const { todo } = args
    return await updateTodo({ ...todo, updated_at: new Date().toISOString() })
}

module.exports = {
    todos,
    todoCreate,
    todoUpdate,
}
