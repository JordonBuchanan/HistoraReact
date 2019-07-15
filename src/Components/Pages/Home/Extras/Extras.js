import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s6'
})`
    background:black;
    height: 400px;
    width:100%;
    text-align:center;
`
const H3 = styled.h3.attrs({
    className: 'extrasTitle'
})`
    color:white;
    margin:0;
    margin-top:25px;
`

 class Extras extends Component {
    render() {
        return (
            <Wrapper>
                <H3>News</H3>
            </Wrapper>
        )
    }
}

export default Extras;