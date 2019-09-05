import { authHeader, adminAuthHeader } from '../Helpers';
import axios from 'axios';

import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const FavoriteService = {
    favoritePost,
    unfavoritePost,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function favoritePost(item){
    console.log(item)
    const params = {body: item, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/${item._id}/favorite`, params)
    .catch(err => {
        console.log(err);
    })
}

function unfavoritePost(id){
    const params = {body: id, admin: currentAdminSubject.value, headers: authHeader() || adminAuthHeader()}
    axios
    .post(`http://localhost:5000/api/${id}/unfavorite`, params)
    .then(function(response){
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}
