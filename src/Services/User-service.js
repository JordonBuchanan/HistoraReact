import { authHeader, adminAuthHeader, handleResponse } from '../Helpers';

export const userService = {
    getAll,
    getAllAdmin
};

function getAll(){
    const requestOptions = { method: 'GET', headers: authHeader() || adminAuthHeader() };
    return fetch(`http://localhost:5000/api/user`, requestOptions).then(handleResponse);
}
function getAllAdmin(){
    const requestOptions = { method: 'GET', headers: adminAuthHeader() };
    return fetch(`http://localhost:5000/api/admin`, requestOptions).then(handleResponse);
}