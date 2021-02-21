import React from 'react';
import { Row, Col } from 'reactstrap';
import './index.scss';
function Articles() {
  return (
    <>
      <p id="articles">Articles</p>
      <Row>
        <Col xs="12" md="6">
          <a href="https://dev.to/geraldmaboshe/build-a-fullstack-app-with-strapi-and-next-js-5d8p">
            Build a Fullstack App with Strapi and NextJS
          </a>
        </Col>
        <Col xs="12" md="6">
          <a href="https://dev.to/geraldmaboshe/how-to-use-redux-with-hooks-in-a-react-typescript-project-4j50">
            How To Use Redux with Hooks in a React TypeScript Project
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Articles;
