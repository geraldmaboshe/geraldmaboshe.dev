import React from 'react';
import { Row, Col } from 'reactstrap';
import './index.scss';

function Project() {
  return (
    <>
      <p id="projects">Projects</p>
      <Row>
        <Col sm="12" md="6">
          <h3>
            <a href="https://github.com/geraldmaboshe/TilungisaAuto/blob/master/README.md">
              Tilungisa Auto
            </a>
          </h3>
          <p>An auto mechanic booking mobile application</p>
        </Col>
        <Col sm="12" md="6">
          <h3>
            <a href="https://zibo.herokuapp.com/">Zibo</a>
          </h3>
          <p>A real estate app</p>
        </Col>
      </Row>
    </>
  );
}

export default Project;
