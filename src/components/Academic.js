import React, { Component } from 'react'

class Academic extends Component {
    // academicInfo = () => {
    //     <h1>Hello</h1>
    // }
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <img width="100" src="cap.jpg" alt="" />
                    <p style={headerStyle}>Academic Information</p>
                </header>
                <section style={{ textDecoration: 'none' }}>
                    <p>
                        <ul >
                            <li >2002-2010: Grades 1-9, Senanga Basic School.</li>
                            <li>2011-2013: Grades 10-12, Matauka High School</li>
                            <li>2014: Certificate in Computer Basics, Microsoft Office and Internet Technologies – GD Centre
                            for Computer Technology.</li>
                            <li>2015 - Present: Bachelor of Science in Computer Science – Copperbelt University</li>
                            <li>2018 - NASA Space Apps Challenge hackathon</li>
                            <li> 2018 - Africa Code Week Training</li>
                            <li> 2018 - MERN Stack Meet Up- Facebook Developer Circles Lusaka</li>
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


export default Academic
