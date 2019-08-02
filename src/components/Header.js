import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
class Header extends Component {

    render() {
        return (
            // <Router>
            <div style={styling}>
                <div style={navigation}>
                    <Link style={Link1} to="/">🖥 Gerald Maboshe</Link> 
                    <a style={divLink} href="#form">Subscribe/Contact</a> 
                
                    {/* <div style={divLink}>
                        <Link style={otherLinks}  to="articles">Articles</Link> | <Link style={otherLinks} to="events">Events</Link>
                        <
                    </div> */}
                </div>
                <div style={main}>
                    <h1>Hey, I'm Gerald 😊
                    <img style={imgStyle} src="pic.jpg"/>
                    </h1>
                        <p>
                        I'm a modern JavaScript developer, a data science enthusiast<br /> and an aspiring tech writer <br />
                        I love building web apps and everything tech. I have been <br />coding for more than 2 years 
                        and I love contributing to open source.<br /><br />
                        If you like what I do, subcribe to my website in the form below to receive<br />
                        notifications about my publications.<br /><br />
                        Give me feedback about my work in the contact form below

                        
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
                <div style = {formStyle} id="form"> 
                    <form >
                        <div>
                            <h2>Subscribe</h2>
                            <input style ={subField} type="text" placeholder="Enter your email"></input><br />
                            <input type="button" value = "Subscribe" style={subBtn}></input><br />
                        </div> 
                        <div >
                            <h2>Contact me</h2>
                            <input style={contactField} type="text" placeholder="Enter your name" /><br />
                            <input style={contactField} type="text" placeholder="Enter your email" /><br />
                            <input style={contactField} type="text" placeholder="subject" /><br />
                            <textarea style={contactField} name="message" placeholder="Your message" /><br />
                            <input style = {contactBtn} type="button" value="Send" /><br />
                        </div>
                    </form>
                </div>
            
            </div>
            //</Router>
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
    marginRight: "150px"
    
    
}
const imgStyle = {
    float: "right",
    borderRadius: "50%",
    width: '200px' 
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
     marginBottom: "50px"
    
 }  
 const btns = {
    textAlign: 'center',
    width:"80px",
    margin: "4px 2px",
    borderRadius:"2px"
 }
 const formStyle ={
    textAlign:"center",
    paddingTop:"40px",
 }
 const subField = {
     padding: "10px",
     width: "60%",
     borderRadius: "5px",
     margin: '10px',
     //borderStyle: 'solid'
 }
 const subBtn = {
     padding: '5px',
     marginTop: '10px',
     marginBottom: '30px',
     borderRadius: "5px",
     width: '10%'
     
 }
 const contactField = {
    padding: "10px",
    width: "60%",
    borderRadius: "5px",
    margin: '10px',
    //borderStyle: 'solid'
    

 }
 const contactBtn = {
    padding: '5px',
    marginTop: '5px',
    borderRadius: "5px",
    marginBottom: '120px',
    width: '10%'
    
 }
 
export default Header;
