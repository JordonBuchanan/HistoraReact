import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Wrapper = styled.div.attrs({
    className: 'podcastDiv col s12'
})`
    height:165px;
    display:none;
    width:100%;
    top:50px;
    background:#212121;
    left:0;
    position:absolute;
    color:#FAFAFA;
    text-align:left;
    padding:0px 0px 15px 25px !important;
    z-index:9;
    iframe{
        border-radius:10px;
    }
    h5:nth-of-type(1){
        padding-top:25px !important;
    }
    &:hover{
        display:block;
    }
    div{
        margin-top:2px;
    }
`

        
class PodcastNavbar extends Component {
    render() {
        return (
            <Wrapper>
                <div className="row">
                    <div className="col s2">
                        <h5>Recent Histora</h5>
                        <h5>Podcasts</h5>
                    </div>
                    <div className="col s9">
                        <div className="col s4">
                            <ReactPlayer 
                                url='https://soundcloud.com/tphoow/sets/ancient-rome'
                                width='100%'
                                height="100%"
                            />
                        </div>
                        <div className="col s4">
                            <ReactPlayer 
                                url='https://soundcloud.com/tphoow/sets/ancient-rome'
                                width='100%'
                                height="100%"
                            />
                        </div>
                        <div className="col s4">
                            <ReactPlayer 
                                url='https://soundcloud.com/tphoow/sets/ancient-rome'
                                width='100%'
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
export default PodcastNavbar;