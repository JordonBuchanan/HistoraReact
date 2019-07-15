import React, { Component } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
    render() {
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
                        <div>
                            <img src="https://i.imgur.com/fJ4peln.jpg"/>
                            <p className="legend">v1.02 Developer Notes
                                <small>Latest patch notes and updates from the developer team</small>
                            </p>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/fExdD4Z.jpg"/>
                            <p className="legend">"Napoleon On Napoleon"
                                <small>Read the autobiography of Le Emperor himself now added to Book List</small>
                            </p>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/O3etUni.jpg"/>
                            <p className="legend">Crossing the Rubicon
                                <small>Indepth look at Julius Caesar's march into history</small>
                            </p>
                        </div>
                    </Carousel>
                </Wrapper>
            </div>
        )
    }
}
export default Annoucements;