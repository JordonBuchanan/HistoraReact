import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import image2 from './software.png';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
`
const SubWrapper = styled.div.attrs({
  className: 'col s6 devSubWrapper'
})`
  padding: 0px 25px 25px !important;
  p{
    font-size:16px;
    letter-spacing:0.5px;
    max-width:700px;
  }
`

const Row = styled.div.attrs({
  className: 'row'
})`
  margin:0
  padding:0;
`
const IMG = styled.img.attrs({
  className: 'devImage'
})`
  max-width:400px;
  height:auto;
  margin-top: 15px;
`
const H1 = styled.h1.attrs({
  className: 'devTitle'
})`
  font-family: 'Roboto', sans-serif;
  font-weight:500;
  font-size: 7vw;
  letter-spacing:-3px;
  span{
    font-weight:300;
  }
`

class DeveloperPortal extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <Sidebar/>
              <SubWrapper>
                <H1>HISTORA<span>DEV</span></H1>
                <p>
                  Welcome to the developer portal of Histora. Here you will find ways to contribute to 
                  Histora(content or stack-wise) and notes from the established team.
                </p>
              </SubWrapper>
              <div className="col s4">
                <IMG src={image2}/>
              </div>
            </Row>
        </Wrapper>
        );
    }
}

export default DeveloperPortal;