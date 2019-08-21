import React, { Component } from 'react';
import youtube from '../../../../../Services/VideoMediaService';
import styled from 'styled-components';
import MediaCard from '../MediaCard/MediaCard'

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
        content:"Videos";
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
class VideosMedia extends Component {
  state = {
    isLoading: false,
    videos: [],
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    const response = await youtube.get();
    this.setState({
      videos: response.data.items,
      isLoading: false
    })
      console.log(this.state.videos);
    }
    render() {
      const { videos } = this.state;
      return (
        <Wrapper>
          <Title>Videos <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
          {videos.map(videos => 
            <MediaCard
              title={videos.snippet.title}
              author={videos.snippet.channelTitle}
              image={videos.snippet.thumbnails.medium.url}
              source="Youtube"
            />
          )}
        </Wrapper>
        );
    }
}
export default VideosMedia;