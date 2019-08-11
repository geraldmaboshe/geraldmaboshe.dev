import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <Container expand="sm">
            <div style={{margin: '30px 150px'}}>
                <div style={navigation}>
                    <a>🖥 Gerald Maboshe</a>
                    <a style={divLink1} href="#articles">Articles</a> 
                     {/* <a style={divLink2} > Subscribe/Contact</a>   */}
                </div>
                <div style={{marginTop:'150px'}}>
                    <h1>Hey, I'm Gerald <span>😊</span>
                    <img style={imgStyle} src="pic.jpg"/>
                    </h1>
                    <p>
                        I'm a modern JavaScript developer, Data Science enthusiast<br /> and aspiring tech writer <br />
                        I love building web apps and have been <br />coding for over 2 years.
                        I like contributing to open source.<br /><br />
                        {/* If you like what I do, subcribe to my website in the form below to receive<br />
                        notifications about my publications.<br /><br />
                        Give me feedback about my work in the contact form below */}

                        
                    </p>
                </div>
                <div style={followBtns}>
                    <button style={btns} onClick={()=> {
                        //same tab
                       //window.location.href="https://github.com/geraldMaboshe"
                       
                       //new tab
                       window.open("https://github.com/geraldMaboshe","_blank")
 
                    }}> 
                        <img src="github.png" width="25px"/>
                        Follow
                    </button>
                    <button style={btns} onClick={() => {
                        window.open('https://www.linkedin.com/in/gerald-maboshe-339846164/','_blank')
                    }}> 
                        <img src="linked.png" height="25px"/> 
                        Connect
                    </button>
                    <button style={btns} onClick={() => {
                        window.open('https://twitter.com/gerald_maboshe', '_blank')
                    }}> 
                        <img src="twitter.png" width="25px"/>
                        Follow
                    </button>
                </div>
                <div style={articleStyle} id="articles">
                    <h2>Articles</h2>
                    <a href="https://medium.com/bongohive/how-i-got-an-internship-position-at-a-zambian-tech-hub-bongohive-a2ad8cfdc002">
                    How I Got an Internship Position at a Zambian Tech Hub (BongoHive) 
                    </a>
                </div>
                <div style={footerStyle}>
                    <p>&copy; 2019. Gerald Maboshe</p>
                </div>
               <div>
                   
               </div>
                {/* <div style = {formStyle} id="form"> 
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
                </div> */}
            
            </div>
            </Container>
         
        );
    }
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
 const divLink1 = {
    float:"right",
   textDecoration: "none"
 }

 const otherLinks = {
   textDecoration:"none"
  }
 const navigation = {
     display: 'inline block'
 }

 const followBtns = {
     paddingTop:"40px",
     marginBottom: "100px"

    
 }  
 const btns = {
    textAlign: 'center',
    width:"90px",
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
 }
 const contactBtn = {
    padding: '5px',
    marginTop: '5px',
    borderRadius: "5px",
    marginBottom: '120px',
    width: '10%'
    
 }
 const articleStyle = {
     marginBottom: '400px',
     marginTop: '20px'
 }
 const footerStyle ={
        marginBottom: '100px'
 }
 
export default Header;
