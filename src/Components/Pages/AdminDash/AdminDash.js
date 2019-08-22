import React, { Component } from 'react';
import styled from 'styled-components';
import AdminNav from './AdminNav/AdminNav';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
`

const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0;
`

class AdminDash extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <AdminNav/>
              <h1>Main Admin Dashboard</h1>
              <ul>
                <li>User Management?</li>
              </ul>
            </Row>
        </Wrapper>
        );
    }
}

export default AdminDash;