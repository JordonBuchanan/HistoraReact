import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: "col s12"
})`
    background: #BDBDBD;
    margin-top:25px;
    height:65%;
    color:#212121;
`
const Quote = styled.p.attrs({
    className: 'signature'
})`
    font-style: italic;
    font-size:16px;
    letter-spacing:0.5px;
    margin: 10% 50px;
`
const Signature = styled.small.attrs({
    className: 'signature'
})`
    display:block;
    text-align:right;
`

class Fact extends Component {
    render() {
        return (
            <Wrapper>
                <Quote>
                “The difference between Pride Jaguar and the Drago-Kazov? A Jaguar will stab you in the back to gain an advantage. a Dragan will stab you just to see if his knife is sharp.”  
                    <Signature>~Charlemagne</Signature>
                </Quote> 
            </Wrapper>
        )
    }
}

export default Fact;