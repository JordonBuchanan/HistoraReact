import React, { Component } from 'react';
import styled from 'styled-components';
import Placeholder from './placeholder.jpg';
import BlogPost from './BlogPost/BlogPost';
import BlogFilter from './BlogFilter/BlogFilter'

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
  #blogBanner{
    background:radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)),url(${Placeholder});
    width:100vw;
    height:350px;
    background-position:center;
    text-align:center;
  }
`
const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0 0;
`
const H3 = styled.h3.attrs({
    className: 'blogTitle'
})`
    font-size:5vw;
    text-transform:uppercase;
    font-weight:400;
    letter-spacing:1.5px;
    color:#FAFAFA;
    margin-top:65px;
    margin-bottom:-5px;
`
const H6 = styled.h6.attrs({
  className: 'blogTitleMinor'
})`
  font-weight:700;
  font-size:20px;
  letter-spacing:0.15px;
  color: #BDBDBD;
  margin-left:5px;
`
const PI = styled.p.attrs({
  className: 'sharePodcast'
})`
  color:#4f4f4f;
  font-size:16px;
  letter-spacing:0.5px;
  background:#FAFAFA;
  border-radius:10px;
  box-shadow:0 4px 8px rgba(0,0,0,0.08);
`
const I = styled.i.attrs({
  className: 'podcastIcon'
})`
  margin:15px;
  font-size:24px;
  color:#212121;
`
const P = styled.p.attrs({
  className: 'blogDesc'
})`
  color:#e0e0e0;
  font-size:16px;
  letter-spacing:0.5px;
  padding-left:15px;
  width:45vw;
  margin:10px auto 0;
`

class Blog extends Component {
    render() {
      return (
        <div>
          <Wrapper>
            <Row>
              <div className="col s12" id="blogBanner">
                  <H3>HISTORA Blog</H3>
                  <H6>Read - Research - Discover</H6>
                  <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
              </div>
            </Row>
          </Wrapper>
          <div className="container">
            <Row>
              <div className="col s3">
                <PI><I className="fab fa-medium"></I> Medium</PI>
                <BlogFilter/>
              </div>
              <div className="col s9">
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
              </div>
            </Row>
          </div>
        </div>
        );
    }
}

export default Blog;