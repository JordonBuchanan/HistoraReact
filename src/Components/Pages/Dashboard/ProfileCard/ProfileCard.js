import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCardLinks from './ProfileCardLinks/ProfileCardLinks';
import { authenticationService, FavoriteService } from '../../../../Services';

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
const FavDiv = styled.div.attrs({
    class: "favoritesSideDiv"
})`
    text-align: center;
    a{
        color: #FAFAFA;
        padding: 2.5px 0;
        font-size:12px;
    }
    .unfavoriteFav{
        color: #F44336;
        padding: 0 0 0 5px;
        font-size:12px;
    }
`

class ProfileCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentUser: null,
          currentAdmin: null
        };
      this.onUnfavorite = this.onUnfavorite.bind(this);
      }
      componentDidMount(){
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
        authenticationService.currentAdmin.subscribe(x => this.setState({ currentAdmin: x }));
      }
      onUnfavorite = async (props) => {
        const self = this;
        this.setState({ isLoading: true })
        await FavoriteService.unfavoritePost(props)
        window.flash('Favorite Successfully Removed!', 'success')
        self.setState({
          isLoading: false,
        })
      }
    render() {
        const { currentUser, currentAdmin } = this.state;
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
                    <FavDiv>
                        {currentAdmin.admin.favorites.map(favorites => 
                            <div>
                                <a href={favorites.link} 
                                    key={favorites._id}>
                                    {favorites.title}

                                </a>
                                <span onClick={() => this.onUnfavorite(favorites._id)} className="unfavoriteFav">X</span>
                            </div>
                        )}
                    </FavDiv>
                }
            </Wrapper>
        )
    }
}
export default ProfileCard