import React, { Component } from 'react';
import styled from 'styled-components';
import Placeholder from '../video-placeholder.jpg'

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
  & img{
    width:auto;
    height:300px;
  }
  #featuredVideo{
    background:#FAFAFA;
    border-radius:10px;
    padding:5px 25px;
    margin:10px 10px 0;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
  }
  & p{
    color:#4f4f4f;
    letter-spacing:0.5px;
    font-size:16px;
    margin-bottom:5px;
  }
  & small{
    color:#4f4f4f;
  }
`
const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0;
`

class FeatureVideo extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <div className="col s12" id="featuredVideo">
                <h4>In The Footsteps of the Lombards</h4>
                <img alt="Featured Video" src={Placeholder}/>
                <p>Today, Jordon takes us on a deep dive of the Lombard invasion of the western Roman Empire</p>
                <small>June 19th 2019</small>
              </div>
            </Row>
        </Wrapper>
        );
    }
}

export default FeatureVideo;