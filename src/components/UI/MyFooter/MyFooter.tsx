import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../../../assets/images/logo-rs.svg';

const MyFooter: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <div className="d-flex justify-content-around align-items-center w-100">
          <div>
            <a href="https://github.com/nick-levshi">GitHub</a>
          </div>
          <div>
            <a href="https://rs.school/js/">
              <img src={LOGO} alt="logo" style={{ width: 100 }} />
            </a>
          </div>
          <div className="text-white">2022</div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyFooter;
