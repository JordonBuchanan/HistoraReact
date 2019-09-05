import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCardLinks from './ProfileCardLinks/ProfileCardLinks';
import { authenticationService } from '../../../../Services';

const Wrapper = styled.div.attrs({
    className: 'col s2'
})`
    background: linear-gradient(-35deg,#424242, #212121);
    height:100rem;
    width:100%;
    box-shadow:0 4px 8px rgba(0,0,0,0.4);
    text-align:center;
    padding:0 !important;
    p{
        color:#FAFAFA;
        font-size:16px;
        letter-spacing:0.5px;
        font-weight:500;
        margin:5px 0 !important;
    }
    small{
        font-size:10px;
        letter-spacing:1.5px;
        font-weight:bold;
        text-transform:uppercase;
        color:#FAFAFA;
    }
`
const Avatar = styled.div.attrs({
    className: 'dashboardAvatar'
})`
    border-radius:100%;
    height:150px;
    width:150px;
    background-size:cover;
    margin: 25px 35px 15px;
    border:3px solid #FAFAFA;
`

const Title = styled.p.attrs({
    className: 'profileTItle'
})`
    margin: 5px 0;
    color: #e0e0e0 !important;
    letter-spacing:0.25px;
    font-size:14px !important;
    font-weight:400 !important;
`

class ProfileCard extends Component {
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
    render() {
        const { currentUser } = this.state;
        const { currentAdmin } = this.state;
        console.log(currentAdmin)
        return (
            <Wrapper>
                {currentAdmin &&
                    <Avatar style={{backgroundImage: `url(${currentAdmin.admin.avatar})`}}/>
                }
                {currentUser &&
                    <Avatar style={{backgroundImage: `url(${currentUser.user.avatar})`}}/>
                }
                <small>Profile Information</small>
                {currentAdmin &&
                    <p>{currentAdmin.admin.name}</p>
                }
                <Title>Administrator</Title>
                <ProfileCardLinks/>
                <small>Your Favorites</small>
                {currentAdmin &&
                    <p>{currentAdmin.admin.favorites}</p>
                }
            </Wrapper>
        )
    }
}
export default ProfileCard