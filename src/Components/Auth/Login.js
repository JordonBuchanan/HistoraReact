import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticationService } from '../../Services/Authentication-service';
import styled from 'styled-components';
import Background from './loginBG.jpg';


const Wrapper = styled.div.attrs({
    className: 'loginWrapper'
})`
    height: 100vh;
    background:linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.65)),url(${Background});
    background-size:cover;
    #WhySignUp{
        padding:0 5vw;
    }
    h2{
        color:#FAFAFA;
        margin-top:75px;
    }
    p{
        color: #F5F5F5;
        font-size:16px;
        font-weight:500;
        letter-spacing:0.15px;
    }
    li{
        color:#F5F5F5;
        letter-spacing:0.5px;
        font-size:16px;
        list-style-type: circle;
    }
    Form{
        padding: 10px 75px 25px;
        margin:5vw 5vw 0;
        background: #FAFAFA;
        border-radius: 10px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08);
    }
    .invalid-feedback{
        color:#F44336;
        font-size:12px;
        padding-bottom:5px;
    }
    .oauth{
        text-align:center;
        margin10px 0;
    }
    small{
        color: #212121 !important;
        display:block;
    }
    #loginIntro h1{
        color:#FAFAFA;
        margin:0;
        margin-left:15px;
    }
    #loginIntro h1:nth-of-type(1){
        margin-top:15vw;
    }
    #loginIntro h1:nth-of-type(2){
        font-weight:bold
    }
`
const I = styled.i.attrs({
    className: 'podcastIcon'
})`
    margin:15px;
    font-size:24px;
    color:#FAFAFA;
    background:#212121;
    border-radius:100%;
    width:50px;
    height:50px;
    box-shadow:0 4px 8px rgba(0,0,0,0.08);
    text-align:center;
    padding-top:13px;
    `

class Login extends Component {
    constructor(props){
        super(props);
        if(authenticationService.currentAdminValue){
            this.props.history.push('/');
        }
        if(authenticationService.currentUserValue){
            this.props.history.push('/');
        }
      }

    render() {
        return (
            <Wrapper>
            <div className="row">
              <div className="col s6" id="loginIntro">
                  <h1>Welcome Back,</h1>
                  <h1>Historan</h1>
              </div>
              <div className="col s6">
                <Formik 
                    initialValues={{
                        email:'',
                        password:''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('Email is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onSubmit={({ email, password }, { setStatus, setSubmitting}) => {
                        setStatus()
                        authenticationService.login(email, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: {pathname: "/"} };
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div className="oauth">
                                <h3><span className="thin">Sign </span>In</h3>
                                <I className="fab fa-facebook-f"></I>
                                <I dclassName="fab fa-twitter"></I>
                                <I className="fab fa-google"></I>
                                <small>or use your email account:</small>    
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field name="email" placeholder="JohnDoe@Email.com" type="email" className={(errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field name="password" placeholder="Password" type="password" className={(errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>Sign In</button>
                                <small class="accountSmall">Don't Have An Account? <Link to="/register">Sign Up!</Link></small>
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
              </div>
            </div>
          </Wrapper>
        )
    }
}

export default Login;