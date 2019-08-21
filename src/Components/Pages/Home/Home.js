import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Hero/Hero';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding: 0;
`

const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0;
`

class Home extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
                <Hero/>
            </Row>
        </Wrapper>
        );
    }
}

export default Home;
