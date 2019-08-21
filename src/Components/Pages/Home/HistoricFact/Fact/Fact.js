import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: "col s9"
})`
    color:#FAFAFA;
`
const Quote = styled.p.attrs({
    className: 'signature'
})`
    font-size:12px;
    letter-spacing:0.5px;
`
const Signature = styled.small.attrs({
    className: 'signature'
})`
    display:block;
    text-align:right;
    font-size:12px;
    color: #FAFAFA;
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