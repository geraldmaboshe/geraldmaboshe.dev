import React, { Component } from 'react'

export class Learn extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="learn.png" alt="" />
                    <p style={headerStyle}>What I would like to learn</p>
                </header>
                <section>
                    <p>
                        <ul>
                            <li>Business side of code</li>
                            <li>GraphQL</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Other cool latest tech</li>
                        </ul>
                    </p>
                </section>
            </div>
        )
    }
}
const headerStyle = {
    fontSize: '26px'
}

export default Learn
