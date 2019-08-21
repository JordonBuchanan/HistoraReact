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
            </Row>
        </Wrapper>
        );
    }
}

export default AdminDash;