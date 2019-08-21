import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AssetService } from '../../../../../Services/AssetService';

const Wrapper = styled.div.attrs({
    className: 'col s12'
})`
    background: #FAFAFA;
    padding:15px !important;
    text-align:center;
    margin:25px;
    overflow:auto;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    transition:0.3s;
    &:hover{
        transition:0.3s;
        cursor:pointer;
        box-shadow:0 4px 12px rgba(0,0,0,0.3);

    }
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
})``

const BioAdminCard = ({
    body,
    title,
    icon,
}) => {
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <Formik 
                    initialValues={{
                        name:'',
                        image:'',
                        title: '',
                        nationality: '',
                        birthDate: '',
                        deathDate: '',
                        description: ''
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required'),
                        image: Yup.string().required('Image is required'),
                        title: Yup.string().required('Title is required'),
                        nationality: Yup.string().required('Nationality is required'),
                        birthDate: Yup.string().required('Birth date is required'),
                        deathDate: Yup.string().required('Death date is required'),
                        description: Yup.string().required('Description is required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        AssetService.addBiography(values);
                        setSubmitting(false);
                        resetForm();
                      }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Field name="name" placeholder="Name" type="text" className={(errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="image">Image</label>
                                <Field name="image" placeholder="Image" type="text" className={(errors.image && touched.image ? ' is-invalid' : '')} />
                                <ErrorMessage name="image" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="title">Title</label>
                                <Field name="title" placeholder="Title" type="text" className={(errors.title && touched.title ? ' is-invalid' : '')} />
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="nationality">Nationality</label>
                                <Field name="nationality" placeholder="Nationality" type="text" className={(errors.nationality && touched.nationality ? ' is-invalid' : '')} />
                                <ErrorMessage name="nationality" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="birthDate">Birth Date</label>
                                <Field name="birthDate" placeholder="Birth Date" type="text" className={(errors.birthDate && touched.birthDate ? ' is-invalid' : '')} />
                                <ErrorMessage name="birthDate" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="deathDate">Death Date</label>
                                <Field name="deathDate" placeholder="Death Date" type="text" className={(errors.deathDate && touched.deathDate ? ' is-invalid' : '')} />
                                <ErrorMessage name="deathDate" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <Field name="description" component="textarea" cols="3" placeholder="Description" type="text" className={(errors.description && touched.description ? ' is-invalid' : '')} />
                                <ErrorMessage name="description" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>Post</button>
                                {isSubmitting &&
                                    <img alt="spinner" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>
                            {status &&
                                <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                    />
                </Wrapper>
            </TabWrapper>
        )
  }

BioAdminCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    request: PropTypes.func.isRequired,
}

BioAdminCard.defaultProps = {
    type: 'text'
}

export default BioAdminCard;