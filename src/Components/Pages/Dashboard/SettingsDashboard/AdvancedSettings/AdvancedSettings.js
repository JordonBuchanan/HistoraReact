import React, { Component } from 'react';
import styled from 'styled-components';
import DeleteAccount from './DeleteAccount/DeleteAccount';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    background: #FAFAFA;
    border-radius:10px;
    width:100%;
    box-shadow:0 4px 8px rgba(0,0,0,0.4);
    padding:0 0 15px !important;
    text-align:center;

    hr{
        width:100px;
        border-bottom:2px solid #212121;
        background:#212121;
    }
`

class AdvancedSettings extends Component {
    render() {
        return (
            <div className="col s6">
                <Wrapper>
                    <h4>Advanced</h4>
                    <hr/>
                    <DeleteAccount/>
                </Wrapper>
            </div>
        )
    }
}
export default AdvancedSettings;