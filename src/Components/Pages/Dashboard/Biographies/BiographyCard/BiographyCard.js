import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BiographyCardWrapper = styled.div.attrs({
    className: 'biographyCard hoverable z-depth-4 col s12'
})`
    border-radius:10px;
    background-size:cover !important;
    background-position: center !important;
    color:#FAFAFA;
    height:150px;
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
`

const BiographyCard = ({
    name,
    image,
    active,
    link
}) => {
    return (
        <div className="col s2">
            <BiographyCardWrapper style={{background: `linear-gradient(-35deg, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image})`}}>
                <H6>{name}</H6>
            </BiographyCardWrapper>
        </div>
    )
  }

BiographyCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
}

BiographyCard.defaultProps = {
    type: 'text'
}

export default BiographyCard;