import React from 'react'
import '../styles/all.scss'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const {} = props

    return <div>{props.children}</div>
}

export default Layout
