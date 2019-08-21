import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    h6{
      width:18vw
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

const MediaCard = ({
    title,
    image,
    author,
    source,
}) => {
    return (
        <CardWrapper>
            <SubWrapper>
                <Image style={{background: `url(${image})`}}></Image>
                <div className="col s7">
                    <h6 className="truncate">{title}</h6>
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
    source: PropTypes.string
}

MediaCard.defaultProps = {
    type: 'text'
}

export default MediaCard;