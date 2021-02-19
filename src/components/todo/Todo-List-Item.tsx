import React from 'react'

interface Props {}

function TodoListItem(props: Props) {
    const {} = props

    return (
        <div className="panel-block is-active">
            <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            Laundry
        </div>
    )
}

export default TodoListItem
