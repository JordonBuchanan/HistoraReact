import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard/ProfileCard';
import AdvancedSettings from './AdvancedSettings/AdvancedSettings';
import EditProfileSettings from './EditProfileSettings/EditProfileSettings';
import PersonalizeSettings from './PersonalizeSettings/PersonalizeSettings';

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
  padding:15px 0 0 !important;
`

class SettingsDashboard extends Component {
    render() {
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <DashWrapper>
                <EditProfileSettings/>
                <PersonalizeSettings/>
                <AdvancedSettings/>
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default SettingsDashboard;