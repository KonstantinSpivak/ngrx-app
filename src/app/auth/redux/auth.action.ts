import { User } from "../../shared/model/user.model";

export namespace AUTH_ACTIONS {
    export const LoginUser = 'LOGIN_USER';
    export const LogoutUser = 'LOGOUT_USER';
}

export class AuthLogin {
    constructor(public payload: UserLoginForm){}
}