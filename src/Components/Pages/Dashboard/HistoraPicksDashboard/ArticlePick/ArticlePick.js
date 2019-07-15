import React, { Component } from 'react';
import styled from 'styled-components';
import Microlink from '@microlink/react'

const Wrapper = styled.div.attrs({
    className: 'askHostWrapper z-depth-4 col s7'
})`
    background-size:cover;
    border-radius:10px;
    height:300px;
    background: white;
    padding: 0 !important;
    a{
        border-radius:10px;
        border: none;
        padding: 0 !important;
        height:300px;
        max-width:100%;
    }
    .microlink_card__content{
        position:absolute;
        color:#FAFAFA;
        background: rgba(0,0,0,0.4);
        bottom:0;
        p{
            padding:2.5px 0;
        }
    }
`
const Title = styled.h2.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:30px;
    font-weight:500;
    &:before{
        content:"Article Pick";
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

class ArticlePick extends Component {
    render() {
        return (
            <div className="col s12">
                <Title>Article Pick</Title>
                <Wrapper>
                    <Microlink 
                        url='https://allthatsinteresting.com/reconstructed-faces-of-ancient-people' size='large'
                        style={{fontFamily: 'Roboto'}}
                        />
                </Wrapper>
                <Thoughts>
                    <h5>Article Thoughts</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Thoughts>
            </div>
        )
    }
}
export default ArticlePick;