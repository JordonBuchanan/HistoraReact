import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextFieldGroup from '../../../Common/TextFieldGroup';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    background: #FAFAFA;
    padding:15px !important;
    text-align:center;
    margin:25px;
    overflow:auto;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    h4{
        font-weight:500;
        font-size:34px;
        letter-spacing:0.25px;
    }
    p{
        color:#4f4f4f;
        font-size:16px;
        letter-spacing:0.5px;
        padding:0 25px;
    }
    & i{
        color: #FAFAFA;
        border-radius:100%;
        width:50px;
        height:50px;
        background:linear-gradient(35deg, #424242, #212121);
        padding:17.5px 0px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08);
    }
`
const TabWrapper = styled.div.attrs({
    className: 'col s4'
})`
    height: 400px;
`

const AdminDashCard = ({
    body,
    title,
    icon,
    link,
    button,
}) => {
    if(title === 'Blog Post' || title === 'Add Fact'){
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <form>
                        <TextFieldGroup
                            placeholder="Media Link"
                            name="mediaLink"
                            />
                        <button type="submit">{button}</button>
                    </form>
                </Wrapper>
            </TabWrapper>
        )
        } else if(title === 'Make Annoucement' || title === 'Histora Picks'){
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <form>
                        <TextFieldGroup
                            placeholder="Title"
                            name="title"
                            />
                        <TextFieldGroup
                            placeholder="Image"
                            name="image"
                            />
                        <TextFieldGroup
                            placeholder="Body"
                            name="text"
                            />
                        <button type="submit">{button}</button>
                    </form>
                </Wrapper>
            </TabWrapper>
        )
    } else if(title === 'Add Biography') {
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <form>
                        <TextFieldGroup
                            placeholder="Name"
                            name="name"
                            />
                        <TextFieldGroup
                            placeholder="Picture"
                            name="picture"
                            />
                        <TextFieldGroup
                            placeholder="Title"
                            name="title"
                            />
                        <TextFieldGroup
                            placeholder="Nationality"
                            name="nationality"
                            />
                        <TextFieldGroup
                            placeholder="Birth Date"
                            name="birthDate"
                            />
                        <TextFieldGroup
                            placeholder="Death Date"
                            name="deathDate"
                            />
                        <TextFieldGroup
                            placeholder="Description"
                            name="description"
                            />
                        <button type="submit">{button}</button>
                    </form>
                </Wrapper>
            </TabWrapper>
        )
    } else {
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <Link to={link}><button>{button}</button></Link>
                </Wrapper>
            </TabWrapper>
        )
    }
  }

AdminDashCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}

AdminDashCard.defaultProps = {
    type: 'text'
}

export default AdminDashCard;