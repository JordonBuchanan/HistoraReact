import React, { Component } from 'react';
import styled from 'styled-components';
import PaperCard from './PaperCard/PaperCard';

const Wrapper = styled.div.attrs({
  className: 'col s12'
})`
  padding:0;
`

const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    font-weight:500;
    margin-left:12.5px;
    &:before{
        content:"Articles";
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
const ViewAll = styled.p.attrs({
    className: 'viewAllBtn'
  })`
    float:right;
    font-size:12px;
    font-weight:bold;
    margin:0px 15px 0 0;
    letter-spacing:0.25px;
  `

class PaperMedia extends Component {
    render() {
      return (
        <Wrapper>
            <Title>Articles <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
            <PaperCard
                title="Tomb of Richard the 2nd"
                image="https://i.imgur.com/n9TIXGN.jpg"
                description="We take a look at the tomb of Richard the 2nd and treasure hidden within"
                author="Celeste Turner"
                source="National Geographic"
            />
            <PaperCard
                title="Tomb of Richard the 2nd"
                image="https://i.imgur.com/n9TIXGN.jpg"
                description="We take a look at the tomb of Richard the 2nd and treasure hidden within"
                author="Jordon Buchanan"
                source="History.com"
            />
            <PaperCard
                title="Tomb of Richard the 2nd"
                image="https://i.imgur.com/n9TIXGN.jpg"
                description="We take a look at the tomb of Richard the 2nd and treasure hidden within"
                author="Conrad Burtrem"
                source="Historic News"
            />
        </Wrapper>
        );
    }
}

export default PaperMedia;