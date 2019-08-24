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

const AdminDashCard = ({
    body,
    title,
    icon,
    endpoint,
}) => {
        return (
            <TabWrapper>
                <Wrapper>
                    <i className={icon}></i>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <Formik 
                    initialValues={{
                        title:'',
                        image:'',
                        body: '',
                        author: '',
                        source: '',
                        link: ''
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string().required('Title is required'),
                        author: Yup.string().required('Author is required'),
                        source: Yup.string().required('Source is required'),
                        link: Yup.string().required('Link is required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        if(endpoint === 'booksMedia'){
                            AssetService.addBookMedia(values);
                        } else if (endpoint === 'videosMedia'){
                            AssetService.addVideoMedia(values);
                        } else if (endpoint === 'papersMedia'){
                            AssetService.addPaperMedia(values);
                        } else if (endpoint === "podcastsMedia"){
                            AssetService.addPodcastMedia(values);
                        } else if (endpoint === "biographiesMedia"){
                            AssetService.addBiography(values);
                        }
                        setSubmitting(false);
                        resetForm();
                      }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="title">Title</label>
                                <Field name="title" placeholder="Title" type="text" className={(errors.title && touched.title ? ' is-invalid' : '')} />
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="image">Image</label>
                                <Field name="image" placeholder="Image" type="text" className={(errors.image && touched.image ? ' is-invalid' : '')} />
                                <ErrorMessage name="image" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="body">Body</label>
                                <Field name="body" component="textarea" rows="10" placeholder="Body(optional)" type="text" className={(errors.body && touched.body ? ' is-invalid' : '')} />
                                <ErrorMessage name="body" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="author">Author</label>
                                <Field name="author" placeholder="Author" type="text" className={(errors.author && touched.author ? ' is-invalid' : '')} />
                                <ErrorMessage name="author" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="source">Source</label>
                                <Field name="source" placeholder="Source" type="text" className={(errors.source && touched.source ? ' is-invalid' : '')} />
                                <ErrorMessage name="source" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="link">Link</label>
                                <Field name="link" placeholder="Link" type="text" className={(errors.link && touched.link ? ' is-invalid' : '')} />
                                <ErrorMessage name="link" component="div" className="invalid-feedback" />
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

AdminDashCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    endpoint: PropTypes.string.isRequired,
}

AdminDashCard.defaultProps = {
    type: 'text'
}

export default AdminDashCard;