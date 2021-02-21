import React from 'react';
import { Row, Col } from 'reactstrap';
import { FaDev } from 'react-icons/fa';
import './index.scss';
function Articles() {
  return (
    <div className="articles-container">
      <p id="articles">Articles</p>
      <Row>
        <Col xs="12" md="6">
          <div>
            <FaDev size={40} />
          </div>
          <br />
          <p>
            <a href="https://dev.to/geraldmaboshe/build-a-fullstack-app-with-strapi-and-next-js-5d8p">
              Build a Fullstack App with Strapi and NextJS
            </a>
          </p>
          <p>14 February 2021</p>
        </Col>
        <Col xs="12" md="6">
          <div>
            <FaDev size={40} />
          </div>
          <br />
          <p>
            <a href="https://dev.to/geraldmaboshe/how-to-use-redux-with-hooks-in-a-react-typescript-project-4j50">
              How To Use Redux with Hooks in a React-TypeScript Project
            </a>
          </p>
          <p>18 September 2020</p>
        </Col>
      </Row>
    </div>
  );
}

export default Articles;
