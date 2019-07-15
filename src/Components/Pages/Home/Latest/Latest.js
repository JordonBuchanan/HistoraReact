import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className:'col s6 latest'
})`
    color:#212121;
    width:100%;
    height:400px;
    padding:0 !important;
    background:#e0e0e0;
    overflow:auto;
    padding: 0 2vw !important;
    & h4{
        font-weight:400;
        letter-spacing:0.25px;
        margin-bottom:15px;
    }
`

const Entries = styled.div.attrs({
    className: 'col-sm-12 entries'
})`
    height:60px;
    border-radius:10px;
    width:100%;
    margin: 20px 0;
    background: white;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    & p{
        font-size:14px !important;
        color: black;
        font-weight:500;
        margin:-5px 10px;
        cursor:pointer;
        padding-bottom:0;
        display:inline-block;
    }
    & small{
        margin:5px 10px 0;
        float:right;
    }
`

const EntryWrapper = styled.div.attrs({
    className: 'entryWrapper'
})`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    color:#FAFAFA;
    padding:22.5px 0px 22.5px 7.5px;
    background:#212121;
    width:10%;
    height:60px;
    font-size:10px;
    letter-spacing:1.5px;
    font-weight:bold;
    text-align:center;
    display:inline-block;
    & i{
        margin-right:5px;
        font-size:16px;
    }
`


const Latest = () => {
    return (
        <Wrapper>
            <h4>Latest from Histora</h4>
            <Entries>
                <EntryWrapper><i className="fas fa-video"></i></EntryWrapper>
                <p>
                    In the Footsteps of the Lombards
                </p>
                <small>1 Day Ago</small>
            </Entries>
            <Entries>
                <EntryWrapper><i className="fas fa-pencil-alt"></i></EntryWrapper>
                <p>
                    Quick Hit Facts About Josef Stalin
                </p>
                <small>2 Days Ago</small>
            </Entries>
            <Entries>
                <EntryWrapper><i className="fas fa-microphone"></i></EntryWrapper>
                <p>
                    What I Never Understood About the Byzantines
                </p>
                <small>A Week Ago</small>
            </Entries>
            <Entries>
                <EntryWrapper><i className="fas fa-microphone"></i></EntryWrapper>
                <p>
                    What I Never Understood About the Byzantines
                </p>
                <small>A Week Ago</small>
            </Entries>
        </Wrapper>
    )
}

export default Latest;