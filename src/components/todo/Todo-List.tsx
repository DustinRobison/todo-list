import React, { useState } from 'react'
import TodoAddModal from './Todo-Add-Modal'
import TodoListItem from './Todo-List-Item'
import { ITodoItem } from './types'

const TODO_FILTERS = ['All', 'Todo', 'Done', 'Archived']

interface Props {}

function TodoList(props: Props) {
    const {} = props
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [items, setItems] = useState<ITodoItem[]>([])
    const [filterIdx, setFilterIdx] = useState(0)

    const toggleModal = () => {
        setIsAddOpen(!isAddOpen)
    }

    const handleSave = (newTask: string) => {
        setItems([
            ...items,
            {
                id: items.length.toString(),
                task: newTask,
                done: false,
                archived: false,
            },
        ])
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

    const filteredTodos: ITodoItem[] = items.filter((item) =>
        filterTodo(TODO_FILTERS[filterIdx], item)
    )

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
                open={isAddOpen}
                onClose={toggleModal}
                onSave={handleSave}
            />
        </>
    )
}

export default TodoList
