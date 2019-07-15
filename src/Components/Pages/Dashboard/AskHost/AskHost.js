import React, { Component } from 'react';
import styled from 'styled-components';
import background from './Jordon.jpeg';
import TextFieldGroup from '../../../Common/TextFieldGroup'

const Wrapper = styled.div.attrs({
    className: 'askHostWrapper col s12'
})`
    background:linear-gradient(to bottom, rgb(0,0,0,0.4), rgba(0,0,0,0.7), black),url('${background}');
    background-size:cover;
    border-radius:10px;
    height:300px;
    .form-group{
        padding-top:35vh !important;
        input{
            background:#FAFAFA;
w        }
    }
`
const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:75px;
    font-weight:500;
    &:before{
        content:"Ask The Host";
        position:absolute;
        z-index:-1;
        opacity:0.25;
        color: #bdbdbd;
        font-weight:bold;
        font-size:54px;
        margin-left:10px;
        margin-top:15px;
    }
`

class AskHost extends Component {
    render() {
        return (
            <div className="col s3">
                <Title>Ask The Host</Title>
                <Wrapper>
                <TextFieldGroup
                    label="Question? Suggestion? Request? Ask Here!"
                    placeholder="Ask Something..."
                    name="AskHost"
                    />
                </Wrapper>
            </div>
        )
    }
}
export default AskHost;