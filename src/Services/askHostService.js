import { authHeader, adminAuthHeader, handleResponse } from '../Helpers';
import axios from 'axios';

import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const askHostService = {
    sendToHost,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function sendToHost(item){
    console.log(item)
    const params = {body: item, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/askHost`, params)
    .then(handleResponse)
    .catch(err => {
        console.log(err);
    })
}
