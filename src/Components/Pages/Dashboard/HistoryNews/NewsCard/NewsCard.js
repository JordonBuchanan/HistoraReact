import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewsCardWrapper = styled.div.attrs({
    className: 'newsCard hoverable z-depth-4 col s12'
})`
    border-radius:10px;
    background-size:cover !important;
    background-position: center !important;
    color:#FAFAFA;
    height:300px;
    opacity:0.75;
    transition:0.3s;
    &:hover{
        transition:0.3s;
        opacity:1;
        margin-top:-10px;
    }
`

const H6 = styled.h6.attrs({
    className: 'newsCardTitle'
})`
    font-weight:500;
    font-size:20px;
    letter-spacing:0.15px;
    margin-top:150px;
`

const P = styled.p.attrs({
    className: 'newsCardDesc'
})`
    font-size:14px;
    letter-spacing:0.25px;
`

const NewsCard = ({
    title,
    description,
    image,
    link
}) => {
    return (
        <div className="col s3">
            <NewsCardWrapper style={{background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image})`}}>
                <H6>{title}</H6>
                <P>{description}</P>
            </NewsCardWrapper>
        </div>
    )
  }

NewsCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
}

NewsCard.defaultProps = {
    type: 'text'
}

export default NewsCard;