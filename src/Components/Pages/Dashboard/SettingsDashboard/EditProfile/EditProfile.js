import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'col s12' 
})`
    background: #212121;
    width:100%;
    height:300px;
    border-radius:10px;
`

class EditProfile extends Component {
    render() {
        return (
            <div className='col s10'>
                <Wrapper>
                    
                </Wrapper>
            </div>
        )
    }
}
export default EditProfile;