import React, { Component } from 'react'

export class Languages extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header >
                    <img width="100" src="prog.jpg" alt="" />
                    <p style={headerStyle}>Favourite Programming Language</p>
                </header>
                <section>
                    <p>
                        <ul>
                            <li>JavaScipt</li>
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

export default Languages
