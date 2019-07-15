import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewsCardParent = styled.div.attrs({
    className: 'col s12 z-depth-3'
})`
    background:#FAFAFA;
    border-radius:100%;
    margin-bottom:10px;
    padding:10px 25px !important;
    text-align:center;
`

const NewsCardWrapper = styled.div.attrs({
    className: 'profileStat col s12'
})`
    border-radius:100%;
    color:#616161;
    text-align:center;
    height:90px;
    max-width:100px;
    width:100%;
    h4{
        margin-top:35px;
        padding:0 !important;
        font-weight:bold;
    }
`
const StatName = styled.p.attrs({
    className: 'mydashStatsSmall'
})`
    color: #616161;
    margin-top:0px;
    display:block;
    font-weight:500;
    font-size:12px;
    letter-spacing:1.25px;
    padding:0 !important;

`

const MyDashboardStats = ({
    title,
    stat
}) => {
    return (
        <NewsCardParent>
            <NewsCardWrapper>
                <h4>{stat}</h4>
            </NewsCardWrapper>
            <StatName>{title}</StatName>
        </NewsCardParent>
    )
  }

MyDashboardStats.propTypes = {
    title: PropTypes.string.isRequired,
    stat: PropTypes.string.isRequired,
}

MyDashboardStats.defaultProps = {
    type: 'text'
}

export default MyDashboardStats;