import React, { Component } from 'react';
import { PostService } from '../../../../Services/Post-service';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard/ProfileCard';
import TopicCard from './TopicCard/TopicCard';
import PostBar from './PostBar/PostBar';
import QuickHits from './QuickHits/QuickHits';
import ThePost from './ThePost/ThePost';
import axios from 'axios';
import ContentLoader, { Instagram } from 'react-content-loader';
import AComment from './AComment/AComment';

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

const DashWrapper = styled.div.attrs({
  className: 'col s10'
})`
  padding:0 !important;
  padding: 25px !important;
`
const UpperDashWrapper = styled.div.attrs({
  className: 'col s10'
})`
  padding:0 !important;
  padding: 15px 15px 0 !important;
`
const PostList = styled.div.attrs({
    className: 'col s12'
})`
    height:175vh;
    overflow: auto;
`

class ForumDashboard extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: '',
        posts: [],
        id: '',
        blocks: [],
        quickHits: [],
        isLoading: false,
        active:'POSTS',
        title: '',
        avatar: '',
        body: '',
        image: '',
        date: '',
        likes: '',
        comments: []
      };
      this.onClick = this.onClick.bind(this);
      this.onDelete = this.onDelete.bind(this);
    }
    componentDidMount = async () => {
      this.setState({ isLoading: true })
      await PostService.getPosts().then(posts => {
        this.setState({
          posts: posts,
          quickHits: posts,
          isLoading: false
        })
      })
    }
    onDelete(id){
      this.setState({ isLoading: true })
      PostService.deletePost(id);
      this.setState(st => ({
        active: 'POSTS',
        posts: st.posts.forEach(dat => {
          if(dat.id === id) {
            dat.remove()
          }
        }),
        isLoading: false, 
        title: '',
        avatar: '',
        body: '',
        id:'',
        image: '',
        user: '',
        date: '',
        likes: '',
        comments: [] 
      }))
      console.log(this.state.posts)
    }
    onLike(id){
      PostService.likePost(id);
    }

    onClick(id){
      const self = this;
      const active = this.state.active;
      const newActive = active === 'POSTS' ? 'POST' : 'POSTS';
      this.setState({ 
        isLoading: true, 
        active: newActive,
      });
      if(active === 'POST'){
        self.setState({
          active: newActive,
          isLoading: false
        });
      } else {
      axios
        .get(`http://localhost:5000/api/posts/${id}`)
        .then(function(response){
          self.setState({
            title: response.data.title,
            id: response.data._id,
            avatar: response.data.admin.avatar,
            body: response.data.body,
            image: response.data.image,
            user: response.data.admin.name,
            date: response.data.date,
            likes: response.data.likes.length,
            comments: response.data.comments,
            isLoading: false,
          })
        })
      }
    }
    render() {
      const { posts, quickHits } = this.state;
      const active = this.state.active;
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <UpperDashWrapper>
              {quickHits.slice(0,3).map(quickHits => 
                <QuickHits
                    title={quickHits.title}
                    image={quickHits.image}
                    likes={quickHits.likes.length}
                    comments={quickHits.comments.length}
                    key={quickHits._id}
                    />
              )}
              </UpperDashWrapper>
              <DashWrapper>
                <PostBar/>
                <PostList>
{/*                 {(active === 'POSTS') && isLoading === true && posts.map(posts => 
                  <ContentLoader
                    height={50}
                  >
                        <rect x="40" y="13" rx="10" ry="10" width="35" height="35" />
                        <rect x="80" y="17" rx="4" ry="4" width="250" height="5" />
                        <rect x="80" y="30" rx="3" ry="3" width="200" height="5" />
                    </ContentLoader>
                  )} */}
                  {(active === 'POSTS') &&  posts.map(posts => 
                    <TopicCard 
                        id={posts._id}
                        key={posts._id}
                        title={posts.title}
                        avatar={posts.admin.avatar}
                        body={posts.body}
                        image={posts.image}
                        user={posts.admin.name}
                        date={posts.date}
                        likes={posts.likes.length}
                        comments={posts.comments.length}
                        onClick={() => this.onClick(posts._id)}
                        onLike={() => this.onLike(posts._id)}
                    />
                  )}
                  {(active === 'POST')  &&
                    <ThePost 
                      title={this.state.title}
                      avatar={this.state.avatar}
                      body={this.state.body}
                      image={this.state.image}
                      user={this.state.user}
                      date={this.state.date}
                      likes={this.state.likes}
                      id={this.state.id}
                      key={this.state.id}
                      comments={this.state.comments.map ((comment) => 
                        <AComment 
                          id={comment._id}
                          key={comment._id}
                          body={comment.body}
                          user={comment.admin.name}
                          date={comment.date}
                          image={comment.image}
                          likes={comment.likes}
                          avatar={comment.admin.avatar}
                        />
                      )}
                      onClick={() => this.onClick()}
                      onEdit={() => this.onEdit()}
                      onDelete={() => this.onDelete(this.state.id)}
                    /> 
                  }
{/*                   {(active === 'POST') && isLoading === true &&
                    <Instagram
                      height={400}
                    >
                    </Instagram>
                  } */}
                </PostList>
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default ForumDashboard;