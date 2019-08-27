import { authHeader, adminAuthHeader, handleResponse } from '../Helpers';
import axios from 'axios';

import { BehaviorSubject } from 'rxjs';

const url = 'https://newsapi.org/v2/everything?' +
          'q=historical&' +
          'from=2019-08-26&' +
          'sortBy=relevancy&' +
          'apiKey=ac12dd292eed415e93cdb79d16203964';


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const NewsAsset = {
    getArticles,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function getArticles(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(url, requestOptions).then(handleResponse);
}