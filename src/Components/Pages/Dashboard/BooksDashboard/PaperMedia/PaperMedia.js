import React, { Component } from 'react';
import styled from 'styled-components';
import PaperCard from './PaperCard/PaperCard';
import { AssetService } from '../../../../../Services/AssetService';

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
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      papers: [],
      allPapers:[]
    };
    //this.viewAll = this.viewAll.bind(this);
  //  this.onFavorite = this.onFavorite.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await AssetService.getPaperMedias().then(papers => {
      this.setState({
        papers: papers.slice(0,3),
        allPapers: papers,
        isLoading: false,
      })
    })
  }
    render() {
      const { papers } = this.state;
      return (
        <Wrapper>
            <Title>Articles <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
            {papers.map(papers => 
              <PaperCard
                  title={papers.title}
                  image={papers.image}
                  description={papers.body}
                  author={papers.author}
                  source={papers.source}
                  link={papers.link}
              />
            )}
        </Wrapper>
        );
    }
}

export default PaperMedia;