import React, { useState } from 'react'

interface Props {
    open: boolean
    onSave: (task: string) => void
    onClose: () => void
    defaultText?: string
}

function TodoAddModal(props: Props) {
    const { open, onSave, onClose, defaultText } = props
    const [task, setTask] = useState(defaultText || '')

    const handleSubmit = () => {
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
