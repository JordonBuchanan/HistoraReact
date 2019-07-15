import React, { Component } from 'react';
import styled from 'styled-components';
import AdminDashCard from './AdminDashCard/AdminDashCard';

const Wrapper = styled.div.attrs({
  className: 'container-fluid'
})`
  padding:0;
  height:210vh;
`

const Row = styled.div.attrs({
  className: 'row siteRow'
})`
  margin:0
  padding:0;
`

class AdminDash extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <AdminDashCard
                title="Blog Post"
                body="Reminder to write tags and keeps things small and simple for Histora. 7 minute read is the maximum."
                link="/blogwriter"
                icon="fas fa-feather-alt"
                button="Write Blog Post"
              />
              <AdminDashCard
                title="Video Upload"
                body="For uploading already recorded videos onto the Histora page. Reminder to build a streamable one for Twitch"
                link="/blogwriter"
                icon="fas fa-video"
                button="Upload Video"
              />
              <AdminDashCard
                title="Podcast Upload"
                body="Adding a podcast to the podcast page. Have to remind myself to do something with the uploader to accept this"
                icon="fas fa-microphone"
                button="Upload Podcast"
              />
              <AdminDashCard
                title="Add Fact"
                body="Add a fact to the fact of the day component. Perhaps add quotes too"
                icon="fas fa-comment"
                button="Add Fact"
              />
              <AdminDashCard
                title="Make Annoucement"
                body="Here to make an annoucement. Have to be as comprehensive as possible"
                icon="fas fa-bullhorn"
                button="Add Annoucement"
              />
              <AdminDashCard
                title="Add Biography"
                body="Adding a biography to main dashboard Component. Need to load dataet"
                icon="fas fa-users"
                button="Add Biography"
              />
              <AdminDashCard
                title="Histora Picks"
                body="Adding a biography to main dashboard Component. Need to load dataet"
                icon="fas fa-heart"
                button="Add Biography"
              />
            </Row>
        </Wrapper>
        );
    }
}

export default AdminDash;