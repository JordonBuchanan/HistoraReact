import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12 z-depth-2'
})`
    border-radius:10px;
    background:#F44336;
    padding: 15px 10px !important;
    margin-top:10px;
    color: white;
    h6{
        font-weight:800;
    }
    i{
        padding-right: 10px !important;
    }
`

class DeleteAccount extends Component {
    render() {
        return (
            <div className="col s12">
                <Wrapper>
                    <h6>
                        <i class="fas fa-user-slash"></i>
                        Delete Account
                    </h6>
                </Wrapper>
            </div>
        )
    }
}
export default DeleteAccount;