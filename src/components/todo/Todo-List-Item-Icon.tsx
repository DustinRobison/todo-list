import React from 'react'

interface Props {
    done: boolean
}

function TodoListItemIcon(props: Props) {
    const { done } = props

    if (done) {
        return <i className="fas fa-check-circle" aria-hidden="true" />
    } else {
        return <i className="fas fa-circle" aria-hidden="true" />
    }
}

export default TodoListItemIcon
