import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard/ProfileCard';
import Annoucements from './Annoucements/Annoucements';
import HistoryNews from './HistoryNews/HistoryNews';
import AskHost from './AskHost/AskHost';
import Biographies from './Biographies/Biographies';

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
  height:100rem;
  overflow:scroll;
`

class Dashboard extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <DashWrapper>
                <Annoucements/>
                <HistoryNews/>
                <AskHost/>
                <Biographies/>
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default Dashboard;