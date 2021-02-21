import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
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
    <div className="stats-container">
      <p id="stats">Stats</p>
      <Row>
        <Col xs="12" md="4">
          <div className="stat-item">
            <p>GitHub Repos</p>
            <p className="stat-data">
              {!loading ? (
                githubData.public_repos
              ) : (
                <Spinner color="secondary" />
              )}
            </p>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="stat-item">
            <p>GitHub Followers</p>
            <p className="stat-data">
              {!loading ? githubData.followers : <Spinner color="secondary" />}
            </p>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="stat-item">
            <p>Developer Since</p>
            <p className="stat-data">2018</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Stats;
