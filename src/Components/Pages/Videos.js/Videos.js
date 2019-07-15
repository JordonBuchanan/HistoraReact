import React, { Component } from 'react';
import styled from 'styled-components';
import podcastTab from '../Podcast/podcastTab.jpg';
import FeaturedVideo from './FeatureVideo/FeatureVideo';
import Video from './Video/Video'

const Wrapper = styled.div.attrs({
  className: 'container'
})`
  padding:0;
`
const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:5vw 0 0;
`

const H3 = styled.h3.attrs({
    className: 'videosTitle'
})`
    text-transform:uppercase;
    font-weight:400;
    font-size:5vw;
    letter-spacing:1.5px;
    color:#212121;
`
const H4 = styled.h4.attrs({
    className: 'videoTabTitle'
})`
    font-weight:700;
    letter-spacing: 0.25px;
    font-size:43px;
    color:#FAFAFA;
    text-align:center;
    padding:50px 15px;
    background:linear-gradient(-35deg, rgba(0,0,0,0), rgba(0,0,0,0.9));
    height:300px;
    border-radius:100%;
`
const IMG = styled.div.attrs({
    className: "videoTab"
})`
    height:300px;
    width:300px;
    border-radius:100%;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    background: url(${podcastTab});
`
const P = styled.p.attrs({
  className: 'videoDesc'
})`
  color:#4f4f4f;
  font-size:16px;
  letter-spacing:0.5px;
  padding-left:15px;
  border-left:3px solid #4f4f4f;
`
const PI = styled.p.attrs({
  className: 'shareVideo'
})`
  color:#4f4f4f;
  font-size:16px;
  letter-spacing:0.5px;
  background:#FAFAFA;
  border-radius:10px;
  box-shadow:0 4px 8px rgba(0,0,0,0.08);
`
const I = styled.i.attrs({
    className: 'videoIcon'
})`
    margin:15px 15px 15px;
    font-size:24px;
    color:#212121;
`


class Videos extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
                <div className="col s4" id="videoHero">
                    <IMG>
                        <H4>HISTORA</H4>
                    </IMG>
                    <PI><I className="fab fa-youtube"></I> Youtube</PI>
                    <PI><I className="fab fa-twitch"></I> Twitch</PI>
                    <PI><I className="fab fa-vimeo-v"></I> Vimeo</PI>
                </div>
                <div className="col s8">    
                    <H3>Videos</H3>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>   
                    <FeaturedVideo/>
                    <Video/>
                    <Video/>
                    <Video/>
                </div>
            </Row>
        </Wrapper>
        );
    }
}

export default Videos;