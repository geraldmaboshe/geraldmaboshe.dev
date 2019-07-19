import React, { Component } from 'react'

export class Photo extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="photo.png" alt="" />
                    <p style={headerStyle}>My Photo</p>
                </header>
                <div>
                    <img style={{ borderRadius: '5px' }} width="200" src="pic.jpg" alt="" />
                </div>
            </div>
        )
    }
}
const headerStyle = {
    fontSize: '26px'
}

export default Photo
