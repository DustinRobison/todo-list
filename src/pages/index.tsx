import * as React from 'react'
import Layout from '../components/Layout'
import TodoList from '../components/todo/Todo-List'

const IndexPage = () => {
    return (
        <Layout>
            <div className="section">
                <TodoList />
            </div>
        </Layout>
    )
}

export default IndexPage
