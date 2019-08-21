import { authHeader, adminAuthHeader, handleResponse } from '../Helpers';
import axios from 'axios';

import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const AssetService = {
    addBiography,
    getBiographies,
    addBookMedia,
    getBookMedias,
    addVideoMedia,
    getVideoMedias,
    addPodcastMedia,
    getPodcastMedias,
    addPaperMedia,
    getPaperMedias,
    getVideos,
    addVideo,
    getPodcasts,
    addPodcast,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function addBiography(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/biography/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getBiographies(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/biography`, requestOptions).then(handleResponse);
}

function addBookMedia(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/booksmedia/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getBookMedias(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/booksmedia`, requestOptions).then(handleResponse);
}

function addVideoMedia(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/videosmedia/add', params)
    .then(window.flash('record has been created successfully!', 'success'))
    .catch(err =>
        console.log('error')
    );
}

function getVideoMedias(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/videosmedia`, requestOptions).then(handleResponse);
}

function addPodcastMedia(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/podcastsmedia/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getPodcastMedias(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/podcastsmedia`, requestOptions).then(handleResponse);
}

function addPaperMedia(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/papermedia/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getPaperMedias(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/papermedia`, requestOptions).then(handleResponse);
}

function addVideo(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/videos/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getVideos(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/videos`, requestOptions).then(handleResponse);
}

function addPodcast(data){
    const params = {data, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post('http://localhost:5000/api/podcasts/add', params)
    .catch(err =>
        console.log('error')
    );
}

function getPodcasts(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/podcasts`, requestOptions).then(handleResponse);
}

