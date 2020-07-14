import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Container>
        <div style={{ marginTop: '150px' }}>
          <h1>
            Hey, I'm Gerald{' '}
            <span role="img" aria-label="Smiley emoji">
              😊
            </span>
          </h1>
          <p>
            I'm a Software Engineer, Data Science enthusiast and aspiring tech
            writer. I love learning new technologies <br /> have been coding for
            over 3 years. <br />
          </p>
        </div>
        <div style={followBtns}>
          <NavLink href="https://github.com/geraldmaboshe">
            <img src="github.png" width="50px" alt="github" />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/geraldmaboshe/">
            <img src="linked.png" height="50px" alt="LinkedIn" />
          </NavLink>
          <NavLink href="https://twitter.com/geraldmaboshe">
            <img src="twitter.png" width="50px" alt="Twitter" />
          </NavLink>
        </div>
        <div style={email}>
          <span>Email: maboshegerald1@gmail.com</span>
        </div>

        <h2 id="projects">Projects</h2>
        <hr />
        <div className="project-content">
          <div className="project1">
            <h3>
              <a href="https://github.com/geraldmaboshe/zibo-estates-fullstack">
                Zibo Estates
                <img src="github.png" width="30px" alt="github" />
              </a>
            </h3>
            <p>A real estate app</p>
            <Button color="secondary">React</Button>{' '}
            <Button color="secondary">Express</Button>{' '}
            <Button color="secondary">Node</Button> <br /> <br />
            <Button color="secondary">MongoDB</Button>{' '}
          </div>
          <div className="project2">
            <h3>
              <a href="https://github.com/geraldmaboshe/TilungisaAuto">
                Tilungisa Auto
                <img src="github.png" width="30px" alt="github" />
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
                <img src="github.png" width="30px" alt="github" />
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
        <div style={footerStyle}>
          <br></br>
          <p>&copy; 2020. Gerald Maboshe</p>
        </div>
        <div></div>
      </Container>
    );
  }
}

const followBtns = {
  paddingTop: '40px',
  display: 'flex'
};
const email = {
  marginBottom: '150px'
};
const footerStyle = {
  marginBottom: '100px',
  textAlign: 'center',
  marginTop: '100px'
};

export default Header;
