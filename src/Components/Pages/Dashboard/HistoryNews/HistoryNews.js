import React, { Component } from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard/NewsCard';
import { NewsAsset } from '../../../../Services/NewsAsset';

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
    constructor(props){
        super(props)
        this.state = {
          articles: [],
          isLoading: false,
        };
      //  this.onFavorite = this.onFavorite.bind(this);
      }
      componentDidMount = async () => {
        this.setState({ isLoading: true })
        await NewsAsset.getArticles().then(articles => {
            console.log(articles);
          this.setState({
            isLoading: false,
            articles: articles.articles.slice(0,4)
          })
        })
      }
    render() {
        const { articles } = this.state;
        return (
            <Wrapper>
                <Title>News in History <ViewAll>View All <i className="fas fa-chevron-right"></i></ViewAll></Title>
                {articles.map(articles => 
                    <NewsCard
                        title={articles.title}
                        image={articles.urlToImage}
                        description={articles.description}
                    />
                )}
            </Wrapper>
        )
    }
}
export default HistoryNews;