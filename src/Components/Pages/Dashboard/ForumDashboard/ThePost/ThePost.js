import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostComment from '../NewComment/NewComment';

const PostWrapper = styled.div.attrs({
    className: 'postWrapper col s12'
})`
    background:#FAFAFA;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    border-radius:10px;
`
const CommentWrapper = styled.div.attrs({
    className: 'commentWrapper col s12'
})`
    max-height:400px;
    overflow:auto;
    display:block;
`
const Title = styled.h4.attrs({
    className: 'postTitle'
})`
    font-weight:500;
    margin-top:-5px;
`
const UserDate = styled.p.attrs({
    className: 'postDate'
})`
    color:#616161;
    font-size:12px;
    letter-spacing:0.4px;
    margin: 0 !important;
`
const Img = styled.img.attrs({
    className: 'postImage'
})`
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    height:auto;
    width:auto;
    max-height: 400px;
    max-width:800px
    margin-top:15px;
    border-radius:10px;
`

const Body = styled.p.attrs({
    className: 'postBody'
})`
    background:white;
    width:100%;
    padding:10px !important;
    color:#212121;
    letter-spacing:0.25px;
    font-size:16px;
    border-radius:10px;
`

const Return = styled.p.attrs({
    className: 'returnToPosts'
})`
    float:right;
    font-weight:700;
    cursor:pointer;
    font-size:12px;
    margin-top:10px;
    margin-right:10px;
`

const Avatar = styled.img.attrs({
    className: 'postAvatar'
})`
    border-radius:100%;
    height:150px;
    width:150px;
    margin:10px 10px 10px 0 !important;
`


const ThePost = ({
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
    onDelete,
    onEdit,
}) => {
    const cdate = (new Date(date)).toDateString();
    return (
        <PostWrapper>
            <Return onClick={onClick}>Return To Forum <i className="fas fa-angle-double-right"></i></Return>
            <div className="col s2">
                <Avatar src={avatar}/>
                <button onClick={onEdit} style={{background: "#388E3C"}}>Edit</button>
                <button onClick={onDelete} style={{background: "#D32F2F"}}>Delete</button>
            </div>
            <div className="col s10">
                <Title>{title}</Title>
                <UserDate>by {user} {cdate}</UserDate>
                <Img src={image}/>
                <Body>{body}</Body>
                <PostComment id={id}/>
                <CommentWrapper>{comments}</CommentWrapper>
            </div>
        </PostWrapper>
    )
  }

ThePost.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    avatar: PropTypes.string,
    user: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

ThePost.defaultProps = {
    type: 'text'
}

export default ThePost;