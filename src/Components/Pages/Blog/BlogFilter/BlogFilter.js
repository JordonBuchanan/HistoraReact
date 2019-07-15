import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12'
  })`
    padding:10px 25px !important;
    background:#FAFAFA;
    border-radius:10px;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
  `
  const H6 = styled.h6.attrs({
    className: 'blogTitleMinor'
  })`
    font-weight:400;
    font-size:20px;
    letter-spacing:0.15px;
    color: #212121;
  `

class BlogFilter extends Component {
    render() {
        return (
            <Wrapper>
                <H6>Dates</H6>
                <li>June 2019</li>
                <li>May 2019</li>
                <li>April 2019</li>
                <li>March 2019</li>
                <H6>Tags</H6>
                <li>Rome</li>
                <li>Russia</li>
                <li>Stalin</li>
                <li>Caesar</li>
            </Wrapper>
        )
    }
}
export default BlogFilter;