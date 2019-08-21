import { authHeader, adminAuthHeader, handleResponse } from '../Helpers';
import axios from 'axios';

import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const PostService = {
    addPost,
    getPosts,
    deletePost,
    likePost,
    commentPost,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function addPost(userData){
    axios
    .post('http://localhost:5000/api/posts/add', userData)
    .catch(err =>
        console.log('error')
    );
}

function getPosts(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/posts`, requestOptions).then(handleResponse);
}
function deletePost(id){
    const params = {body: id, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/posts/${id}`, params)
    .then(function(response){
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}

function likePost(id){
    const params = {body: id, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/posts/${id}/like`, params)
    .then(function(response){
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}

function commentPost(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/posts/${data.id}/comment`, params)
    .then(function(response){
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}