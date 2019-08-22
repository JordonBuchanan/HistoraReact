import React from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import Microlink from '@microlink/react';
import PropTypes from 'prop-types';

const Wrapper = styled.div.attrs({
    className: 'z-depth-4 col s7'
})`
    background-size:cover;
    border-radius:10px;
    background: white;
    height:300px;
    padding:0 !important;
    iframe{
        border-radius:10px;
    }
    a{
        border-radius:10px;
        border: none;
        padding: 0 !important;
        height:300px;
        max-width:100%;
    }
    .microlink_card__content{
        position:absolute;
        color:#FAFAFA;
        background: rgba(0,0,0,0.4);
        bottom:0;
        p{
            padding:2.5px 0;
    }
`
const Title = styled.h4.attrs({
    className: 'videoPickTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:25px;
    font-weight:500;
`
const Thoughts = styled.div.attrs({
    className: 'col s5'
})`
    padding: 0 25px !important;
    color:#4f4f4f;
    & p{
        letter-spacing:0.5px;
        font-size:16px;
        margin-bottom:15px !important;
    }
`
const IMG = styled.div.attrs({
    className: "biographyImagePick"
})`
    background-size:cover;
    border-radius:10px;
    height:300px;
`
const _onReady = (event) => {
    event.target.pauseVideo();
}

const opts = {
    height: '300',
    width: '100%',
    playerVars: {
    },
};

const PickDisplayCard = ({
    title,
    thoughts,
    view,
    image,
    link
}) => {
        return (
            <div className="col s12">
                <Title>{title}</Title>
                <Wrapper id="thisPickWrapper">
                    {view === "youtube" &&
                        <Youtube
                            videoId={link}
                            opts={opts}
                            onReady={_onReady}
                        />
                    }
                    {view === "article" &&
                        <Microlink 
                            url={link} size='large'
                            style={{fontFamily: 'Roboto'}}
                        />
                    }
                    {view === 'biography' &&
                        <IMG style={{background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image})`}}>
                        </IMG> 
                    }
                </Wrapper>
                <Thoughts>
                    <h5>Thoughts</h5>
                    <p>
                        {thoughts}
                    </p>
                </Thoughts>
            </div>
        )
}


PickDisplayCard.propTypes = {
    title: PropTypes.string.isRequired,
    thoughts: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
}

PickDisplayCard.defaultProps = {
    type: 'text'
}

export default PickDisplayCard;