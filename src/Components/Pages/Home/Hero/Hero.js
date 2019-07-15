import React from 'react';
import styled from 'styled-components';
import bg from './museum.jpg';

const Wrapper = styled.div.attrs({
     className: 'col s12'
})`
    background:linear-gradient(35deg, rgb(0,0,0,0.9), rgba(0,0,0,0.7)), url(${bg});
    background-size:cover;
    background-position:top;
    width:100%;
    height: 400px;
    color: white;
    overflow:hidden;
    text-align:center;
    & i{
        font-size:24px;
        padding:25px 15px 0;
    }
`
const H3 = styled.h1.attrs({
    className: 'heroTitle'
})`
    text-align:center;
    font-size:10vw;
    font-weight:100;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:5px;
    letter-spacing:1.5px;
`
const Para = styled.p.attrs({
    className: 'heroPara'
})`
    color: #FAFAFA;
    font-size:14px;
    letter-spacing:0.5px;
    font-weight:500;
    text-align:center;
    padding:0 35%;
`
const HR = styled.hr.attrs({
    className: 'align-center'
})`
    background:color;
    border-bottom:1px solid white;
    width:150px;
    margin-top:0;
`

const Hero = () => {
    return (
        <Wrapper>
            <H3>Histora</H3>
            <HR/>
            <Para>
                Welcome to the home of Histora. Here you will find the archived videos of our channel and also some extras such as podcasts and even blog posts! 
            </Para>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-medium-m"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-snapchat-ghost"></i>
        </Wrapper>
    )
}

export default Hero;