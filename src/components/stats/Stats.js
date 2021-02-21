import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import './index.scss';

function Stats() {
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/user', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      });
      const data = await response.json();
      setGithubData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      <p className="stats">Stats</p>
      <Row>
        <Col xs="12" md="4">
          <p>GitHub Repos: {githubData.public_repos}</p>
        </Col>
        <Col xs="12" md="4">
          <p>GitHub Followers: {githubData.followers}</p>
        </Col>
        <Col xs="12" md="4">
          <p>Developer Since: 2018</p>
        </Col>
      </Row>
    </>
  );
}

export default Stats;
