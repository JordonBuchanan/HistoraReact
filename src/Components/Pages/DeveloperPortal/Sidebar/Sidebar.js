import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs({
    className: 'col s2'
})`
    background:black;
    padding:0 !important;
    height:100vh;
    text-align:center;
    a{
        display:block;
        font-size:14px;
        color:#757575;
        padding:10px 0;
    }
    .active{
        background:linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.2));
        border-right:2px solid white;
        color:#FAFAFA !important;
        font-weight:700;
    }
`

const Sidebar = () => {
    return (
        <Wrapper>
            <Link className="active">Overview</Link>
            <Link>Our Team</Link>
            <Link>Contribute</Link>
            <Link>Changelog</Link>
            <Link>Histora API</Link>
            <Link>Developer Notes</Link>
            <Link>Support</Link>
        </Wrapper>
    )
}

export default Sidebar;