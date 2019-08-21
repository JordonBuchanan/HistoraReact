import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    width:100%;
    margin-top:15px;
    text-align:center;
    padding: 0 !important;
    small{
        font-size:10px;
        letter-spacing:1.5px;
        font-weight:bold;
        text-transform:uppercase;
        color:#FAFAFA;
    }
    a{
        display:block;
        padding:10px 0px;
        color: #757575;
        font-size:12px;
        font-weight:500;
        letter-spacing:0.4px;
    }
    .active{
        background:linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.2));
        border-right:2px solid white;
        color:#FAFAFA !important;
        font-weight:700;
        i{
            color:#FAFAFA !important;
        }
    }
`
const I = styled.i.attrs({
    className: 'ProfileLinkIcon'
})`
    color:#757575;
    font-size:10px;
    padding: 0 5px;
`

class ProfileCardLinks extends Component {
    
    render() {
        return (
            <Wrapper>
                <small>Dashboard Links</small>
                <Link className="active" to="/dashboard"><I className="fas fa-bolt "></I> Discover</Link>
                <Link to="/dashboard/settings"><I className="fas fa-th-large"></I> My Dashboard</Link>
                <Link to="/dashboard/forum"><I className="fas fa-landmark "></I> The Forum</Link>
                <Link to="/dashboard/books"><I className="fas fa-book "></I> Media</Link>
                <Link to="/dashboard/historapicks"><I className="fas fa-star"></I> Histora's Picks</Link>
                <small>Your Favorites</small>
            </Wrapper>
        )
    }
}
export default ProfileCardLinks;
