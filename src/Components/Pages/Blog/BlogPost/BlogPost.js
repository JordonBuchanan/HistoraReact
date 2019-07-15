import React from 'react';
import styled from 'styled-components';
import Placeholder from './placeholder.jpg';
import Tags from '../Tags/Tags';

const Wrapper = styled.div.attrs({
     className: 'col s12 videoEpisode'
})`
    width:100%;
    background:#FAFAFA;
    padding: 0 15px 15px;
    padding:0 15px 0 0 !important;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    margin:15px 0;
    border-radius:10px;
    #postDiv{
        overflow:hidden;
        padding:10px 3vw 0 !important;
    }
    #postImgDiv{
        height:150px;
        overflow:hidden;
        margin-bottom:10px;
    }
    & img{
        width:100%;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        display:block;
    }
    & p{
        color:#4f4f4f;
        letter-spacing:0.5px;
        font-size:16px;
        margin-bottom:15px !important;
    }
    & h4{
        margin-top:10px;
    }
`

const BlogPost = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col s12" id="postImgDiv">
                    <img alt="Post Picture" src={Placeholder}/>
                </div>
                <div className="col s12" id="postDiv">
                    <small>June 8th 2019</small>
                    <h4>Quick Hit Facts About Josef Stalin</h4>
                    <Tags/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <button>Read Full Post</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default BlogPost;