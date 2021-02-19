import React, { useState } from 'react'
import TodoAddModal from './Todo-Add-Modal'
import TodoListItem from './Todo-List-Item'

interface Props {}

function TodoList(props: Props) {
    const {} = props
    const [isAddOpen, setIsAddOpen] = useState(false)

    const toggleModal = () => {
        setIsAddOpen(!isAddOpen)
    }

    return (
        <>
            <div className="container is-max-desktop">
                {/* Panel Box */}
                <div className="panel">
                    {/* Heading */}
                    <p className="panel-heading">Todo List</p>
                    <p className="panel-tabs">
                        <a className="is-active">All</a>
                        <a>Todo</a>
                        <a>Done</a>
                    </p>

                    {/* List of TODO's to loop through */}
                    <TodoListItem />

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
            <TodoAddModal open={isAddOpen} onClose={toggleModal} />
        </>
    )
}

export default TodoList
