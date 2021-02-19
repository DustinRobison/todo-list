const { q, getFaunaClient } = require('./index')

const queryTodos = async () => {
    return await getFaunaClient().query(
        q.Map(
            q.Paginate(q.Match(q.Index('All'))),
            q.Lambda((x) => q.Get(x))
        )
    )
}

const insertTodo = async (todo) => {
    try {
        const newTodo = await getFaunaClient().query(
            q.Create(q.Collection('todo'), { data: { ...todo, id: q.NewId() } })
        )
        return newTodo.data
    } catch (e) {
        console.warn(`insertTodo error: ${e}`)
        return {}
    }
}

const updateTodo = async (todo) => {
    return getFaunaClient().query(
        q.Update(
            q.Select(['ref'], q.Get(q.Match(q.Index('todos_by_id'), todo.id))),
            todo
        )
    )
}

module.exports = {
    queryTodos,
    insertTodo,
    updateTodo,
}
