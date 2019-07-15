import React from 'react';
import styled from 'styled-components';
import Placeholder from '../video-placeholder.jpg'

const Wrapper = styled.div.attrs({
     className: 'col s12 videoEpisode'
})`
    width:100%;
    height: 160px;
    background:#FAFAFA;
    padding:0 15px 0 0 !important;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    margin:15px 0;
    border-radius:10px;
    & img{
        height:160px;
        width:auto;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
    }
    & #videoDiv{
        overflow:hidden;
    }
    & p{
        color:#4f4f4f;
        letter-spacing:0.5px;
        font-size:16px;
        margin-bottom:0 !important;
    }
    & small{
        color:#4f4f4f;
    }
`

const Video = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col s6" id="videoDiv">
                    <img alt="Video Thumbnail" src={Placeholder}/>
                </div>
                <div className="col s6">
                    <h5>Who is Cassius Dio</h5>
                    <p>Jordon goes into a indepth look at the life, the legacy, and the legend of Rome's greatest historian</p>
                    <small>June 10th 2019</small>
                </div>
            </div>
        </Wrapper>
    )
}

export default Video;