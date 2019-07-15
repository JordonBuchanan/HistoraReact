import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HistoricFact from './HistoricFact/HistoricFact';
import Host from './Host/Host';
import NewsLetter from './NewsLetter/NewsLetter';
import Hero from './Hero/Hero';
import About from './About/About';
import Latest from './Latest/Latest';

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

class Home extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
                <Hero/>
                <Host/>
                <About />
                <HistoricFact/>
                <Latest/>
                <NewsLetter/>
            </Row>
        </Wrapper>
        );
    }
}

export default Home;
