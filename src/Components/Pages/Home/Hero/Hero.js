import React from 'react';
import styled from 'styled-components';
import Host from '../Host/Host';
import DashPreview from '../DashPreview/DashPreview';
import MediaPreview from '../MediaPreview/MediaPreview';
import HistoricFact from '../HistoricFact/HistoricFact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Herodotus from './newherodotus3.png';

const Wrapper = styled.div.attrs({
     className: 'col s12'
})`
    background:#eee;
    background-size:cover;
    background-position:85% 15%;
    width:100%;
    height: 100vh;
    padding: 0 !important;
    overflow:hidden;
    color: #212121;
    button{
        background:#B71C1C;
        border:none;
        width:200px;
        margin:15px 8% 0;
        i{
            font-size:12px;
        }
    }
    .carousel, .carousel-slider, .slider-wrapper{
        height:100vh !important;
    }
    .carousel .slide{
        background:none !important;;
    }
    #herodotusDiv{
        height:100vh;
        min-width:300px;
        padding:0 !important;
        background-position:center !important;
    }
`
const Para = styled.h5.attrs({
    className: 'heroPara'
})`
    color: #212121;
    letter-spacing:0.5px;
    font-weight:400;
    margin:0 8%;
    span{
        font-weight:700;
    }
`
const ParaTwo = styled.p.attrs({
    className: 'aboutPara'
})`
    color: #212121;
    padding:0 8%;
    margin: 12vh 0 10px;
    i{
        font-size: 14px;
        padding: 0 50px 0 0;
    }
`
const Desc = styled.p.attrs({
    className: 'aboutDesc'
})`
    color: #212121;
    margin:15px 20vw 15px 8%;
    font-size:16px;
    letter-spacing:0.5px;
    padding-left:10px;
    border-left:3px solid #212121;
`
const H1 = styled.h1.attrs({
    className: 'historaTItle'
})`
    font-weight:100;
    font-size:8em;
    padding:0 7%;
    margin:0;
    font-weight:800;
    span{
        font-weight:300;
    }
`

const Hero = () => {
    return (
        <Wrapper>
            <div className="col s8">
                <ParaTwo>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-medium-m"></i>
                    <i className="fab fa-instagram"></i>
                </ParaTwo>
                <Para>
                   A <span>Hub</span> for any Avid Historian
                </Para>
                <H1><span>THE</span>HISTORA</H1>
                <Desc>
                    Welcome to the home of the Histora series and hub for any avid historian looking for a place to learn and share.
                </Desc>
                <button className="z-depth-4">Create An Account <i class="fas fa-arrow-right"></i></button>
                <HistoricFact/>
            </div>
            <div id="herodotusDiv"
            style={{background: `linear-gradient(-35deg, rgba(33,33,33,1), rgba(33,33,33,1)), url(${Herodotus})`}}
             className="col s4 z-depth-3"
             >
                  <Carousel
                        autoPlay={true}
                        showArrows={false}
                        width="100%"
                        showThumbs={false}
                        transitionTime={200}
                        interval={3000}
                        infiniteLoop={true}
                    >
                    <div>
                        <DashPreview/>
                    </div>
                    <div>
                        <Host/>
                    </div>
                    <div>
                        <MediaPreview/>
                    </div>
                </Carousel> 
            </div>
        </Wrapper>
    )
}

export default Hero;