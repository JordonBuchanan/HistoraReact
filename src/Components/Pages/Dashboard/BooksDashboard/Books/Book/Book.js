import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BookWrapper = styled.div.attrs({
    className: 'BookWrapper col s12'
})`
    width:100%;
    height:200px;
    background-size:cover !important;
    color: #FAFAFA;
    padding:0 !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    border-radius:10px;
    .hbadge{
        position:absolute;
    }
    transition:0.3s;
    &:hover{
        margin-top:-10px;
        transition:0.3s;
    }
`

const Title = styled.h6.attrs({
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
    font-size:12px;
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

const Book = ({
    title,
    author,
    link,
    image,
    source,
    onFavorite,
}) => {
    return (
        <div className="col s2">
            <BookWrapper  style={{background: `linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${image})`}}>
                <Title><a href={link}>{title}</a></Title>
                <Author>{author}</Author>
                <Favorite onClick={onFavorite}></Favorite>
                <div className="hbadge">{source}</div>
            </BookWrapper>
        </div>
    )
  }

Book.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onFavorite: PropTypes.func.isRequired
}

Book.defaultProps = {
    type: 'text'
}

export default Book;