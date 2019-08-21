import React, { Component } from 'react';
import styled from 'styled-components';
//import DeveloperStack from './DeveloperStack/DeveloperStack';
import Title from './historaDev.png'
import Sidebar from './Sidebar/Sidebar';
import image from './dev.png';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
`
const SubWrapper = styled.div.attrs({
  className: 'col s6 devSubWrapper'
})`
  padding: 25px 25px 25px !important;
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
  className: 'devImage z-depth-2'
})`
  max-width:400px;
  height:auto;
  margin-top: 15px;
  border-radius:10px;
`


class DeveloperPortal extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <Sidebar/>
              <SubWrapper>
                <img alt="histora dev" src={Title}/>
                <p>
                  Welcome to the developer portal of Histora. Here you will find ways to contribute to 
                  Histora(content or stack-wise) and notes from the established team.
                </p>
              </SubWrapper>
              <div className="col s4">
                <IMG src={image}/>
              </div>
            </Row>
        </Wrapper>
        );
    }
}

export default DeveloperPortal;