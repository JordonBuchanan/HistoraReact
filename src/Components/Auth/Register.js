import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../Common/TextFieldGroup';
import styled from 'styled-components';
import Background from './registerBG.jpg';

const Wrapper = styled.div.attrs({
    className: 'registerWrapper'
})`
    height: 100vh;
    background:linear-gradient(to left, rgba(0,0,0,0.65), rgba(0,0,0,0.65)),url(${Background});
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
    form{
        padding: 10px 75px 25px;
        margin:1vw 5vw 0;
        background: #FAFAFA;
        border-radius: 10px;
        box-shadow:0 4px 8px rgba(0,0,0,0.08);
    }
    .oauth{
        text-align:center;
        margin10px 0;
    }
    small{
        color: #212121 !important;
        display:block;
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

class Register extends Component {
  constructor(){
    super();
/*     if(authenticationService.currentAdminValue){
      this.props.history.push('/');
    }
    if(authenticationService.currentUserValue){
        this.props.history.push('/');
    } */
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 //componentDidMount(){
 //  if(this.props.auth.isAuthenticated){
 //    this.props.history.push('/');
 //  }
//  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors});
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    const newUser ={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    registerUser(newUser, this.props.history)();
    e.preventDefault();
  }
  render() {
    const { errors } = this.state;
    return (
      <Wrapper>
        <div className="row">
          <div className="col s6" id="WhySignUp">
            <h2><span className="thin">Become a</span> Historan</h2>
            <p>Why Become a Historan?</p>
            <ul>
                <li>Access to specialized Dashboard</li>
                <li>Access to numerous papers and documents</li>
                <li>Access to discussion boards</li>
                <li>A say on new content</li>
                <li>Plus much more!</li>
            </ul>
          </div>
          <div className="col s6">
            <form noValidate onSubmit={this.onSubmit}>
                <div className="oauth">
                    <h3><span className="thin">Sign Up</span> Today!</h3>
                    <I className="fab fa-facebook-f"></I>
                    <I className="fab fa-twitter"></I>
                    <I className="fab fa-google"></I>
                    <small>or use your email account:</small>    
                </div>
                <TextFieldGroup
                    label="Name (Optional)"
                    placeholder="John Doe"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                    />
                <TextFieldGroup
                    label="Email"
                    placeholder="JohnDoe@Email.com"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    />
                <TextFieldGroup
                    label="Password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    />
                <TextFieldGroup
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                    />
                
                <button type="submit">Sign Up</button>
                <small className="accountSmall">Don't Have An Account? <Link to="/login">Sign Up!</Link></small>
            </form>
          </div>
        </div>
      </Wrapper>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default Register;