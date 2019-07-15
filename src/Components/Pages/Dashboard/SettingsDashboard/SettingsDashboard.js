import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard/ProfileCard';
import MyDashboardStats from './MyDashboardStats/MyDashboardStats';
import EditProfile from './EditProfile/EditProfile';

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
`

const Title = styled.h1.attrs({
    className: 'myDashboardTitle'
})`
    margin:15px 20px;
    font-weight:100;
    &:before{
        content:"My Dashboard";
        position:absolute;
        z-index:-1;
        font-weight:100;
        opacity:0.25;
        color: #bdbdbd;
        font-size:inheritpx;
        margin-left:25px;
        margin-top:25px;
    }
`
const StatWrapper = styled.div.attrs({
    className: 'col s12'
})`
    border-radius:10px;
    text-align:center;
`

class SettingsDashboard extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <DashWrapper>
                <div className="col s12">
                    <Title>My Dashboard</Title>
                </div>
                <div className="col s2">
                    <StatWrapper>
                        <MyDashboardStats
                            stat="26"
                            title="Friends"
                        />
                        <MyDashboardStats
                            stat="620"
                            title="Posts"
                        />
                        <MyDashboardStats
                            stat="106"
                            title="Favorites"
                        />
                    </StatWrapper>
                </div>
                <EditProfile/>
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default SettingsDashboard;