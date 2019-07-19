import React, { Component } from 'react'

export class SoftSkils extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="soft.jpg" alt="" />
                    <p style={headerStyle}>Soft Skills</p>
                </header>
                <section>
                    <p>
                        <ul>
                            <li>Positive Attitude</li>
                            <li>Time Management</li>
                            <li>Problem Solving</li>
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

export default SoftSkils
