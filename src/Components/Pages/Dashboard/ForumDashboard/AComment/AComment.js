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
    background:white;
    border-radius:10px;
    padding:15px 15px 0 !important;
`
const Body = styled.p.attrs({
    className: 'postTitle'
})`
    display:inline;
`
const UserCommentLike = styled.p.attrs({
    className: 'postDate'
})`
    color:#616161;
    font-size:12px;
    letter-spacing:0.4px;
`
const TheDate = styled.span.attrs({
    className: 'postDate'
})`
    color:#616161;
    font-size:12px;
    letter-spacing:0.4px;
`
const Margin = styled.span.attrs({
    className: 'marginHelper'
})`
    margin-left:15px;
    float:right;
`
const Options = styled.span.attrs({
    className: 'commentOptions'
})`
    font-size: 12px;
    padding:0 15px 0 0px;
    color:#212121;
    opacity:0.7;
    transition:0.3s;
    cursor:pointer;
    &:hover{
        transition:0.3s;
        opacity:1;
    }
`

const Avatar = styled.img.attrs({
    className: 'postAvatar'
})`
    border-radius:100%;
    height:50px;
    width:50px;
    margin:10px 10px 10px 0 !important;
`

const AComment = ({
    id,
    body,
    user,
    date,
    image,
    likes,
    avatar,
    onClick,
    onLike
}) => {
    const cdate = (new Date(date)).toDateString();
    return (
        <PostWrapper key={id}>
            <div className="col s1">
                <Avatar src={avatar}/>
            </div>
            <SubPostWrapper>
                <Body onClick={onClick}>{body}</Body>
                <UserCommentLike>By {user}, <TheDate>{cdate}</TheDate>
                    <Margin>
                        <Options>Edit</Options>
                        <Options>Delete</Options> 
                        {likes} 
                        <i className="far fa-thumbs-up" onClick={onLike}></i>
                    </Margin>
                </UserCommentLike>
            </SubPostWrapper>
        </PostWrapper>
    )
  }

AComment.propTypes = {
    image: PropTypes.string,
    avatar: PropTypes.string,
    user: PropTypes.string.isRequired,
    id: PropTypes.string,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

AComment.defaultProps = {
    type: 'text'
}

export default AComment;