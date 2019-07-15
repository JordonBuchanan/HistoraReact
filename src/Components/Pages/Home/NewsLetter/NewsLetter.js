import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12 newsletterDiv'
})`
    height:200px;
    background:linear-gradient(to left, #424242, #212121);
    text-align:center;
    color:#FAFAFA;
    & h4{
        margin-top:5vh !important;
    }
    & input{
        max-width:250px;
        display:inline-block;
        color:#FAFAFA;
        padding:0 10px;
    }
`

class NewsLetter extends Component {
    render() {
        return (
            <Wrapper>
                <h4>Subscribe to our Newsletter</h4>
                <p>Get weekly historical tidbits, reads, and updates on Histora itself!</p>
                <form>
                    <input type="text" placeholder="Email" />
                </form>
            </Wrapper>
        )
    }
}
export default NewsLetter;