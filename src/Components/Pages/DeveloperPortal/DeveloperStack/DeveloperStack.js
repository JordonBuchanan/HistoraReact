import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    border-radius:10px;
    border-top-right-radius:0;
    padding-top:15px !important;
    text-align:center;
    p{
        margin:0px;
    }
`

const DeveloperStack = () => {
    return (
        <Wrapper>
            <p>Reactjs - Nodejs - Express - MongoDB</p>
        </Wrapper>
    )
}

export default DeveloperStack;

