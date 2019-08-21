import React, { Component } from 'react';
import styled from 'styled-components';
import AdminDashCard from '../AdminDashCard/AdminDashCard';
import BioAdminCard from './BioAdminCard/BioAdminCard';
import AdminNav from '../AdminNav/AdminNav';

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

class AdminMedia extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <AdminNav/>
{/*               <AdminDashCard
                title="Blog Post"
                body="7 minute read is the maximum."
                icon="fas fa-feather-alt"
              /> */}
              <AdminDashCard
                title="Book Media Upload"
                body="Adding books to the media dashboard"
                icon="fas fa-book"
                endpoint="booksMedia"
              />
              <AdminDashCard
                title="Video Media Upload"
                body="Adding videos to the media dashboard"
                icon="fas fa-video"
                endpoint="videosMedia"
              />
              <AdminDashCard
                title="Podcast Media Upload"
                body="Adding podcasts to the media dashboard"
                icon="fas fa-microphone"
                endpoint="podcastsMedia"
              />
              <AdminDashCard
                title="Paper Media Upload"
                body="Adding papers to the media dashboard"
                icon="fas fa-pen"
                endpoint="papersMedia"
              />
              <BioAdminCard
                title="Biography Upload"
                body="Adding biography to the discover dashboard"
                icon="fas fa-user"
              />
            </Row>
        </Wrapper>
        );
    }
}

export default AdminMedia;