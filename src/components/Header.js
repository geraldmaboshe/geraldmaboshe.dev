import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div style={styling}>
                <p>My Portfolio</p>
            </div>
        );
    }
}
const styling = {
    background: '#333',
    padding: "35px",
    textAlign: 'center',
    fontSize: '50px',
    color: '#ff9900'
}
export default Header;
