import { Action } from '@ngrx/store';
import { AuthLogin, AuthActionsType } from './auth.actions';

export function authReducer(state = {}, action: AuthLogin) {
    console.log(`run: ${action.type} payload:`);
    console.log(action.payload);
    switch (action.type) {
        case AuthActionsType.LOG_IN:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}