import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12 z-depth-2'
})`
    border-radius:10px;
    background:white;
    padding: 15px 10px !important;
    margin-top:10px;
    i{
        padding-right: 10px !important;
    }
`

class DarkModeToggle extends Component {
    render() {
        return (
            <div className="col s12">
                <Wrapper>
                    <h6>
                        <i class="far fa-moon"></i>
                        Toggle Dark Mode
                    </h6>
                </Wrapper>
            </div>
        )
    }
}
export default DarkModeToggle;