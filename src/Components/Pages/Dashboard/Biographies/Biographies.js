import React, { Component } from 'react';
import styled from 'styled-components';
import BiographyCard from './BiographyCard/BiographyCard';
import Biography from './Biography/Biography';

const Wrapper = styled.div.attrs({
    className: 'biographiesWrapper col s12'
})`
    padding:0 25px !important;
    .active{
    }
`
const ViewAll = styled.p.attrs({
    className: 'viewAllBtn'
})`
    float:right;
    font-size:12px;
    font-weight:bold;
    margin-top:0px;
    letter-spacing:0.25px;
  `
  
const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    font-weight:500;
    &:before{
        content:"Biographies";
        position:absolute;
        z-index:-1;
        opacity:0.25;
        color: #bdbdbd;
        font-weight:bold;
        font-size:54px;
        margin-left:10px;
        margin-top:15px;
    }
`


class Biographies extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Biographies <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
                <BiographyCard
                    name="Voltaire"
                    image="https://i.imgur.com/41QmhH7.jpg"
                    />
                <BiographyCard
                    name="Richard II"
                    active="active"
                    image="https://i.imgur.com/n9TIXGN.jpg"
                    />
                <BiographyCard
                    name="Akhenaten"
                    image="https://i.imgur.com/UvgL7yf.jpg"
                    />
                <BiographyCard
                    name="Caligula"
                    image="https://i.imgur.com/lVh1I9H.jpg"
                    />
                <BiographyCard
                    name="Napoleon"
                    image="https://i.imgur.com/fExdD4Z.jpg"
                    />
                <BiographyCard
                    name="Isaac Newton"
                    image="https://i.imgur.com/UUqw4cg.png"
                    />
                <Biography
                    name="Richard II Plantagenet"
                    title="English King"
                    birthDate="January 6th 1367"
                    deathDate="February 14th 1400"
                    image="https://i.imgur.com/n9TIXGN.jpg"
                    description="Richard II also known as Richard of Bordeaux, was King of England from 1377 until he was deposed in 1399. Richard's father, Edward the Black Prince, died in 1376, leaving Richard as heir apparent to King Edward III. Upon the death of his grandfather Edward III, the 10-year-old Richard succeeded to the throne."
                    />
            </Wrapper>
        )
    }
}
export default Biographies;