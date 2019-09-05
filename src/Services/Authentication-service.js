import { BehaviorSubject } from 'rxjs';
import { history } from '../Helpers';
import { handleResponse } from '../Helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentAdminSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));

export const authenticationService = {
    login,
    loginAdmin,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { 
        return currentUserSubject.value 
    },
    currentAdmin: currentAdminSubject.asObservable(),
    get currentAdminValue() { 
        return currentAdminSubject.value 
    }
};

function login(email, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(`http://localhost:5000/api/user/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}
function loginAdmin(email, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(`http://localhost:5000/api/admin/auth`, requestOptions)
        .then(handleResponse)
        .then(admin => {
            localStorage.setItem('currentAdmin', JSON.stringify(admin));
            currentAdminSubject.next(admin);
            console.log(JSON.stringify(admin));
            return admin;
        });
}

function logout(){
    if(currentUserSubject){
        localStorage.removeItem('currentUser');
        currentUserSubject.next(null);
        history.push('/');
    }
    if(currentAdminSubject){
        localStorage.removeItem('currentAdmin');
        currentAdminSubject.next(null);
        history.push('/');
    }

}