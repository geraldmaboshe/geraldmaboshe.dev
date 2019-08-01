import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class Header extends Component {

    render() {
        return (
            <Router>
            <div style={styling}>
                <div style={navigation}>
                    <Link style={Link1} to="/">🖥 Gerald Maboshe</Link> 
                    <div style={divLink}>
                        <Link style={otherLinks}  to="articles">Articles</Link> | <Link style={otherLinks} to="events">Events</Link>
                    </div>
                </div>
                <div style={main}>
                    <h1>Hey, I'm Gerald 😊
                    <img style={imgStyle} src="pic.jpg"/>
                    </h1>
                        <p>
                        I'm a modern JavaScript developer and a data science enthusiast <br />
                        I love building web apps and everything tech
                    </p>
                </div>
                <div style={followBtns}>
                    <button style={btns} onClick={()=> {
                        //same tab
                       //window.location.href="https://github.com/geraldMaboshe"
                       
                       //new tab
                       window.open("https://github.com/geraldMaboshe","_blank")
 
                    }}> 
                        <img src="github.png" width="20px"/>
                        Follow
                    </button>
                    <button style={btns} onClick={() => {
                        window.open('https://www.linkedin.com/in/gerald-maboshe-339846164/','_blank')
                    }}> 
                        <img src="linked.png" width="20px"/>
                        Connect
                    </button>
                    <button style={btns} onClick={() => {
                        window.open('https://twitter.com/gerald_maboshe', '_blank')
                    }}> 
                        <img src="twitter.png" width="20px"/>
                        Follow
                    </button>
                </div>
            
            </div>
            </Router>
        );
    }
}
const styling = {
    //backgroundColor: "#4682B4", 
    //height: "500px"  
    //float:"left"
}
const main = {
    marginTop: "150px",
    marginLeft: "150px",
    marginRight: "150px",
    
    
}
const imgStyle = {
    float: "right",
    borderRadius: "50%",
    width: '200px', 
}

const Link1 = {
    textDecoration: "none",
    marginLeft: "40px",
    fontSize: "30px",
}
 const divLink = {
   float:'right'
 }
 const otherLinks = {
    textDecoration:"none"
 }
 const navigation = {
    marginTop:'40px',
    marginRight:'40px'
 }

 const followBtns = {
     marginLeft:"150px",
     paddingTop:"40px",
    
 }  
 const btns = {
    textAlign: 'center',
    width:"80px",
    margin: "4px 2px",
    borderRadius:"2px"
 }
export default Header;
