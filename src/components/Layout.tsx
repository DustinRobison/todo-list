import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/all.scss'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const {} = props

    return (
        <>
            <Helmet>
                <script
                    defer
                    src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
                />
            </Helmet>
            <div>{props.children}</div>
        </>
    )
}

export default Layout
