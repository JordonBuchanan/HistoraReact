import React from 'react';
import styled from 'styled-components';
import HeroImg from './hero.jpg';

const Wrapper = styled.div.attrs({
    className: 'mediaHero col s12'
})`
    background:linear-gradient(to top, #eee, rgba(255,255,255,0.2), rgba(255,255,255,0.2)),url('${HeroImg}');
    background-size: cover;
    background-position: center;
    height:300px;
    width:100%;
    text-align:right;
    padding:0 !important;
    h1{
        margin-top:225px;
        padding-right:10px;
        font-weight:300;
    }
`

const MediaHero = () => {
    return (
        <Wrapper>
            <h1>Media Dashboard</h1>
        </Wrapper>
    )
  }

  export default MediaHero;