import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div.attrs({
    className: 'paperCardWrapper col s4'
})`
    margin: 5px 0;
    small{
        color: #757575;
    }
    i{
        font-size:20px;
        margin-top:17.5px;
        padding-left: 15px;
    }
    .card{
        margin-top:0 !important;    
        margin-bottom:0 !important;    
        height:400px;
        overflow:hidden;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        box-shadow:none;
    }
    .card-image{
        overflow:hidden;
        height:200px;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
    .card-action{
        height:65px;
        padding-top:2.5px !important;
        border-top:none;
        background:white;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
    .card-title{
        font-weight:500;
        margin-bottom:0 !important;
    }
    .hbadge{
        position:absolute;
        z-index:9;
        top:0;
        font-size:14px;
    }
    p{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow:hidden;
    }
`
const SubWrapper = styled.div.attrs({
    className: 'col s12 z-depth-4'
})`
    background: white;
    border-radius:10px;
    width:100%;
    height:65px;
    padding:0 !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
`

const Author = styled.small.attrs({
    className: 'authorPaper'
})`
    line-height:2px;
`

const PaperCard = ({
    title,
    image,
    description,
    author,
    source,
    link
}) => {
    return (
        <CardWrapper>
            <SubWrapper>
                <div className="card">
                    <div className="card-image">
                        <span class="hbadge">{source}</span>
                        <img alt="paper" src={image}/>
                    </div>
                    <div className="card-content">
                        <span class="card-title">{title}</span>
                        <Author>By {author}</Author>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="card-action">
                    <div className="col s8">
                        <a target="_blank" rel="noopener noreferrer" href={link}><button>Read</button></a>
                    </div>
                    <div className="col s4">
                        <i className="far fa-heart"></i>
                        <i class="fas fa-share-alt"></i>                        
                    </div>
                </div>
            </SubWrapper>
        </CardWrapper>
    )
  }

PaperCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

PaperCard.defaultProps = {
    type: 'text'
}

export default PaperCard;