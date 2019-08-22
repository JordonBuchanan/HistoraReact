import React, { Component } from 'react'
import styled from 'styled-components';
import Fact from './Fact/Fact'

const Wrapper = styled.div.attrs({
    className: 'col s12 z-depth-3'
})`
    width:100%;
    background:#212121;
    max-width: 90%;
    bottom:0;
    margin: 25px 7% 0 !important;
    padding:10px 10px 20px!important
    border-radius:10px;
`
const H3 = styled.h5.attrs({
    className: 'factTitle'
})`
    color:#FAFAFA;
    margin:0;
    padding-left:5px;
    margin-top:12.5px;
`
const H5 = styled.h6.attrs({
    className: 'factSubTitle'
})`
    color:#FAFAFA;
    margin:0;
    padding-left:5px;
`
 class HistoricFact extends Component {
    render() {
        return (
            <Wrapper>
                 <div className="col s3">
                    <H3>Historic Fact</H3>
                    <H5>of the Day</H5>
                </div>
                <Fact/>
            </Wrapper>
        )
    }
}

export default HistoricFact;