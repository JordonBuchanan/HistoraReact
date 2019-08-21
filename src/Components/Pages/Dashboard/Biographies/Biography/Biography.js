import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewsCardWrapper = styled.div.attrs({
    className: 'newsCard col s12 z-depth-4'
})`
    color:#212121;
    margin-top: 25px;
    height:400px;
    padding: 0px !important;
    background:#FAFAFA;
    border-radius:10px;
    div:nth-of-type(2):before{
        content:"Biography";
        position:absolute;
        z-index:0;
        opacity:0.2;
        color: #bdbdbd;
        font-weight:bold;
        font-size:96px;
        margin-left:15px;
        margin-top:0px;
    }
    small{
        font-size:10px;
        letter-spacing:1.5px;
        font-weight:bold;
        text-transform:uppercase;
        color:#212121;
    }
`

const SubWrapper = styled.div.attrs({
    className: 'col s9'
})`
    overflow: auto;
    padding: 15px 25px !important;
`
const H3 = styled.h3.attrs({
    className: 'newsCardTitle'
})`
    font-weight:300;
    font-size:48px;
    margin:2.5px 0 0;
`
const P = styled.p.attrs({
    className: 'newsCardDesc'
})`
    font-size:16px;
    letter-spacing:0.5px;
    color:#616161;
`
const IMG = styled.div.attrs({
    className: 'biographyImg '
})`
    height:400px;
    width:100%;
    background-position:center !important;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    background-size:cover !important;
`
const Date = styled.p.attrs({
    className: 'biographyDate'
})`
    color:#616161;
    font-size:12px;
    letter-spacing:0.4px;
`
const Biography = ({
    title,
    name,
    birthDate,
    deathDate,
    description,
    image,
    link
}) => {
    return (
        <NewsCardWrapper>
            <div className="col s3" style={{padding: '0'}}>
                <IMG style={{background: `linear-gradient(to bottom, rgba(0,0,0,0), #FAFAFAdc), url(${image})`}}></IMG>
            </div>
            <SubWrapper>
                <small>{title}</small>
                <H3>{name}</H3>
                <Date>{birthDate} - {deathDate}</Date>
                <P>{description}</P>
            </SubWrapper>
        </NewsCardWrapper>
    )
  }

Biography.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deathDate: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    link: PropTypes.string,
}

Biography.defaultProps = {
    type: 'text'
}

export default Biography;