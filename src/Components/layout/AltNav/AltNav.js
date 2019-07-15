import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './dragon.png'
import { history } from '../../../Helpers';
import Alert from '../../Common/Alert';

import { authenticationService } from '../../../Services';

const Wrapper = styled.div.attrs({
    className: 'col s12 AltNav'
})`
    background: linear-gradient(-35deg, black, black);
    height:50px;
    text-align:center;
    padding:15px 0 !important;
    width:101vw;
    & a{
        color:#FAFAFA;
        text-transform:uppercase;
        font-weight:500;
        font-size:12px;
        padding:0 2vw;
        letter-spacing: 1.25px;
    }
    & i{
        padding:0 7.5px
        font-size:35px;
        position:absolute;
        right:10px;
        top:7.5px;
    }
    .logoutLink{
        right:50px;
        top:17.5px;
        position:absolute;
    }
`

const Brand = styled.div.attrs({
    className: 'brand'
})`
    background:#FAFAFA;
    height:50px;
    width:150px;
    position:absolute;
    overflow:hidden;
    top:0;
    left:0;
    border-bottom-right-radius:50px;
    & img{
        height:150px;
        margin-top:-35px;
        margin-right:-20px;
        width:auto;
    }
`
const Avatar = styled.div.attrs({
    className: 'profileAvatar'
})`
    padding:0 7.5px
    position:absolute;
    height:35px;
    width:35px;
    right:10px;
    top:7.5px;
    border-radius:100%;
    background-size:cover;
    background-position:center ;
`
const LinkDiv = styled.div.attrs({
    className:'linkDivs'
})`
    display:inline-block;
`

class AltNav extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentUser: null,
          currentAdmin: null
        };
      }
      componentDidMount(){
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
        authenticationService.currentAdmin.subscribe(x => this.setState({ currentAdmin: x }));
      }
      logout(){
        authenticationService.logout();
        history.push('/login');
      }
    render() {
        const { currentUser } = this.state;
        const { currentAdmin } = this.state;

        const guestLinks = (
            <Link to="/register"><i className="fas fa-user-circle"></i></Link>
        );
        const adminLinks = (
            <LinkDiv>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admindash">Admin Dashboard</Link>
                <Link onClick={() => {this.logout();}} className="logoutLink">Logout</Link>
            </LinkDiv>
        );

        const userLinks = (
            <LinkDiv>
                <Link to="/dashboard">Dashboard</Link>
                <Link onClick={() => {this.logout();}} className="logoutLink">Logout</Link>
                <Link to="/register"><i className="fas fa-user-circle"></i></Link>
            </LinkDiv>
        );
        return (
            <Wrapper>
                <Brand><img alt='brand' src={logo}/></Brand>
                <Link to="/">Home</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/podcast">Podcast</Link>
                <Link to="/Blog">Blog</Link>
                <a href="http://localhost:5000/documentation">API</a>
                {currentUser &&
                    userLinks
                }     
                {!currentUser && !currentAdmin &&
                    guestLinks
                }
                {currentAdmin &&
                    adminLinks
                }
                {currentAdmin &&
                    <Avatar style={{backgroundImage: `url(${currentAdmin.admin.avatar})`}}/>
                }
            </Wrapper>
        )
    }
}
export default AltNav;