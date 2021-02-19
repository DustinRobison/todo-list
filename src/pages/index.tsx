import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
    return (
        <Layout>
            <div className="section">
                <h1 className="title">My Todo List:</h1>

                <div className="field">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Input"
                        />
                    </div>
                </div>

                <div className="field">
                    <p className="control">
                        <span className="select">
                            <select>
                                <option>Select dropdown</option>
                            </select>
                        </span>
                    </p>
                </div>

                <div className="buttons">
                    <a className="button is-primary">Primary</a>
                    <a className="button is-link">Link</a>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
