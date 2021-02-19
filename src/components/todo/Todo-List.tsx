import React, { useState } from 'react'
import gql from 'graphql-tag'
import TodoAddModal from './Todo-Add-Modal'
import TodoListItem from './Todo-List-Item'
import { ITodoItem } from './types'
import { useQuery } from '@apollo/client'

const TODO_FILTERS = ['All', 'Todo', 'Done', 'Archived']
const GET_TODOS_QUERY = gql`
    query getTodos {
        todos {
            id
            task
            done
            archived
            created_at
            updated_at
        }
    }
`

interface Props {}

function TodoList(props: Props) {
    const {} = props
    const { loading, error, data, refetch } = useQuery(GET_TODOS_QUERY)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [filterIdx, setFilterIdx] = useState(0)

    const toggleModal = () => {
        setIsAddOpen(!isAddOpen)
    }

    const handleSave = (newTask: string) => {
        console.log(`SAVED HEANDLED`)
        refetch()
    }

    const filterTodo = (filter: string, todo: ITodoItem): boolean => {
        switch (filter) {
            case TODO_FILTERS[1]:
                return !todo.done
            case TODO_FILTERS[2]:
                return todo.done
            case TODO_FILTERS[3]:
                return todo.archived
            default:
                return true
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const todos = data.todos
    const filteredTodos: ITodoItem[] = Array.isArray(todos)
        ? todos.filter((todo) => filterTodo(TODO_FILTERS[filterIdx], todo))
        : []
    return (
        <>
            <div className="container is-max-desktop">
                {/* Panel Box */}
                <div className="panel">
                    {/* Heading */}
                    <p className="panel-heading">Todo List</p>
                    <p className="panel-tabs">
                        {TODO_FILTERS.map((filter, idx) => (
                            <a
                                key={`${idx}-filter`}
                                className={filterIdx === idx ? 'is-active' : ''}
                                onClick={() => setFilterIdx(idx)}
                            >
                                {filter}
                            </a>
                        ))}
                    </p>

                    {/* List of TODO's to loop through */}
                    {filteredTodos.map((item, idx) => (
                        <TodoListItem key={`${idx}-todo-item`} {...item} />
                    ))}

                    {/* List End Add Button */}
                    <div className="panel-block">
                        <button
                            className="button is-link is-outlined is-fullwidth"
                            onClick={() => toggleModal()}
                        >
                            Add A Todo
                        </button>
                    </div>
                </div>
            </div>
            <TodoAddModal
                type="ADD"
                open={isAddOpen}
                onClose={toggleModal}
                onSave={handleSave}
            />
        </>
    )
}

export default TodoList
