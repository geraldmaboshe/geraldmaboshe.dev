import React, { Component } from 'react'

export class Fears extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="fear.jpg" alt="" />
                    <p style={headerStyle}>Fears</p>
                </header>
                <section>
                    <p>
                        <ul>
                            <li>Heights</li>
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

export default Fears
