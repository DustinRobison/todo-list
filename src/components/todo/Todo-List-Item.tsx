import React, { useState } from 'react'
import TodoAddModal from './Todo-Add-Modal'
import TodoListItemIcon from './Todo-List-Item-Icon'
import { ITodoItem } from './types'

function TodoListItem({ task, done, archived }: ITodoItem) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleSave = (task: string) => {
        // TODO update data
    }

    const handleArchive = () => {
        // TODO update data
    }

    return (
        <>
            <div className="panel-block is-active">
                <span className="panel-icon">
                    <TodoListItemIcon done={done} />
                </span>
                <div className="level" style={{ width: '100%' }}>
                    <div className="level-left">{task}</div>
                    <div className="level-right">
                        <button
                            className="button ml-1"
                            onClick={() => setIsOpen(true)}
                        >
                            <span className="icon is-small">
                                <i className="fas fa-edit" />
                            </span>
                        </button>
                        <button className="button ml-1">
                            <span className="icon is-small">
                                <i className="fas fa-archive" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <TodoAddModal
                type="UPDATE"
                open={isOpen}
                onClose={toggleModal}
                onSave={handleSave}
                defaultText={task}
            />
        </>
    )
}

export default TodoListItem
