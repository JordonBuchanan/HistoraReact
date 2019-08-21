import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'quickHitWrapper col s4'
})``
const QuickHit = styled.div.attrs({
    className: 'col s12 z-depth-3'
})`
    height:200px;
    border-radius:10px;
    width:200px;
    background-size:cover;
    background-position:top;
    cursor:pointer;
`
const Title = styled.h5.attrs({
    className: 'quickHiTitle'
})`
    color:#FAFAFA;
`
const Likes = styled.p.attrs({
    className: 'likes'
})`
    color:#FAFAFA;
    display:inline;
    padding-right: 10px;
    font-size:14px;
`
const Comments = styled.p.attrs({
    className: 'comments'
})`
    color:#FAFAFA;
    display:inline;
    font-size:14px;
`

const QuickHits = ({
    title,
    image,
    likes,
    comments,
}) => {
    return (
        <Wrapper>
            <QuickHit style={{
                background: `radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${image})`,
                backgroundSize: 'cover'
                }}>
                <Title>{title}</Title>
                <Likes>{likes} <i className="far fa-thumbs-up"></i></Likes>
                <Comments>{comments} <i className="far fa-comment"></i></Comments>
            </QuickHit>
        </Wrapper>
    )
  }

QuickHits.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
}

QuickHits.defaultProps = {
    type: 'text'
}

export default QuickHits;