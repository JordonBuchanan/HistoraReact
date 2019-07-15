import React from 'react';
import styled from 'styled-components';
import Jordon from './Jordon.jpeg';

const Wrapper = styled.div.attrs({
     className: 'col s6'
})`
    width:100%;
    height: 600px;
    background:#eee;
    padding:25px 100px;
`
const HostWrapper = styled.div.attrs({
    className: 'col s8 push-s4"'
})`
    background:linear-gradient(to bottom, rgb(0,0,0,0.3), rgba(0,0,0,0.6), black),url('${Jordon}');
    background-size:cover;
    background-position:top;
    width: 100%;
    height: 550px;
    color: white;
    margin-top:25px;
    overflow:hidden;
    border-radius:10%;
    box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
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
const Name = styled.p.attrs({
    className: 'hostName'
})`
    color: #e0e0e0;
    margin:5px;
    margin-left:10px;
    z-index:0;
    font-size:16px;
    letter-spacing:0.5px;
    padding-bottom:5px;
    font-weight:500;
`
const Desc = styled.p.attrs({
    className: 'HostDesc'
})`
    border-left:2px solid #FAFAFA;
    padding-left:10px;
    margin:10px; 5vh;
    color:#e0e0e0;
`
const A = styled.a.attrs({
    className: 'hostA'
})`
    color:#e0e0e0;
    padding:10px 0 0 15px;
    font-size:10px;
    letter-spacing: 1.5px;
    text-transform:uppercase;
    font-weight:700;
`

const Host = () => {
    return (
        <Wrapper>
            <div className="col s2"></div>
            <HostWrapper>
                <H3>Histora's Host</H3>
                <Name>Jordon Buchanan</Name>
                <Desc>
                    An avid Historian and Software Engineer on the side anyway lorem ipsum
                    loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
                </Desc>
                <A href="">instagram</A>
                <A href="">twitter</A>
                <A href="">snapchat</A>
            </HostWrapper>
        </Wrapper>
    )
}

export default Host;
