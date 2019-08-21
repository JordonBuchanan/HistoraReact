import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PostService } from '../../../../../Services/Post-service';
import { BehaviorSubject } from 'rxjs';

//const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

const Wrapper = styled.div.attrs({
  className: 'modalBtnDiv'
})`
  display:inline;
`

const Button = styled.a.attrs({
  className: 'newPost modal-trigger'
})`
  font-size:14px;
  text-transform:uppercase;
  font-weight:bold;
  letter-spacing:0.25px;
  color:#757575;
  float:right;
  padding: 15px;
  transition:0.3s;
  cursor:pointer;
  &:hover{
      transition:0.3s;
      color:#212121;
  }
`

const ModalWrapper = styled.div.attrs({
  className: 'modalWrapper'
})`
  border-radius:10px;
  width:500px;
  form{
    padding:5px 25px 25px !important;
    textarea{
      height:100px;
    }
  }
`

const ModalHeader = styled.div.attrs({
  className: 'modalHeader'
})`
  color: #FAFAFA;
  text-align:center;
  background:#212121;
  padding:25px 20px 10px;
  h4{
    font-weight:100;
  }
`

class NewComment extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <Wrapper>
        <Button data-target="modal2">NEW COMMENT</Button>
        <ModalWrapper
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          <div className="modal-content" style={{padding: "0"}}>
            <ModalHeader>
              <h4>New Comment</h4>
            </ModalHeader>
            <Formik
              initialValues={{id: this.props.id, body: '',  image: '', admin: currentAdminSubject.value}}
              validationSchema={Yup.object().shape({
                body: Yup.string().required('Must have a post')
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                PostService.commentPost(values)
                setTimeout(() => {
                  setSubmitting(false);
                  const elem = document.getElementById('modal2');
                  const instance = M.Modal.init(elem, {dismissible: false});
                  instance.close();
                  resetForm();
                  window.flash('Commented successfully!', 'success')
                }, 400);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div>
                    <label htmlFor="image">Image</label>
                    <Field type="text" name="image" />
                    <ErrorMessage name="image" component="div" />
                  </div>
                  <div>
                    <label htmlFor="body">Post</label>
                    <Field component="textarea" cols="3" type="text" name="body" className={(errors.body && touched.body ? ' is-invalid' : '')} />
                    <ErrorMessage name="body" component="div" className="invalid-feedback" />
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  {isSubmitting &&
                    <img alt="spinner" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                </Form>
              )}
            </Formik>
          </div>
        </ModalWrapper>
      </Wrapper>
    );
  }
}

export default NewComment;
