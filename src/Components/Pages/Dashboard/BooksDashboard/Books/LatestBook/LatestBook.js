import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    color:#FAFAFA;
    width:100%;
    height:200px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    border-radius:10px;
    padding: 0 !important;
    background-size:cover !important;
    transition:0.3s;
    &:hover{
        margin-top:-10px;
        transition:0.3s;
    }
    .hbadge{
        position:absolute;
    }
`

const Title = styled.h5.attrs({
    className: 'bookTitle'
})`
    font-weight:700;
    padding:0 10px;
    opacity:0.7;
    transition:0.3s;
    a{
        color: white !important;

    }
    &:hover{
        opacity:1;
        transition:0.3s;
    }
`

const Author = styled.p.attrs({
    className: 'authorName'
})`
    font-size:14px;
    letter-spacing:0.25px;
    font-weight:500;
    padding:0 10px;
    margin:0 0 5px;
`

const Favorite = styled.i.attrs({
    className: 'far fa-heart'
})`
    padding:0 10px;
    cursor:pointer;
`


const LatestBook = ({
    title,
    author,
    link,
    image,
    source,
}) => {
    return (
            <div className="col s4">
                <Wrapper style={{background: `linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${image})`}}>
                    <Title><a href={link}>{title}</a></Title>
                    <Author>{author}</Author>
                    <Favorite></Favorite>
                    <div className="hbadge">{source}</div>
                </Wrapper>
            </div>
        )
    }
    LatestBook.propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }
    
    LatestBook.defaultProps = {
        type: 'text'
    }

export default LatestBook;