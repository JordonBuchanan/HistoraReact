import { authenticationService } from '../Services';

export function authHeader(){
    const currentUser = authenticationService.currentUserValue;
    if(currentUser && currentUser.token){
        return { Authorization: `Bearer ${currentUser.token}`};
    } else {
        return {};
    }
}
export function adminAuthHeader(){
    const currentAdmin = authenticationService.currentAdminValue;
    if(currentAdmin && currentAdmin.token){
        return { Authorization: `Bearer ${currentAdmin.token}`};
    } else {
        return {};
    }
}