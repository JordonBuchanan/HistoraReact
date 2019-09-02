import React, { Component } from 'react';
import styled from 'styled-components';
import LatestBook from './LatestBook/LatestBook';
import Book from './Book/Book';
import { AssetService } from '../../../../../Services/AssetService';
import { FavoriteService } from '../../../../../Services/FavoriteService';
import ViewTable from '../../../../Common/ViewTable';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
`

const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
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
        content:"Books";
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
    cursor:pointer;
  `

class Books extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      books: [],
      latest: [],
      all: [],
      active: 'BOOKS',
      viewAll: false
    };
    this.viewAll = this.viewAll.bind(this);
  //  this.onFavorite = this.onFavorite.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await AssetService.getBookMedias().then(books => {
      this.setState({
        books: books.slice(1,5),
        latest: books.slice(0,1),
        all: books,
        isLoading: false,
      })
    })
  }
  viewAll(){
    const self = this;
    const active = this.state.active;
    const newActive = active === 'BOOKS' ? 'ALLBOOKS' : 'BOOKS';
    this.setState({ 
      isLoading: true, 
      active: newActive,
    });
    if(active === 'ALLBOOKS'){
      self.setState({
        active: newActive,
        viewAll: true,
        isLoading: false
      });
    }
  }
  onFavorite = async (id) => {
    const self = this;
    this.setState({ isLoading: true })
    await FavoriteService.favoritePost(id)
    window.flash('Media successfully favorited!', 'success')
    self.setState({
      isLoading: false,
    })
  }
    render() {
      const { books, latest, all, active } = this.state;
      return (
        <Wrapper>
            <Row>
                <div className="col s12">
                   <Title>Books <ViewAll onClick={this.viewAll}>View All <i className="fas fa-chevron-right"></i></ViewAll></Title>
                    {(active === 'BOOKS') && latest.map(latest => 
                      <LatestBook
                        title={latest.title}
                        author={latest.author}
                        image={latest.image}
                        link={latest.link}
                        source={latest.source}
                        key={latest._id}
                      />
                    )}
                    {(active === 'BOOKS') && books.map(books => 
                      <Book
                        title={books.title}
                        author={books.author}
                        image={books.image}
                        link={books.link}
                        source={books.source}
                        key={books._id}
                        onFavorite={() => this.onFavorite(books._id)}
                      />
                    )}
                    {(active === 'ALLBOOKS') && all.map(all => 
                      <ViewTable
                        title={all.title}
                        author={all.author}
                        image={all.image}
                        link={all.link}
                        source={all.source}
                        key={all.id}
                      />
                    )}
                </div>
            </Row>
        </Wrapper>
        );
    }
}

export default Books;