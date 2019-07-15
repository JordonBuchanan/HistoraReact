import React, { Component } from 'react';
import styled from 'styled-components';
import DeveloperStack from './DeveloperStack/DeveloperStack';

const Wrapper = styled.div.attrs({
  className: 'container'
})`
  padding:0;
`
const Row = styled.div.attrs({
  className: 'row'
})`
  margin:0
  padding:5vw 0 0;
`


class DeveloperPortal extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
                <h1>Histora's Developer Portal</h1>
                <DeveloperStack/>
            </Row>
        </Wrapper>
        );
    }
}

export default DeveloperPortal;