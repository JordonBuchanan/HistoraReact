import React, { Component } from 'react';
import styled from 'styled-components';
import background from './Jordon.jpeg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { askHostService } from '../../../../Services';
import { Mail } from 'styled-icons/icomoon';

const Wrapper = styled.div.attrs({
    className: 'askHostWrapper col s12'
})`
    background:linear-gradient(to bottom, rgb(0,0,0,0.4), rgba(0,0,0,0.7), black),url('${background}');
    background-size:cover;
    border-radius:10px;
    height:300px;
    form{
        padding-top:27.5vh !important;
        input{
            background:#FAFAFA;
            color: white !important;
w        }
    }
`
const Title = styled.h4.attrs({
    className: 'historyNewsTitle'
})`
    letter-spacing:0.25px;
    font-size:34px;
    margin-top:75px;
    font-weight:500;
    &:before{
        content:"Ask The Host";
        position:absolute;
        z-index:-1;
        opacity:0.25;
        color: #bdbdbd;
        font-weight:bold;
        font-size:54px;
        margin-left:10px;
        margin-top:15px;
    }
`

class AskHost extends Component {
    render() {
        return (
            <div className="col s3">
                <Title>Ask The Host</Title>
                <Wrapper>
                  <Formik 
                    initialValues={{
                        askHost:''
                    }}
                    validationSchema={Yup.object().shape({
                        askHost: Yup.string().required('Must ask a question!')
                    })}
                    onSubmit={({ askHost }, { setStatus, setSubmitting, resetForm }) => {
                        setStatus()
                        askHostService.sendToHost(askHost)
                        resetForm();
                        window.flash('Sent to Host!', 'success')
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="askHost">Question? Suggestion? Request? Ask Here!</label>
                                <Field name="askHost" placeholder="Ask Something..." type="text" className={(errors.askHost && touched.askHost ? ' is-invalid' : '')} />
                                <ErrorMessage name="askHost" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>Send</button>
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
            </div>
        )
    }
}
export default AskHost;