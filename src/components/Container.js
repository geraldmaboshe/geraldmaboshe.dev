import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Container>
        <div style={{ marginTop: '150px' }}>
          <h1>
            Hey, I'm Gerald <span>😊</span>
            <img style={imgStyle} src="pic.jpg" />
          </h1>
          <p>
            I'm a modern JavaScript developer, Data Science enthusiast <br />{' '}
            and aspiring tech writer. I love building web and mobile apps and{' '}
            <br /> have been coding for over 2 years. Follow and connect with{' '}
            <br />
            me on the buttons below
            {/* If you like what I do, subcribe to my website in the form below to receive<br />
                        notifications about my publications.<br /><br />
                        Give me feedback about my work in the contact form below */}
          </p>
        </div>
        <div style={followBtns}>
          <button
            style={btns}
            onClick={() => {
              //same tab
              //window.location.href="https://github.com/geraldMaboshe"

              //new tab
              window.open('https://github.com/geraldMaboshe', '_blank');
            }}
          >
            <img src="github.png" width="25px" />
            Follow
          </button>
          <button
            style={btns}
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/gerald-maboshe-339846164/',
                '_blank'
              );
            }}
          >
            <img src="linked.png" height="25px" />
            Connect
          </button>
          <button
            style={btns}
            onClick={() => {
              window.open('https://twitter.com/gerald_maboshe', '_blank');
            }}
          >
            <img src="twitter.png" width="25px" />
            Follow
          </button>
        </div>
        <h2 id="projects">Projects</h2>
        <hr />
        <div className="project-content">
          <div className="project1">
            <h3>
              <a href="https://github.com/geraldmaboshe/zibo-estates-fullstack">
                Zibo Estates
                <img src="github.png" width="30px" />
              </a>
            </h3>
            <p>A real estate app</p>
            <p>
              <a href="https://zibo-estates-fullstack.herokuapp.com/">
                https://zibo-estates-fullstack.herokuapp.com/
              </a>
            </p>
            <Button color="secondary">React</Button>{' '}
            <Button color="secondary">Express</Button>{' '}
            <Button color="secondary">Node</Button> <br /> <br />
            <Button color="secondary">MongoDB</Button>{' '}
          </div>
          <div className="project2">
            <h3>
              <a href="https://github.com/geraldmaboshe/TilungisaAuto">
                Tilungisa Auto
                <img src="github.png" width="30px" />
              </a>
            </h3>
            <p>An auto mechanic booking mobile application</p>
            <Button color="secondary">React Native</Button>{' '}
            <Button color="secondary">Express</Button>{' '}
            <Button color="secondary">Node</Button> <br /> <br />
            <Button color="secondary">MongoDB</Button>{' '}
          </div>
          <br />
          <div className="project3">
            <h3>
              <a href="https://github.com/geraldmaboshe/Punzila">
                Punzila
                <img src="github.png" width="30px" />
              </a>
            </h3>
            <p>An E-learning mobile application for secondary school pupils</p>
            <Button color="secondary">Java</Button>{' '}
            <Button color="secondary">SQLite </Button>
            <p></p>
            <br /> <br />
          </div>
        </div>
        <br />
        <h2 id="articles">Articles</h2>
        <hr />
        <div className="article-content">
          <hr />
          <a href="https://medium.com/bongohive/how-i-got-an-internship-position-at-a-zambian-tech-hub-bongohive-a2ad8cfdc002">
            How I Got an Internship Position at a Zambian Tech Hub (BongoHive)
          </a>
        </div>
        <div style={footerStyle}>
          <br></br>
          <p>&copy; 2020. Gerald Maboshe</p>
        </div>
        <div></div>
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
      </Container>
    );
  }
}

const imgStyle = {
  float: 'right',
  borderRadius: '50%',
  width: '200px'
};

const Link1 = {
  textDecoration: 'none',
  marginLeft: '40px',
  fontSize: '30px'
};
const divLink1 = {
  float: 'right',
  textDecoration: 'none'
};

const otherLinks = {
  textDecoration: 'none'
};
const navigation = {
  display: 'inline block'
};

const followBtns = {
  paddingTop: '40px',
  marginBottom: '150px'
};
const btns = {
  textAlign: 'center',
  width: '90px',
  margin: '4px 2px',
  borderRadius: '2px'
};
const formStyle = {
  textAlign: 'center',
  paddingTop: '40px'
};
const subField = {
  padding: '10px',
  width: '60%',
  borderRadius: '5px',
  margin: '10px'
};
const subBtn = {
  padding: '5px',
  marginTop: '10px',
  marginBottom: '30px',
  borderRadius: '5px',
  width: '10%'
};
const contactField = {
  padding: '10px',
  width: '60%',
  borderRadius: '5px',
  margin: '10px'
};
const contactBtn = {
  padding: '5px',
  marginTop: '5px',
  borderRadius: '5px',
  marginBottom: '120px',
  width: '10%'
};
const articleStyle = {
  alignItems: 'center',
  marginBottom: '400px',
  marginTop: '150px'
};
const footerStyle = {
  marginBottom: '100px',
  textAlign: 'center',
  marginTop: '100px'
};

export default Header;
