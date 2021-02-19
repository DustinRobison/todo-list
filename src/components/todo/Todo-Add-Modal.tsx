import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import React, { useState } from 'react'

const CREATE_TODO_MUTATION = gql`
    mutation createTodo($task: String!) {
        todoCreate(task: $task) {
            id
            task
            done
            archived
            created_at
            updated_at
        }
    }
`

const UPDATE_TODO_MUTATION = gql`
    mutation updateTodo($input: TodoUpdate!) {
        todoUpdate(input: $input) {
            id
            task
            done
            archived
            created_at
            updated_at
        }
    }
`

interface Props {
    open: boolean
    type: string
    onSave: (task: string) => void
    onClose: () => void
    defaultText?: string
    id?: string
}

function TodoAddModal(props: Props) {
    const { open, type, onSave, onClose, defaultText, id } = props
    const [task, setTask] = useState(defaultText || '')

    const [todoCreate, createMutationState] = useMutation(CREATE_TODO_MUTATION)
    const [todoUpdate, updateMutationState] = useMutation(UPDATE_TODO_MUTATION)

    const handleSubmit = () => {
        if (type === 'ADD') {
            todoCreate({
                variables: { task },
            })
        } else if (type === 'UPDATE') {
            todoUpdate({
                variables: { task, id },
            })
        }
        onSave(task)
        setTask('')
        onClose()
    }

    return (
        <div className={`modal ${open ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={() => onClose()} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add a task</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => onClose()}
                    />
                </header>
                <section className="modal-card-body">
                    <input
                        className="input"
                        type="text"
                        placeholder="Add Your New Task"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                    />
                </section>
                <footer className="modal-card-foot">
                    <button
                        className="button is-success"
                        onClick={handleSubmit}
                    >
                        Save changes
                    </button>
                    <button className="button" onClick={() => onClose()}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default TodoAddModal
