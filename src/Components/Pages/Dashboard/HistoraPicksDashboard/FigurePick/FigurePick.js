import React, { Component } from 'react';
import styled from 'styled-components';
import Placeholder from './augustus.jpg';

const Wrapper = styled.div.attrs({
    className: 'askHostWrapper z-depth-4 col s7'
})`
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${Placeholder});
    background-size:cover;
    border-radius:10px;
    height:300px;
`
const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:30px;
    font-weight:500;
    &:before{
        content:"Figure Pick";
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
const H2 = styled.h2.attrs({
    className: 'newsCardTitle'
})`
    font-weight:100;
    color:#FAFAFA;
    letter-spacing:0.15px;
    margin-top:230px;
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

class FigurePick extends Component {
    render() {
        return (
            <div className="col s12">
                <Title>Figure Pick</Title>
                <Wrapper>
                    <H2>Augustus Caesar</H2>
                </Wrapper>
                <Thoughts>
                    <h5>Figure Thoughts</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Thoughts>
            </div>
        )
    }
}
export default FigurePick;