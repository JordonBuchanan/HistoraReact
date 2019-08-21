import React, { Component } from 'react';
import styled from 'styled-components';
import AdminNav from '../AdminNav/AdminNav';
import FactCard from './AdminEtcCards/FactCard';
import PicksCard from './AdminEtcCards/PicksCard';
import AnnoucementCard from './AdminEtcCards/AnnoucementCard';

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

class AdminEtc extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <AdminNav/>
              <FactCard
                title="Add New Fact"
                body="Replaces current fact of the day on landing page"
                icon="fas fa-lightbulb"
              />
               <PicksCard
                title="Add a Histora Pick"
                body="Replaces the last third of the current shown Histora Picks"
                icon="fas fa-clipboard-list"
              />
               <AnnoucementCard
                title="Add New Annoucement"
                body="Only 3 annoucements are shown at any time. Adding one pushes out the last third previously shown"
                icon="fas fa-bullhorn"
              />
            </Row>
        </Wrapper>
        );
    }
}

export default AdminEtc;