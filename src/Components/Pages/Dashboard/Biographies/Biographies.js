import React, { Component } from 'react';
import styled from 'styled-components';
import BiographyCard from './BiographyCard/BiographyCard';
import Biography from './Biography/Biography';
import { AssetService } from '../../../../Services/AssetService';

const Wrapper = styled.div.attrs({
    className: 'biographiesWrapper col s12'
})`
    padding:0 25px !important;
    .active{
    }
`
const ViewAll = styled.p.attrs({
    className: 'viewAllBtn'
})`
    float:right;
    font-size:12px;
    font-weight:bold;
    margin-top:0px;
    letter-spacing:0.25px;
  `
  
const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    font-weight:500;
    &:before{
        content:"Biographies";
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

class Biographies extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      biographies: [],
      featured: []
    };
    this.onCLick = this.onClick.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await AssetService.getBiographies().then(biographies => {
      this.setState({
        biographies: biographies.slice(0,6),
        featured: biographies.slice(0,1),
        isLoading: false,
      })
    })
  }
  onClick(biographies){
      this.setState({
          featured:[biographies],
          isLoading: false
      })
  }

    render() {
        const { biographies, featured } = this.state;
        return (
            <Wrapper>
                <Title>Biographies <ViewAll>View All <i class="fas fa-chevron-right"></i></ViewAll></Title>
                {biographies.map(biographies => 
                    <BiographyCard
                        name={biographies.name}
                        image={biographies.image}
                        key={biographies.id}
                        onClick={() => this.onClick(biographies)}
                        />
                )}
                {featured.map(featured => 
                    <Biography
                        name={featured.name}
                        title={featured.title}
                        birthDate={featured.birthDate}
                        deathDate={featured.deathDate}
                        image={featured.image}
                        description={featured.description}
                        />
                )}
            </Wrapper>
        )
    }
}
export default Biographies;