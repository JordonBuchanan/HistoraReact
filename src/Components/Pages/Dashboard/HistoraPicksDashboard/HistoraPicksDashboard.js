import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard/ProfileCard';
import PickDisplayCard from './PickDisplayCard/PickDisplayCard';
import { AssetService } from '../../../../Services/AssetService'

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
    margin:15px 10px;
    font-weight:100;
    &:before{
        content:"Histora's Picks";
        position:absolute;
        z-index:-1;
        font-weight:700;
        opacity:0.2;
        color: #bdbdbd;
        font-size:inheritpx;
        margin-left:20px;
        margin-top:25px;
    }
`
const P = styled.p.attrs({ 
    className: 'historapicksPara'
})`
    letter-spacing:0.5px;
    font-size:16px;
    margin-bottom:15px !important;
    color: #4f4f4f;
    padding: 0 100px 0 15px !important;
`

class HistoraPicksDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      picks:[],
      allPicks:[],
      isLoading: false
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await AssetService.getPicks().then(picks => {
      this.setState({
        picks: picks.slice(0,3),
        allpicks: picks,
        isLoading: false,
      })
    })
  }
    render() {
      const { picks } = this.state;
      return (
        <Wrapper>
            <Row>
              <ProfileCard/>
              <DashWrapper>
                <Title>Histora's Picks</Title>
                <P>Histora Team's handpicked favorites from across the internet</P>
                {picks.map(picks => 
                  <PickDisplayCard
                    title={picks.title}
                    thoughts={picks.thoughts}
                    view={picks.view}
                    image={picks.image}
                    link={picks.link}
                  />
                )}
              </DashWrapper>
            </Row>
        </Wrapper>
        );
    }
}

export default HistoraPicksDashboard;