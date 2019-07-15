import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s3'
})`
    img{
        display:block;
        height:auto;
        width:200px;
        margin:0px 0 25px;
        background:#FAFAFA;
        padding:15px 25px;
        border-radius:10px;
    }
`

const DeveloperStack = () => {
    return (
        <Wrapper>
            <img alt="Reactjs" src="https://i.imgur.com/8DBsUEu.png"/>
            <img alt="Nodejs" src="https://i.imgur.com/35tZCnA.png"/>
            <img alt="Expressjs" src="https://i.imgur.com/Cqdh2X4.png"/>
            <img alt="Mongodb" src="https://i.imgur.com/dBHjtts.png"/>
        </Wrapper>
    )
}

export default DeveloperStack;

