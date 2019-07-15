import React, { Component } from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard/NewsCard';

const Wrapper = styled.div.attrs({
    className: 'historyNewsWrapper col s9'
})`
    margin-top:50px;
    padding:0 25px !important;
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
        content:"News in History";
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

class HistoryNews extends Component {
    render() {
        return (
            <Wrapper>
                <Title>News in History <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
                <NewsCard
                    title="Who is Caligula?"
                    image="https://i.imgur.com/lVh1I9H.jpg"
                    description="Take a deep dive look into the so-called 'Mad Emperor' of Rome"
                    />
                <NewsCard
                    title="The Majesty of Amarna"
                    image="https://i.imgur.com/UvgL7yf.jpg"
                    description="A mad king or a visionary? A look into what the period ushered"
                    />
                <NewsCard
                    title="The Peasent Revolt"
                    image="https://i.imgur.com/n9TIXGN.jpg"
                    description="A big turning point in English history and the reprocusions that lasts"
                    />
                <NewsCard
                    title="What Voltaire Teachs Us"
                    image="https://i.imgur.com/41QmhH7.jpg"
                    description="The life and times of Voltaire's philosophical works and literature"
                    />
            </Wrapper>
        )
    }
}
export default HistoryNews;