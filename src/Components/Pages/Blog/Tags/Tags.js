import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'tagWrapper'
})`
    display:inline-block;
`
const Tag = styled.div.attrs({
    className: 'tag'
})`
    border: 1px solid #212121;
    font-size:10px;
    font-weight:500;
    text-transform: uppercase;
    padding:2px 5px;
    margin: 0px 10px 0px 0px;
    display:inline-block;
`

 class Tags extends Component {
    render() {
        return (
            <Wrapper>
                <Tag>Russia</Tag>
                <Tag>Soviets</Tag>
                <Tag>Stalin</Tag>
            </Wrapper>
        )
    }
}
export default Tags;