import React, { Component } from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const Wrapper = styled.div.attrs({
    className: 'z-depth-4 col s7'
})`
    background-size:cover;
    border-radius:10px;
    background: none;
    height:300px;
    padding:0 !important;
    iframe{
        border-radius:10px;
    }
`
const Title = styled.h4.attrs({
    className: 'videoPickTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:10px;
    font-weight:500;
    &:before{
        content:"Video Pick";
        position:absolute;
        z-index:-1;
        opacity:0.25;
        color: #bdbdbd;
        font-weight:bold;
        font-size:34px;
        margin-left:10px;
        margin-top:15px;
    }
`
const Thoughts = styled.div.attrs({
    className: 'col s5'
})`
    padding: 0 25px !important;
    color:#4f4f4f;
    & p{
        letter-spacing:0.5px;
        font-size:16px;
        margin-bottom:15px !important;
    }
`

class VideoPick extends Component {
    render() {
        const opts = {
            height: '300',
            width: '100%',
            playerVars: {
            }
        };
        return (
            <div className="col s12">
                <Title>Video Pick</Title>
                <Wrapper>
                    <Youtube
                        videoId="r72X5oUPTwM"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </Wrapper>
                <Thoughts>
                    <h5>Video Thoughts</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Thoughts>
            </div>
        )
    }
    _onReady(event){
        event.target.pauseVideo();
    }
}

export default VideoPick;