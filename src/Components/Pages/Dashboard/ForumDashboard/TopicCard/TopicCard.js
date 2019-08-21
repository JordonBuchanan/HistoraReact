import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostWrapper = styled.div.attrs({
    className: 'postWrapper col s12'
})`
    margin-bottom: 15px !important;
`
const SubPostWrapper = styled.div.attrs({
    className: 'subPostWrapper col s11'
})`
    background:#FAFAFA;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    border-radius:10px;
    cursor:pointer;
    padding:15px 15px 0 !important;
`
const Title = styled.h6.attrs({
    className: 'postTitle'
})`
    font-weight:500;
    display:inline;
    opacity:0.7;
    transition:0.3s;
    text-decoration: underline;
    &:hover{
        transition:0.3s;
        opacity:1;
    }
`
const UserCommentLike = styled.p.attrs({
    className: 'postDate'
})`
    color:#616161;
    font-size:12px;
    letter-spacing:0.4px;
`
const TheDate = styled.p.attrs({
    className: 'postDate'
})`
    color:#616161;
    font-size:10px;
    letter-spacing:0.4px;
    float:right;
    margin: 0 !important;
`
const Margin = styled.span.attrs({
    className: 'marginHelper'
})`
    margin-left:15px;
    float:right;
`

const Avatar = styled.img.attrs({
    className: 'postAvatar'
})`
    border-radius:100%;
    height:65px;
    width:65px;
    margin:10px 10px 10px 0 !important;
`

const TopicCard = ({
    id,
    title,
    user,
    date,
    image,
    likes,
    avatar,
    comments,
    body,
    onClick,
    onLike
}) => {
    const cdate = (new Date(date)).toDateString();
    return (
        <PostWrapper key={id}>
            <div className="col s1">
                <Avatar className="z-depth-2" src={avatar}/>
            </div>
            <SubPostWrapper>
                <TheDate>{cdate}</TheDate>
                <Title onClick={onClick}>{title}</Title>
                <UserCommentLike>By {user}
                    <Margin>{comments} <i className="far fa-comment"></i></Margin>
                    <Margin>{likes} <i className="far fa-thumbs-up" onClick={onLike}></i></Margin>
                </UserCommentLike>
            </SubPostWrapper>
        </PostWrapper>
    )
  }

TopicCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    avatar: PropTypes.string,
    user: PropTypes.string.isRequired,
    id: PropTypes.string,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

TopicCard.defaultProps = {
    type: 'text'
}

export default TopicCard;