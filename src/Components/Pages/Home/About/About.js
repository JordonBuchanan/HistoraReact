import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className:'col s6 About'
})`
    color:#212121;
    padding:5px 20vh 75px 7vh !important;
    width:100%;
    height: 600px;
    text-align:center;
    & h3{
        font-weight:300;
        margin-bottom:15px;
    }
    & h5{
        font-weight:300;
        letter-spacing:0.25px;
        margin:25px 0 15px;
    }
    & p{
        font-size:14px;
        letter-spacing:0.25px;
        color: #424242;
        line-height:2rem;
    }
`
const SubWrapper = styled.div.attrs({
    className: 'col-sm-4'
})`
    display:inline-block;
    text-align:center;
    width:33.3%;
    padding:10px 5px 0;
    &:hover{
        background:#FAFAFA;
        border-radius:10px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08);
        transition:0.2s;
    }
    & i{
        font-size:35px;
        color: #FAFAFA;
        border-radius:100%;
        width:100px;
        height:100px;
        background:linear-gradient(35deg, #424242, #212121);
        padding:30px 20px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08);
    }
    & p:nth-of-type(1){
        font-weight:500;
        font-size:14px;
        letter-spacing:0.5px; 
        margin-top:5px;
    }
    & p:nth-of-type(2){
        font-size:12px;
        letter-spacing:0.25px;
        color: #424242;
        line-height:1.5rem;
    }
`
const HR = styled.hr.attrs({
    className: 'about-hr'
})`
    background:color: #212121;
    border-bottom:1px solid #212121;
    width:125px;
`
const SubHr = styled.hr.attrs({
    className: 'about-subHr'
})`
    background:color: #212121;
    border-bottom:1px solid #212121;
    width:25px;
    margin-top:-10px;
`

const About = () => {
    return (
        <Wrapper>
            <h3>About Histora</h3>
            <HR align="left" />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <h5>What to Expect from Histora?</h5>
            <div className="row">
                <SubWrapper className="col-sm-4">
                    <i className="fas fa-book"></i>
                    <p>Research</p>
                    <SubHr />
                    <p>Hours of research bundled into Histora's database that is sure to satisfy
                    any hardy historian looking for a new topic!</p>
                </SubWrapper>
                <SubWrapper className="col-sm-4">
                    <i className="fas fa-brain"></i>
                    <p>Knowledge</p>
                    <SubHr/>
                    <p>A vast knowledge base revolving around history! From modern contemporary
                    to the ancient sands of Egypt!</p>
                </SubWrapper>
                <SubWrapper className="col-sm-4">
                    <i className="fas fa-theater-masks"></i>
                    <p className="lead">Entertainment</p>
                    <SubHr/>
                    <p>A touch of humor and the host's very own brand of personality to add a more
                        fun twist to historical learning and docu.
                    </p>
                </SubWrapper>
            </div>
        </Wrapper>
    )
}

export default About;