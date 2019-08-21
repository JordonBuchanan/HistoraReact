import React, { Component } from 'react';
import styled from 'styled-components';
import AdminNav from '../AdminNav/AdminNav';
import AssetCard from './AssetCards/AssetCard';

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

class AdminAssets extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
               <AdminNav/>
               <AssetCard
                title="Podcast Upload"
                body="Adding a podcast to the podcast page. Have to remind myself to do something with the uploader to accept this"
                icon="fas fa-microphone"
                endpoint="podcast"
              />
               <AssetCard
                title="Video Upload"
                body="Make sure its Youtube"
                icon="fas fa-video"
                endpoint="video"
              />
{/*              <AdminDashCard
                title="Add Fact"
                body="Add a fact to the fact of the day component. Perhaps add quotes too"
                icon="fas fa-comment"
              />
              <AdminDashCard
                title="Make Annoucement"
                body="Here to make an annoucement. Have to be as comprehensive as possible"
                icon="fas fa-bullhorn"
              />
              <AdminDashCard
                title="Add Biography"
                body="Adding a biography to main dashboard Component. Need to load dataet"
                icon="fas fa-users"
              />
              <AdminDashCard
                title="Histora Picks"
                body="Adding a biography to main dashboard Component. Need to load dataet"
                icon="fas fa-heart"
              /> */}
            </Row>
        </Wrapper>
        );
    }
}

export default AdminAssets;