import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
     className: 'col s12 podcastEpisode'
})`
    width:100%;
    height: 160px;
    background:#FAFAFA;
    padding:15px 15px;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    margin:15px 0;
    border-radius:10px;
    & i{
        font-size:45px;
        position:absolute;
        margin:10px 0 0 -10px;
    }
    & .episodeHeader{
        display:inline-block;
        padding-top:5px;
    }
    & small{
        margin-left: 50px;
        padding-top:10px;
        color:#4f4f4f;
    }
    & h5{
      margin:5px 0 0 50px;
    }
    & p{
        color:#4f4f4f;
        letter-spacing:0.5px;
        font-size:16px;
    }
`

const PodcastEpisode = () => {
    return (
        <Wrapper>
            <div className="col s12 episodeHeader">
                <i className="fas fa-play-circle"></i>
                <small>June 29th 2019</small> 
                <h5>What I Never Understood About the Byzantines</h5>
           </div>
           <div className="col s12">
                <p>Jordon fully admits theres something he doesn't know and it's about the eastern Roman Empire</p>
           </div>
        </Wrapper>
    )
}

export default PodcastEpisode;