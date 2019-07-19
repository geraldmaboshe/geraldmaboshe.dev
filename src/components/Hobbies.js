import React, { Component } from 'react'

export class Hobbies extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="hb.png" alt="" />
                    <p style={headerStyle}>Hobbies</p>
                </header>
                <section>
                    <p>
                        <ul>
                            <li>Listening to music</li>
                            <li>Playing pool</li>
                            <li>Playing basketball</li>
                            <li>Working out in the gym</li>
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

export default Hobbies
