import React, { useState } from 'react'

interface Props {
    open: boolean
    onSave: (task: string) => void
    onClose: () => void
}

function TodoAddModal(props: Props) {
    const { open, onSave, onClose } = props
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`modal ${open ? 'is-active' : ''}`}
        >
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
                        onChange={(e) => setInput(e.target.value)}
                    />
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" type="submit">
                        Save changes
                    </button>
                    <button className="button" onClick={() => onClose()}>
                        Cancel
                    </button>
                </footer>
            </div>
        </form>
    )
}

export default TodoAddModal
