import React, { Component } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AssetService } from '../../../../Services/AssetService';
import AnnoucementCard from './AnnoucementCard/AnnoucementCard';

const Wrapper = styled.div.attrs({
    className: 'col s12 z-depth-4'
})`
    padding:0 !important;
    height:250px;
    margin:15px;
    text-align:center;
    border-radius:10px;
    .carousel{
        height:300px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08) !important; 
        border-radius:10px;
    }
    .legend{
        color:#FAFAFA !important;
        font-size:34px !important;
        text-align:left !important;
        background: rgba(0,0,0,0.85) !important
        letter-spacing:0.25px !important;
        width:100% !important;
        top:0;
        right: 0;
        margin:0 !important;
        border-radius: 0 !important;
        border-bottom-left-radius:10px !important;
        height:100px;
        padding-bottom:20px !important;
        padding-left:15px !important;
        opacity:1 !important;
    }
    .legend small{
        color: #eee;
        display:block;
        font-size:14px;
        letter-spacing:0.25px;
    }
`

class Annoucements extends Component {
    constructor(props){
        super(props)
        this.state = {
          annoucements:[],
          allAnnoucements:[],
          isLoading: false
        };
      }
      componentDidMount = async () => {
        this.setState({ isLoading: true })
        await AssetService.getAnnoucements().then(annoucements => {
          this.setState({
            annoucements: annoucements.slice(0,3),
            allAnnoucements: annoucements,
            isLoading: false,
          })
        })
      }
    render() {
        const { annoucements } = this.state;
        return (
            <div className="col s12">
                <Wrapper>
                    <Carousel
                        autoPlay={true}
                        showArrows={false}
                        width="100%"
                        showThumbs={false}
                        transitionTime={600}
                        interval={5000}
                        infiniteLoop={true}
                    >
                    {annoucements.map(annoucements => 
                        <AnnoucementCard
                            title={annoucements.title}
                            body={annoucements.body}
                            image={annoucements.image}
                            link={annoucements.link}
                        />
                    )}
                    </Carousel>
                </Wrapper>
            </div>
        )
    }
}
export default Annoucements;