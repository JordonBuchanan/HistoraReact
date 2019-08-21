import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs({
    className:'col s12 Footer'
})`
    background: black !important;
    height:30px;
    color:#FAFAFA;
    text-align:center;
    padding-top:2.5px !important;
    .row{
        margin-bottom: 0;
    }
    a{
        font-size:12px;
        color: #FAFAFA;
    }
`

const Footer = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col s6">
                    <Link to="/developerportal">Terms of Service | </Link>
                    <Link to="/developerportal">Privacy Policy | </Link>
                    <Link to="/developerportal">Developer Portal</Link>

                </div>
                <div className="col s6">
                    <small>&copy 2019 Vatanan Media</small>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer
