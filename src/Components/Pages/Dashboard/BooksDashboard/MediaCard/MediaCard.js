import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const CardWrapper = styled.div.attrs({
    className: 'mediaCardWrapper col s12'
})`
    margin: 5px 0;
    small{
        color: #757575;
    }
    i{
        font-size:20px;
        margin-top:25px;
        padding-left: 10px;
    }
    p{
      width:18vw
      margin:10px 0 0px;
    }

`
const SubWrapper = styled.div.attrs({
    className: 'col s12'
})`
    background: white;
    border-radius:10px;
    width:100%;
    height:65px;
    padding:0 !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
`
const Image = styled.div.attrs({
    className: 'col s2'
})`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    width:auto;
    height:65px;
    background-size:cover !important;
`
const YoutubeDiv = styled.div.attrs({
    className: 'videosMediaDiv'
})`
    height:65px;
    width:65px !important;
    overflow:hidden !important;
    display:inline-block;
    float:left;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
`

const _onReady = (event) => {
    event.target.pauseVideo();
}

const opts = {
    height: '65',
    width: '65',
    playerVars: {
    },
};

const MediaCard = ({
    title,
    image,
    author,
    source,
    link
}) => {
    return (
        <CardWrapper>
            <SubWrapper>
                {source === "Youtube" &&
                <YoutubeDiv>
                    <Youtube
                        videoId={link}
                        opts={opts}
                        onReady={_onReady}
                   />
                   </YoutubeDiv>
                }
                {source !== "Youtube" &&
                    <Image style={{background: `url(${image})`}}></Image>
                }
                <div className="col s7">
                    <p className="truncate">{title}</p>
                    <small>{author}</small>
                </div>
                <div className="col s1">
                    <span className="hbadge">{source}</span>
                </div>
                <div className="col s2">
                    <i className="far fa-heart"></i>
                    <i class="fas fa-share-alt"></i>
                </div>
            </SubWrapper>
        </CardWrapper>
    )
  }

MediaCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    source: PropTypes.string,
    link: PropTypes.string
}

MediaCard.defaultProps = {
    type: 'text'
}

export default MediaCard;