import { User } from "../../shared/model/user.model";
import { Action } from "@ngrx/store";

export enum AuthActionsType {
    LOG_IN = '[Auth] Login',
    LOG_IN_SUCCESS = '[Auth] Login Success',
    LOG_IN_FAIL = '[Auth] Login Fail',
}

export class AuthLogin implements Action {
    readonly type = AuthActionsType.LOG_IN;
    constructor(public payload: any) { }
}

export class AuthLoginSuccess implements Action {
    readonly type = AuthActionsType.LOG_IN_SUCCESS;
    constructor(public payload: any) { }
}

export class AuthLoginFail implements Action {
    readonly type = AuthActionsType.LOG_IN_FAIL;
    constructor(public payload: any) { }
}