import React, { Component } from 'react';
import styled from 'styled-components';
import MediaCard from '../MediaCard/MediaCard';

const Wrapper = styled.div.attrs({
  className: 'col s6'
})`
  padding:0;
`

const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    font-weight:500;
    margin-left:12.5px;
    &:before{
        content:"Podcasts";
        position:absolute;
        z-index:-1;
        opacity:0.25;
        color: #bdbdbd;
        font-weight:bold;
        font-size:54px;
        margin-left:10px;
        margin-top:15px;
    }
`
const ViewAll = styled.p.attrs({
    className: 'viewAllBtn'
  })`
    float:right;
    font-size:12px;
    font-weight:bold;
    margin:0px 15px 0 0;
    letter-spacing:0.25px;
  `

class PodcastMedia extends Component {
    render() {
      return (
        <Wrapper>
            <Title>Podcasts <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
            <MediaCard
            title="Fall of the Roman Empire"
            author="History Podcast"
            image="https://i.imgur.com/O3etUni.jpg"
            source="SoundCloud"
          />
            <MediaCard
            title="Fall of the Roman Empire"
            author="History Podcast"
            image="https://i.imgur.com/O3etUni.jpg"
            source="RSS"
          />
            <MediaCard
            title="Fall of the Roman Empire"
            author="History Podcast"
            image="https://i.imgur.com/O3etUni.jpg"
            source="Spec.fm"
          />
            <MediaCard
            title="Fall of the Roman Empire"
            author="History Podcast"
            image="https://i.imgur.com/O3etUni.jpg"
            source="SoundCloud"
          />
        </Wrapper>
        );
    }
}

export default PodcastMedia;