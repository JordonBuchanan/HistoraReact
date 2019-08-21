import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { history } from '../../../Helpers';
import PodcastNavbar from './PodcastNavbar/PodcastNavbar';
import { authenticationService } from '../../../Services';
import M from "materialize-css";


const Wrapper = styled.div.attrs({
    className: 'col s12 AltNav z-depth-1'
})`
    background: linear-gradient(-35deg, black, black);
    height:50px;
    text-align:center;
    padding:15px 0 !important;
    width:101vw;
    & a{
        color:#9E9E9E;
        text-transform:uppercase;
        font-weight:500;
        font-size:12px;
        padding:15px 2vw;
        letter-spacing: 1.25px;
        &:hover{
            color:#FAFAFA;
        }
    }
    & i{
        padding:0 7.5px
        font-size:35px;
        position:absolute;
        right:10px;
        top:7.5px;
    }
    .fa-bell{
        font-size:20px;
        right:60px;
        top:16px;
    }
    .active{
        color:#FAFAFA;
        border-bottom:2px solid #FAFAFA;
    }
    #podcast:hover ~ .podcastDiv{
        display:block;
    }
    #dropdown1{
        top:-40px;
        a{
            color: #212121 !important;
            font-size:14px !important;
        }
    }
`

const Brand = styled.h4.attrs({
    className: 'brand'
})`
    color:#FAFAFA;
    position:absolute;
    display:inline;
    font-weight:700;
    left:10px;
    top:-15px;
    #subBrand{
        font-weight:100;
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
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

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

        const userLinks = (
            <LinkDiv>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => {this.logout();}} className="logoutLink">Logout</Link>
                <Link to="/register"><i className="fas fa-user-circle"></i></Link>
            </LinkDiv>
        );
        return (
            <Wrapper>
                <Brand><span id="subBrand">THE</span>HISTORA</Brand>
                <Link className="active" to="/">Home</Link>
                <Link to="/videos">Videos</Link>
                <Link id="podcast" to="/podcast">Podcast</Link>
                <PodcastNavbar/>
                <Link to="/Blog">Blog</Link>
                <a href="http://localhost:5000/documentation">API</a>
                {currentUser &&
                    userLinks
                }     
                {!currentUser && !currentAdmin &&
                    guestLinks
                }
                {currentAdmin &&
                    <LinkDiv>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/admindash">Admin Dashboard</Link>
                        <Link to="/"><i className="far fa-bell"></i></Link>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><Link to="/" onClick={() => {this.logout();}} className="logoutLink">Logout</Link></li>
                            <li><Link to="/dashboard/settings">Settings</Link></li>
                        </ul>
                        <Avatar data-target='dropdown1' 
                            className="dropdown-trigger" 
                            style={{backgroundImage: `url(${currentAdmin.admin.avatar})`}}
                            />
                    </LinkDiv>
                }
            </Wrapper>
        )
    }
}
export default AltNav;