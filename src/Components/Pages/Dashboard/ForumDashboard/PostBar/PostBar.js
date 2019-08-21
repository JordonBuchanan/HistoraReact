import React, { Component } from 'react';
import styled from 'styled-components';
import NewPost from '../NewPost/NewPost';

const Wrapper = styled.div.attrs({
    className: 'postBar'
})`
    background: #FAFAFA;
    border-radius:10px;
    margin: 0 10px 15px;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    p{
        display:inline-block;
        padding: 0 15px !important;
        font-weight:500;
        font-size:14px;
        letter-spacing:0.25px;
    }
    button{
        width: 200px;
        float:right;
    }
`

class PostBar extends Component {
    render() {
        return (
            <Wrapper>
                <p><i className="fas fa-star"></i> Featured</p>
                <p><i className="fas fa-newspaper"></i> New</p>
                <p><i className="fas fa-fire"></i> Trending</p>
                <NewPost/>
            </Wrapper>
        )
    }
}
export default PostBar;