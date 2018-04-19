import { User } from "../../shared/model/user.model";
import { Action } from "@ngrx/store";

export enum AuthActionsType {
    LOG_IN = '[Auth] Login'
}
export class AuthLogin implements Action {
    readonly type = AuthActionsType.LOG_IN;
    constructor(public payload: any) {}
}