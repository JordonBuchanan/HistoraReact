import React, { Component } from 'react';
import styled from 'styled-components';
import { authenticationService } from '../../../../../Services';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    background: #FAFAFA;
    border-radius:10px;
    width:100%;
    overflow:hidden;
    box-shadow:0 4px 8px rgba(0,0,0,0.4);
    padding:15px 0 !important;
    margin-bottom:25px;
`

const IMG = styled.img.attrs({
    className: 'editAvatar z-depth-2'
})`
    height: 250px;
    width: 250px;
    border-radius:100%;
`

const Email = styled.p.attrs({
    className: 'editEmail'
})`
    color:#757575;
    font-size:12px;
    margin:5px;
`
const Name = styled.h1.attrs({
    className: 'editName'
})`
    color:#212121;
    font-weight:300;
    margin: 15px 0 0 !important;
`

const Bio = styled.p.attrs({
    className: 'editBio'
})`
    font-size:14px;
    color: #212121;
    letter-spaing:0.25px;
    font-weight:400;
    width:75%;
`

const StatWrapper = styled.div.attrs({
    className:'profileStatWrapper z-depth-1 col s3'
})`
    border-radius:5px;
    padding:10px 10px 15px !important;
    text-align:center;
    margin:0 10px;
    &:nth-of-type(1){
        background:#E8F5E9;
    }
    &:nth-of-type(2){
        background:#E1F5FE;
    }
    &:nth-of-type(3){
        background:#F3E5F5;
    }
    i{
        opacity:0.5;
        padding-right:10px;
        font-size:20px;
    }
`
const Stat = styled.h4.attrs({
    className:'profileStat'
})`
    display:inline;
`
const StatName = styled.p.attrs({
    className:'profileStatName'
})`
    display:inline;
    padding:0 10px;
    font-weight:500;
`

class EditProfileSettings extends Component {
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
       // const { currentUser } = this.state;
        const { currentAdmin } = this.state;

        return (
            <div className="col s12">
                {currentAdmin &&
                    <Wrapper>
                        <div className="col s3">
                            <IMG alt="avatar" src={`${currentAdmin.admin.avatar}`}/>        
                        </div>
                        <div className="col s9">
                            <Name>{currentAdmin.admin.name}</Name>
                            <Email>{currentAdmin.admin.email}</Email>
                            <Bio>{currentAdmin.admin.biography}</Bio>
                            <StatWrapper>
                                <i className="fas fa-user-friends"></i>
                                <Stat>54</Stat> 
                                <StatName>Friends</StatName>
                            </StatWrapper>
                            <StatWrapper>
                                <i className="fas fa-pen"></i>
                                <Stat>135</Stat> 
                                <StatName>Posts</StatName>
                            </StatWrapper>
                            <StatWrapper>
                                <i className="fas fa-heart"></i>
                                <Stat>35</Stat> 
                                <StatName>Favorites</StatName>
                            </StatWrapper>
                        </div>
                    </Wrapper>
                }    
            </div>
        )
    }
}
export default EditProfileSettings;