import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard/ProfileCard';
import Books from './Books/Books'
import PodcastMedia from './PodcastMedia/PodcastMedia';
import VideosMedia from './VideosMedia/VideosMedia';
import PaperMedia from './PaperMedia/PaperMedia';
import MediaHero from './MediaHero/MediaHero';

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

const DashWrapper = styled.div.attrs({
  className: 'col s10'
})`
  padding:0 !important;
`

class BooksDashboard extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <DashWrapper>
                <MediaHero/>
                <Books/>
                <PodcastMedia/>
                <VideosMedia/>
                <PaperMedia/>
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default BooksDashboard;