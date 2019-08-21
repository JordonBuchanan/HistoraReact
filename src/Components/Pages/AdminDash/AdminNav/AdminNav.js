import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminNavbar = styled.div.attrs({
  className: 'col s12 adminNav'
})`
  background: #212121;
  height: 50px;
  text-align:center;
  padding: 15px 0 !important;
   a{
    color:#9E9E9E;
    text-transform:uppercase;
    font-weight:500;
    font-size:12px;
    padding:15px 2vw;
    letter-spacing: 1.25px;
    &:hover{
        color:#FAFAFA;
    }
    .active{
      color:#FAFAFA;
      border-bottom:2px solid #FAFAFA;
  }
}
`

class AdminNav extends Component {
    render() {
      return (
        <AdminNavbar>
            <Link to="/admindash">Home</Link>
            <Link to="/admindash">Statistics</Link>
            <Link to="/admindash/adminmedia" className="active">Media</Link>
            <Link to="/admindash/adminassets">Main Assets</Link>
            <Link to="/admindash/adminetc">Etc</Link>
        </AdminNavbar>
        );
    }
}

export default AdminNav;