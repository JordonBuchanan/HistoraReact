import React, { Component } from 'react'
import styled from 'styled-components';
import Fact from '../Fact/Fact'

const Wrapper = styled.div.attrs({
    className: 'col s6'
})`
    background:#e0e0e0;
    height: 400px;
    width:100%;
    text-align:center;
`
const H3 = styled.h3.attrs({
    className: 'factTitle'
})`
    color:#212121;
    margin:0;
    margin-top:25px;
`
const H5 = styled.h5.attrs({
    className: 'factSubTitle'
})`
    color:#212121;
    margin:0;
`
 class HistoricFact extends Component {
    render() {
        return (
            <Wrapper>
                <H3>Historic Fact</H3>
                <H5>of the Day</H5>
                <Fact/>
            </Wrapper>
        )
    }
}

export default HistoricFact;