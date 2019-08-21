import React from 'react';
import styled from 'styled-components';
import Background from './background.jpg';

const HostWrapper = styled.div.attrs({
    className: 'col s12'
})`
    background:linear-gradient(to bottom, rgb(0,0,0,0.3), rgba(0,0,0,0.6), black),url('${Background}');
    background-size:cover;
    background-position:top;
    width: 100%;
    height:100vh;
    color: white;
    overflow:hidden;
`

const H3 = styled.h2.attrs({
    className: 'hostTitle'
})`
    z-index:2
    margin-bottom:0;
    margin-left:10px;
    margin-top: 320px;
    font-weight:100;
`
const Desc = styled.p.attrs({
    className: 'HostDesc'
})`
    border-left:2px solid #FAFAFA;
    padding-left:10px;
    margin:10px; 5vh;
    color:#e0e0e0;
`

const MediaPreview = () => {
    return (
            <HostWrapper>
                <H3>Hub of Resources</H3>
                <Desc>
                    An avid Historian and Software Engineer on the side anyway lorem ipsum
                    loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
                </Desc>
            </HostWrapper>
    )
}

export default MediaPreview;