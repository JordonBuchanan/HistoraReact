import React, { Component } from 'react';
import styled from 'styled-components';
import MediaCard from '../MediaCard/MediaCard';
import { AssetService } from '../../../../../Services/AssetService';

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
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      podcasts: [],
      allPodcasts:[]
    };
    //this.viewAll = this.viewAll.bind(this);
  //  this.onFavorite = this.onFavorite.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await AssetService.getPodcastMedias().then(podcasts => {
      this.setState({
        podcasts: podcasts.slice(0,4),
        allPodcasts: podcasts,
        isLoading: false,
      })
    })
  }
    render() {
      const { podcasts } = this.state;
      return (
        <Wrapper>
            <Title>Podcasts <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
            {podcasts.map(podcasts => 
              <MediaCard
              title={podcasts.title}
              author={podcasts.author}
              image={podcasts.image}
              source={podcasts.source}
              link={podcasts.link}
            />
            )}
        </Wrapper>
        );
    }
}

export default PodcastMedia;